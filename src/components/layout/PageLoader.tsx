import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Loader from "../common/Loader";
import { useLoader } from "../../context/LoaderContext";

export default function PageLoader() {
  const {
    loading,
    showLoader,
    hideLoader,
  } = useLoader();

  const location = useLocation();

  // Current route ko initially store karenge.
  // Isse initial page load par loader dobara nahi chalega.
  const previousPath = useRef(
    location.pathname +
      location.search +
      location.hash
  );

  useEffect(() => {
    const currentPath =
      location.pathname +
      location.search +
      location.hash;

    // Initial render:
    // index.html wala loader already handle kar raha hai.
    if (previousPath.current === currentPath) {
      return;
    }

    // Actual route change
    previousPath.current = currentPath;

    // Loader ON
    showLoader();

    // Minimum 2.5 seconds ke baad OFF
    hideLoader();
  }, [
    location.pathname,
    location.search,
    location.hash,
    showLoader,
    hideLoader,
  ]);

  return <Loader loading={loading} />;
}