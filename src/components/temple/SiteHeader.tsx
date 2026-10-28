"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/#journey" },
  { label: "Gallery", href: "/gallery" },
  { label: "Temple", href: "/#temple" },
  { label: "Contact", href: "/#contact" },
  { label: "Donate Now", href: "/#donate", emphasis: true },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const navigation = mobileNavigationRef.current;
    const firstControl = navigation?.querySelector<HTMLElement>("button, a[href]");
    firstControl?.focus();

    const keepFocusInMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !navigation) return;
      const controls = navigation.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]");
      const first = controls[0];
      const last = controls[controls.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", keepFocusInMenu);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", keepFocusInMenu);
    };
  }, [closeMenu, open]);

  const isCurrent = (href: string) =>
    href === "/about" ? pathname === "/about" : href === "/gallery" ? pathname.startsWith("/gallery") : href === "/" && pathname === "/";

  return (
    <>
      <a href="#main-content" className="sr-only z-[100] bg-temple-ivory px-4 py-3 text-temple-burgundy focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <header id="top" className="sticky top-0 z-50 border-b border-temple-burgundy/15 bg-temple-ivory text-temple-burgundy shadow-[0_5px_22px_rgba(48,35,31,.07)]">
        <div className="mx-auto flex h-[70px] max-w-[1680px] items-center justify-between gap-3 px-4 sm:h-[78px] sm:gap-5 sm:px-7 lg:px-12">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Shri Khatu Shyam Ji Temple, Home">
            <Image src="/images/logo.png" alt="Khatu Shyam Temple Logo" width={1024} height={1024} sizes="(max-width: 640px) 42px, 50px" priority className="h-[42px] w-[42px] shrink-0 object-contain sm:h-[50px] sm:w-[50px]" />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-base font-semibold text-temple-burgundy sm:text-xl">Shri Khatu Shyam Ji</span>
              <span className="mt-1 block text-[9px] uppercase tracking-[.22em] text-temple-muted sm:text-[10px]">Temple</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-3 xl:flex 2xl:gap-5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={item.emphasis ? "btn-primary ml-1 !min-h-10 !px-4 !py-2" : `relative inline-flex min-h-11 items-center px-1 text-[13px] font-semibold tracking-wide transition-colors after:absolute after:bottom-1 after:left-1 after:right-1 after:h-px after:origin-left after:scale-x-0 after:bg-temple-saffron after:transition-transform hover:text-temple-rust hover:after:scale-x-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-rust ${isCurrent(item.href) ? "text-temple-rust after:scale-x-100" : "text-temple-ink"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-temple-burgundy/30 text-temple-burgundy transition-colors hover:border-[#FF8C00] hover:bg-[#FF8C00] hover:text-temple-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-rust xl:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] xl:hidden ${open ? "visible" : "invisible pointer-events-none"}`}>
        <button className={`absolute inset-0 h-full w-full bg-black/55 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} type="button" aria-label="Close navigation menu" onClick={closeMenu} />
        <nav
          ref={mobileNavigationRef}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!open}
          className={`absolute inset-y-0 right-0 flex w-[min(420px,88vw)] flex-col overflow-y-auto overscroll-contain bg-temple-burgundy px-6 pb-8 pt-6 text-temple-ivory shadow-2xl transition-transform duration-300 sm:px-8 ${open ? "translate-x-0" : "translate-x-full"} motion-reduce:transition-none`}
          inert={!open}
        >
          <div className="flex items-center gap-3 border-b border-temple-gold/30 pb-6">
            <Image src="/images/logo.png" alt="Khatu Shyam Temple Logo" width={1024} height={1024} sizes="44px" className="h-11 w-11 rounded-full bg-temple-ivory object-contain" />
            <p className="font-display text-xl font-semibold text-temple-gold">Menu</p>
            <button type="button" onClick={closeMenu} aria-label="Close navigation menu" className="ml-auto flex h-11 w-11 items-center justify-center border border-white/40 text-white transition-colors hover:border-[#FF8C00] hover:bg-[#FF8C00] hover:text-temple-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><X aria-hidden="true" /></button>
          </div>
          <div className="grid pt-3">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href} onClick={closeMenu} aria-current={isCurrent(item.href) ? "page" : undefined} className={`flex min-h-[58px] items-center justify-between border-b border-white/15 font-display text-xl transition-colors hover:text-temple-gold ${item.emphasis ? "mx-1 mt-4 border border-temple-gold bg-temple-gold px-4 font-semibold text-temple-burgundy hover:border-[#FF8C00] hover:bg-[#FF8C00] hover:text-temple-burgundy" : isCurrent(item.href) ? "text-temple-gold" : "text-white"}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
