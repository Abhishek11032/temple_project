"use client";

import { ChevronUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { footerContent } from "@/data/temple-content";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 440);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <a href={footerContent.whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label={footerContent.whatsapp.label} className="fixed bottom-6 right-6 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-gold lg:flex motion-reduce:transform-none">
        <MessageCircle size={27} aria-hidden="true" />
      </a>
      <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-24 right-4 z-40 hidden h-14 w-14 items-center justify-center border border-temple-gold/60 bg-temple-burgundy text-white shadow-xl transition-all hover:border-[#FF8C00] hover:bg-[#FF8C00] hover:text-temple-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-gold lg:flex ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"} motion-reduce:transition-none`}>
        <ChevronUp aria-hidden="true" />
      </button>
    </>
  );
}
