"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import SpiritualLoader from "@/components/temple/SpiritualLoader";

type NavigationState = {
  id: number;
  pathname: string;
  minimumElapsed: boolean;
  ready: boolean;
};

function hasReadyMarker(pathname: string): boolean {
  return Array.from(document.querySelectorAll<HTMLElement>("[data-temple-route-ready]"))
    .some((marker) => marker.dataset.templeRouteReady === pathname);
}

export default function LoadingExperience({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const [lastReadyPath, setLastReadyPath] = useState(pathname);
  const [initialVisible, setInitialVisible] = useState(true);
  const [navigation, setNavigation] = useState<NavigationState | null>(null);
  const [failed, setFailed] = useState(false);
  const nextId = useRef(0);
  const pendingNavigationPath = useRef<string | null>(null);
  const navigationTimer = useRef<number | null>(null);
  const initialMinimumElapsed = useRef(false);
  const initialReady = useRef(false);
  const navigationActive = navigation !== null && !(navigation.minimumElapsed && navigation.ready);
  const routeChanged = pathname !== lastReadyPath;
  const blocked = initialVisible || navigationActive || routeChanged || failed;

  useEffect(() => {
    const finishIfReady = () => {
      if (initialMinimumElapsed.current && initialReady.current) setInitialVisible(false);
    };
    const minimumTimer = window.setTimeout(() => {
      initialMinimumElapsed.current = true;
      finishIfReady();
    }, 2000);
    const checkReady = () => {
      if (!initialReady.current && hasReadyMarker(pathname)) {
        initialReady.current = true;
        finishIfReady();
      }
    };
    const observer = new MutationObserver(checkReady);
    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["data-temple-route-ready"],
    });
    checkReady();

    return () => {
      window.clearTimeout(minimumTimer);
      observer.disconnect();
    };
  }, [pathname]);

  const startNavigation = useCallback((targetPath: string) => {
    if (pendingNavigationPath.current === targetPath) return;
    pendingNavigationPath.current = targetPath;
    if (navigationTimer.current !== null) window.clearTimeout(navigationTimer.current);
    const id = ++nextId.current;
    setFailed(false);
    setNavigation({ id, pathname: targetPath, minimumElapsed: false, ready: false });
  }, []);

  const navigationId = navigation?.id;
  const navigationMinimumElapsed = navigation?.minimumElapsed;
  useEffect(() => {
    if (navigationId === undefined || navigationMinimumElapsed) return;
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        navigationTimer.current = window.setTimeout(() => {
          navigationTimer.current = null;
          setNavigation((current) => current?.id === navigationId ? { ...current, minimumElapsed: true } : current);
        }, 2000);
      });
    });
    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
      if (navigationTimer.current !== null) {
        window.clearTimeout(navigationTimer.current);
        navigationTimer.current = null;
      }
    };
  }, [navigationId, navigationMinimumElapsed]);

  useEffect(() => {
    if (!routeChanged || pendingNavigationPath.current === pathname) return;
    const timer = window.setTimeout(() => startNavigation(pathname), 0);
    return () => window.clearTimeout(timer);
  }, [pathname, routeChanged, startNavigation]);

  useEffect(() => {
    if (navigation?.minimumElapsed && navigation.ready && pendingNavigationPath.current === navigation.pathname) {
      pendingNavigationPath.current = null;
    }
  }, [navigation]);

  useEffect(() => {
    if (!navigation) return;

    const checkDestination = () => {
      if (pathname === navigation.pathname && hasReadyMarker(navigation.pathname)) {
        setLastReadyPath((current) => current === navigation.pathname ? current : navigation.pathname);
        setNavigation((current) => current?.id === navigation.id && !current.ready ? { ...current, ready: true } : current);
      }
    };
    const observer = new MutationObserver(checkDestination);
    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["data-temple-route-ready"],
    });
    checkDestination();
    return () => observer.disconnect();
  }, [navigation, pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      let destination: URL;
      try {
        destination = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname) return;
      startNavigation(destination.pathname);
    };

    const handlePopState = () => {
      const targetPath = window.location.pathname;
      if (targetPath !== lastReadyPath) startNavigation(targetPath);
    };

    const handleRuntimeFailure = (event: Event) => {
      if (event.type === "error" && (event as ErrorEvent).target !== window) return;
      if (!initialVisible && !navigationActive) return;
      if (initialVisible) setInitialVisible(false);
      if (navigationTimer.current !== null) window.clearTimeout(navigationTimer.current);
      navigationTimer.current = null;
      setNavigation(null);
      pendingNavigationPath.current = null;
      setFailed(true);
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", handlePopState, true);
    const navigationApi = (window as unknown as { navigation?: EventTarget }).navigation;
    const handleNavigate = (event: Event) => {
      const destinationUrl = (event as Event & { destination?: { url?: string } }).destination?.url;
      if (!destinationUrl) return;
      try {
        const destination = new URL(destinationUrl);
        if (destination.origin === window.location.origin && destination.pathname !== lastReadyPath) {
          startNavigation(destination.pathname);
        }
      } catch {
        return;
      }
    };
    navigationApi?.addEventListener("navigate", handleNavigate);
    window.addEventListener("error", handleRuntimeFailure);
    window.addEventListener("unhandledrejection", handleRuntimeFailure);
    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState, true);
      navigationApi?.removeEventListener("navigate", handleNavigate);
      window.removeEventListener("error", handleRuntimeFailure);
      window.removeEventListener("unhandledrejection", handleRuntimeFailure);
    };
  }, [initialVisible, lastReadyPath, navigationActive, pathname, startNavigation]);

  useEffect(() => {
    if (!blocked) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [blocked]);

  useEffect(() => () => {
    if (navigationTimer.current !== null) window.clearTimeout(navigationTimer.current);
  }, []);

  return (
    <>
      <div id="temple-site-content" aria-hidden={blocked} inert={blocked || undefined}>
        {children}
      </div>
      <SpiritualLoader active={blocked} failed={failed} onRetry={() => window.location.reload()} />
    </>
  );
}
