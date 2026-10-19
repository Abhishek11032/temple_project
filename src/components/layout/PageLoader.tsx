"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import Loader from "../common/Loader";
import { useLoader } from "../../context/LoaderContext";
import { watchRequiredImages } from "../../lib/loaderImages";

const MINIMUM_LOADER_DURATION_MS = 2000;

export default function PageLoader() {
  const {
    loading,
    showLoader,
    hideLoader,
  } = useLoader();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString() ?? "";

  // Current route ko initially store karenge.
  // Isse initial page load par loader dobara nahi chalega.
  const previousPath = useRef(
    pathname + "?" + search
  );

  useEffect(() => {
    const currentPath = pathname + "?" + search;

    // Initial render:
    // index.html wala loader already handle kar raha hai.
    if (previousPath.current === currentPath) {
      return;
    }

    // Actual route change
    previousPath.current = currentPath;

    // Destination content is committed before this effect runs, so only
    // explicitly marked initial-screen images are included in this wait.
    showLoader();
    let minimumDurationElapsed = false;
    let requiredImagesSettled = false;
    let active = true;

    const tryHideLoader = () => {
      if (active && minimumDurationElapsed && requiredImagesSettled) {
        hideLoader();
      }
    };

    const timer = window.setTimeout(() => {
      minimumDurationElapsed = true;
      tryHideLoader();
    }, MINIMUM_LOADER_DURATION_MS);
    const stopWatchingImages = watchRequiredImages(() => {
      requiredImagesSettled = true;
      tryHideLoader();
    });

    return () => {
      active = false;
      window.clearTimeout(timer);
      stopWatchingImages();
    };
  }, [
    pathname,
    search,
    showLoader,
    hideLoader,
  ]);

  return <Loader loading={loading} />;
}
