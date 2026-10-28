"use client";

import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollCue({ href, label }: { href: string; label: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const shouldShow = window.scrollY < 24;
        setVisible((current) => current === shouldShow ? current : shouldShow);
        frame = 0;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a
      href={href}
      aria-label={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`absolute bottom-4 left-1/2 z-10 inline-flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-semibold uppercase tracking-[.2em] text-white drop-shadow-md transition-opacity duration-300 hover:text-temple-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-gold sm:bottom-6 ${visible ? "opacity-100" : "pointer-events-none opacity-0"} motion-reduce:transition-none`}
    >
      <span>{label}</span>
      <ArrowDown size={16} aria-hidden="true" className="animate-bounce motion-reduce:animate-none" />
    </a>
  );
}
