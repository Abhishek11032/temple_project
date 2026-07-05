import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full bg-[#7A2E1D] text-white shadow-xl transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <ChevronUp className="mx-auto" />
    </button>
  );
}