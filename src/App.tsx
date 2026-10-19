"use client";

import { Suspense, useEffect, useState } from "react";
import PageLoader from "./components/layout/PageLoader";
import InitialLoader from "./components/layout/InitialLoader";
import { LoaderProvider } from "./context/LoaderContext";
import { watchRequiredImages } from "./lib/loaderImages";

const MINIMUM_LOADER_DURATION_MS = 2000;

export default function App({ children }: { children?: React.ReactNode }) {
  const [loaderFading, setLoaderFading] = useState(false);
  const [showInitialLoader, setShowInitialLoader] = useState(true);
  const [minimumDurationElapsed, setMinimumDurationElapsed] = useState(false);
  const [requiredImagesSettled, setRequiredImagesSettled] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setMinimumDurationElapsed(true),
      MINIMUM_LOADER_DURATION_MS,
    );
    const stopWatchingImages = watchRequiredImages(() =>
      setRequiredImagesSettled(true),
    );

    return () => {
      window.clearTimeout(timer);
      stopWatchingImages();
    };
  }, []);

  useEffect(() => {
    if (!minimumDurationElapsed || !requiredImagesSettled) return;

    const frame = window.requestAnimationFrame(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setShowInitialLoader(false);
      } else {
        setLoaderFading(true);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [minimumDurationElapsed, requiredImagesSettled]);

  return (
    <>
      <LoaderProvider>
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>
        {children}
      </LoaderProvider>
      {showInitialLoader && (
        <InitialLoader
          fading={loaderFading}
          onFadeComplete={() => setShowInitialLoader(false)}
        />
      )}
    </>
  );
}
