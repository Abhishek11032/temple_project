"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryData, type GalleryItem } from "@/data/Gallerydata";
import { galleryContent } from "@/data/temple-content";

type GalleryPageProps = { event?: string };

export default function GalleryPage({ event }: GalleryPageProps) {
  const category = galleryContent.categories.find((item) => item.slug === event);
  const records: GalleryItem[] = event
    ? galleryData[event as keyof typeof galleryData] ?? []
    : Object.values(galleryData).flat();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedIndex === null) {
      triggerRef.current?.focus();
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const handleKey = (keyEvent: KeyboardEvent) => {
      if (keyEvent.key === "Escape") setSelectedIndex(null);
      if (keyEvent.key === "ArrowRight") setSelectedIndex((index) => index === null ? null : (index + 1) % records.length);
      if (keyEvent.key === "ArrowLeft") setSelectedIndex((index) => index === null ? null : (index - 1 + records.length) % records.length);
      if (keyEvent.key === "Tab") {
        const controls = dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled])");
        const first = controls?.[0];
        const last = controls?.[controls.length - 1];
        if (keyEvent.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
          keyEvent.preventDefault();
          last?.focus();
        } else if (!keyEvent.shiftKey && document.activeElement === last) {
          keyEvent.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIndex, records.length]);

  const selected = selectedIndex === null ? null : records[selectedIndex];
  const shiftSelection = (direction: number) => setSelectedIndex((index) => index === null ? null : (index + direction + records.length) % records.length);
  const pageTitle = category?.title ?? galleryContent.allTitle;
  const pageDescription = category
    ? `${galleryContent.eventDescriptionPrefix} ${category.title}${galleryContent.eventDescriptionSuffix}`
    : galleryContent.allDescription;

  return (
    <main id="main-content" className="min-h-[70vh] bg-temple-ivory">
      <section className="border-b border-temple-gold/35 bg-temple-burgundy px-5 pb-11 pt-12 text-white sm:px-8 sm:pb-14 sm:pt-16 lg:px-12 lg:pb-16">
        <div className="mx-auto max-w-[1320px]">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-white/70"><Link href="/" className="inline-flex min-h-10 items-center hover:text-temple-gold">Home</Link><ChevronRight size={15} aria-hidden="true" /><Link href="/gallery" aria-current={!event ? "page" : undefined} className="inline-flex min-h-10 items-center hover:text-temple-gold">Gallery</Link>{category && <><ChevronRight size={15} aria-hidden="true" /><span aria-current="page" className="text-temple-gold">{category.title}</span></>}</nav>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-gold">{galleryContent.title}</p>
            <h1 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">{pageTitle}</h1>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">{pageDescription}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-9 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <nav aria-label="Gallery categories" className="flex flex-wrap gap-2 border-b border-temple-ink/15 pb-5 lg:justify-center">
          <Link href="/gallery" aria-current={!event ? "page" : undefined} className={`inline-flex min-h-11 items-center border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-saffron ${!event ? "border-temple-burgundy bg-temple-burgundy text-white" : "border-temple-burgundy/20 text-temple-burgundy hover:border-temple-saffron hover:text-temple-rust"}`}>{galleryContent.allTitle}</Link>
          {galleryContent.categories.map((item) => <Link key={item.slug} href={`/gallery/${item.slug}`} aria-current={event === item.slug ? "page" : undefined} className={`inline-flex min-h-11 items-center border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-saffron ${event === item.slug ? "border-temple-burgundy bg-temple-burgundy text-white" : "border-temple-burgundy/20 text-temple-burgundy hover:border-temple-saffron hover:text-temple-rust"}`}>{item.label}</Link>)}
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-10 xl:gap-x-7 xl:gap-y-12">
          {records.map((item, index) => {
            const layoutPosition = index % 6;
            const featured = layoutPosition < 2;
            const desktopSpan = layoutPosition === 0 ? "lg:col-span-7" : layoutPosition === 1 ? "lg:col-span-5" : "lg:col-span-3";
            const desktopAspect = layoutPosition === 0 ? "lg:aspect-[7/5]" : layoutPosition === 1 ? "lg:aspect-square" : "";
            return <article key={`${item.image}-${index}`} className={`group min-w-0 ${featured ? "sm:col-span-2" : "sm:col-span-1"} ${desktopSpan}`}>
            <button ref={index === 0 ? triggerRef : undefined} type="button" onClick={(clickEvent) => { triggerRef.current = clickEvent.currentTarget; setSelectedIndex(index); }} aria-label={`${item.title}${item.date ? `, ${item.date}` : ""}`} className={`relative block w-full overflow-hidden bg-temple-sand text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-saffron ${featured ? "aspect-[4/3] sm:aspect-[16/8]" : "aspect-[4/3]"} ${desktopAspect}`}>
              <Image src={item.image} alt={item.title} fill sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transform-none" />
              <span className="absolute inset-0 bg-gradient-to-t from-temple-burgundy/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              {item.date && <span className="absolute right-3 top-3 bg-temple-ivory/95 px-3 py-2 text-xs font-semibold text-temple-burgundy">{item.date}</span>}
              <span className="absolute bottom-3 left-4 right-4 text-left text-white"><span className="block text-[10px] font-semibold uppercase tracking-[.2em] text-temple-gold">{galleryContent.eventLabel}</span><span className="mt-1 block font-display text-xl font-semibold sm:text-2xl">{item.title}</span></span>
            </button>
            <div className="border-b border-temple-ink/15 px-1 py-4">
              <h2 className="font-display text-xl font-semibold text-temple-burgundy">{item.title}</h2>
              {item.guest && <p className="mt-2 text-sm leading-6 text-temple-muted">{item.guest}</p>}
              {item.event && <p className="mt-2 text-sm leading-6 text-temple-ink">{item.event}</p>}
              {item.date && <p className="mt-3 text-xs font-semibold tracking-wide text-temple-rust">{item.date}</p>}
            </div>
          </article>;
          })}
        </div>

        <Link href="/" className="btn-secondary mt-10"><ArrowLeft size={17} aria-hidden="true" />Home</Link>
      </section>

      {selected && selectedIndex !== null && <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#170d0e]/95 p-3 text-white sm:p-8" onMouseDown={(mouseEvent) => { if (mouseEvent.target === mouseEvent.currentTarget) setSelectedIndex(null); }}>
        <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={selected.title} tabIndex={-1} className="relative flex max-h-[94svh] w-full max-w-6xl flex-col outline-none">
          <div className="mb-3 flex items-center justify-between gap-4"><p className="min-w-0 truncate font-display text-xl text-temple-gold sm:text-2xl">{selected.title}</p><button type="button" onClick={() => setSelectedIndex(null)} aria-label="Close image" className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/40 transition-colors hover:border-[#FF8C00] hover:bg-[#FF8C00] hover:text-temple-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-gold"><X aria-hidden="true" /></button></div>
          <div className="relative min-h-0 flex-1"><Image src={selected.image} alt={selected.title} width={1600} height={1200} sizes="100vw" className="max-h-[72svh] w-full object-contain" /></div>
          {(selected.date || selected.guest || selected.event) && <div className="mt-3 flex flex-wrap items-start justify-between gap-2 text-sm text-white/80">{selected.guest && <p className="max-w-3xl">{selected.guest}</p>}{selected.event && <p>{selected.event}</p>}{selected.date && <p className="font-semibold text-temple-gold">{selected.date}</p>}</div>}
          <button type="button" onClick={() => shiftSelection(-1)} aria-label="Previous image" className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/30 transition-colors hover:border-[#FF8C00] hover:bg-[#FF8C00] hover:text-temple-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:-left-14"><ChevronLeft aria-hidden="true" /></button>
          <button type="button" onClick={() => shiftSelection(1)} aria-label="Next image" className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/30 transition-colors hover:border-[#FF8C00] hover:bg-[#FF8C00] hover:text-temple-burgundy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:-right-14"><ChevronRight aria-hidden="true" /></button>
          <p className="sr-only">Image {selectedIndex + 1} of {records.length}</p>
        </div>
      </div>}
    </main>
  );
}
