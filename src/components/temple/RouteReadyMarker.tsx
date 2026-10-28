"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function RouteReadyMarker() {
  const pathname = usePathname();
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (pathname) markerRef.current?.setAttribute("data-temple-route-ready", pathname);
  }, [pathname]);

  return <span ref={markerRef} hidden aria-hidden="true" data-temple-route-pending={pathname ?? ""} />;
}
