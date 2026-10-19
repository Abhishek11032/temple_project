"use client";

import { useEffect } from "react";

export default function SectionScroller() {
  useEffect(() => {
    const sectionId = new URLSearchParams(window.location.search).get("section");

    if (!sectionId) return;

    const timeout = window.setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (!section) return;

      const navbarHeight = 96;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }, 200);

    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}
