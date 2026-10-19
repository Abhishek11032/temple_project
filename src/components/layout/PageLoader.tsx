"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import Loader from "../common/Loader";
import { useLoader } from "../../context/LoaderContext";

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

    // The destination route is already rendered at this point. Keep the
    // transition indicator brief, then let its CSS fade-out finish.
    showLoader();
    const frame = requestAnimationFrame(hideLoader);

    return () => cancelAnimationFrame(frame);
  }, [
    pathname,
    search,
    showLoader,
    hideLoader,
  ]);

  return <Loader loading={loading} />;
}
