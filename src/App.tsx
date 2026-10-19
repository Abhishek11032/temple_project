"use client";

import { Suspense, useEffect, useState } from "react";
import PageLoader from "./components/layout/PageLoader";
import InitialLoader from "./components/layout/InitialLoader";
import { LoaderProvider } from "./context/LoaderContext";

export default function App({ children }: { children?: React.ReactNode }) {
  const [loaderFading, setLoaderFading] = useState(false);
  const [showInitialLoader, setShowInitialLoader] = useState(true);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setLoaderFading(true);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setShowInitialLoader(false);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, []);

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
