import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight, HeartHandshake, Images, Landmark, MapPin, Mountain } from "lucide-react";
import { journeyContent } from "@/data/temple-content";

const highlightIcons = { location: MapPin, temple: Landmark, mountain: Mountain };

export default function JourneyPage() {
  return (
    <main id="main-content">
      <section className="relative isolate min-h-[580px] overflow-hidden bg-temple-burgundy px-4 py-5 text-white sm:min-h-[620px] sm:px-8 sm:py-8 lg:min-h-[680px] lg:px-12 lg:py-9">
        <Image src="/images/about-hero.jpeg" alt="Temple" fill priority sizes="100vw" className="z-0 object-cover object-[72%_center] sm:object-[68%_center] lg:object-center" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#21110f]/90 via-[#291512]/75 to-[#301b16]/35" aria-hidden="true" />
        <div className="relative z-20 mx-auto flex min-h-[530px] max-w-[1500px] flex-col sm:min-h-[560px] lg:min-h-[610px]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="inline-flex min-h-10 items-center transition-colors hover:text-temple-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-gold">Home</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page" className="font-semibold text-white">Explore Our Journey</span>
          </nav>
          <div className="max-w-3xl pb-10 pt-5 sm:pt-8 lg:pt-10">
            <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-gold">{journeyContent.hero.eyebrow}</p>
            <h1 className="mt-3 max-w-[12ch] font-display text-[clamp(2.7rem,8vw,5.8rem)] font-medium leading-[1.01] tracking-[-.03em] text-white">{journeyContent.hero.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-8">{journeyContent.hero.description}</p>
            <a href="#sacred-beginning" className="mt-5 inline-flex min-h-11 items-center gap-3 border-b border-temple-saffron pb-1 text-sm font-semibold text-white transition-colors hover:text-temple-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-gold">{journeyContent.hero.action}<ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="sacred-beginning" className="scroll-mt-24 bg-temple-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] border-y border-temple-gold/70 px-5 py-10 text-center sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.26em] text-temple-rust">{journeyContent.beginning.eyebrow}</p><h2 className="mt-3 font-display text-4xl font-medium leading-tight text-temple-burgundy sm:text-5xl">{journeyContent.beginning.title}</h2><span className="mx-auto mt-6 block h-px w-16 bg-temple-saffron" aria-hidden="true" /></div>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-temple-muted sm:text-lg sm:leading-9">{journeyContent.beginning.description}</p>
        </div>
      </section>

      <section className="bg-temple-sand py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[.26em] text-temple-rust">{journeyContent.setting.eyebrow}</p><h2 className="mt-3 font-display text-4xl font-medium text-temple-burgundy sm:text-5xl">{journeyContent.setting.title}</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-temple-muted">{journeyContent.setting.introduction}</p></div>
          <div className="mt-10 grid grid-cols-1 border-y border-temple-ink/15 md:grid-cols-3 lg:mt-14">
            {journeyContent.setting.highlights.map((highlight, index) => {
              const Icon = highlightIcons[highlight.icon];
              return <article key={highlight.title} className="border-b border-temple-ink/15 px-1 py-7 last:border-0 md:border-b-0 md:border-r md:px-7 md:py-9 md:last:border-r-0 lg:px-10"><span className="font-display text-sm text-temple-saffron">0{index + 1}</span><Icon size={28} strokeWidth={1.6} className="mt-5 text-temple-rust" aria-hidden="true" /><h3 className="mt-4 font-display text-2xl font-semibold text-temple-burgundy sm:text-3xl">{highlight.title}</h3><p className="mt-3 leading-7 text-temple-muted">{highlight.description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-temple-burgundy py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 opacity-15 lg:block"><Image src="/images/Bholenath.jpeg" alt="" fill sizes="50vw" className="object-cover" /></div>
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <span className="mx-auto flex h-14 w-14 items-center justify-center border border-temple-gold/60 text-temple-gold"><HeartHandshake size={26} strokeWidth={1.5} aria-hidden="true" /></span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[.26em] text-temple-gold">{journeyContent.vision.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">{journeyContent.vision.title}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">{journeyContent.vision.description}</p>
        </div>
      </section>

      <section className="border-y border-temple-gold/30 bg-[#321517] px-5 py-14 text-center text-white sm:px-8 sm:py-16">
          <div className="mx-auto max-w-5xl text-center"><h2 className="font-display text-3xl font-medium leading-snug sm:text-4xl">{journeyContent.quote.title}</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{journeyContent.quote.description}</p></div>
      </section>

      <section className="bg-temple-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[.26em] text-temple-rust">{journeyContent.explore.eyebrow}</p><h2 className="mt-3 font-display text-4xl font-medium text-temple-burgundy sm:text-5xl">{journeyContent.explore.title}</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-temple-muted">{journeyContent.explore.description}</p></div>
          <div className="mx-auto mt-9 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            <Link href="/about" className="group flex min-h-28 items-center gap-5 border-y border-temple-ink/15 py-5 transition-colors hover:border-temple-saffron focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-saffron"><Landmark size={26} className="shrink-0 text-temple-rust" aria-hidden="true" /><span className="flex-1"><span className="block font-display text-xl font-semibold text-temple-burgundy">{journeyContent.explore.aboutTitle}</span><span className="mt-1 block text-sm text-temple-muted">{journeyContent.explore.aboutDescription}</span></span><ArrowRight size={18} className="text-temple-rust transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>
            <Link href="/gallery" className="group flex min-h-28 items-center gap-5 border-y border-temple-ink/15 py-5 transition-colors hover:border-temple-saffron focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-saffron"><Images size={26} className="shrink-0 text-temple-rust" aria-hidden="true" /><span className="flex-1"><span className="block font-display text-xl font-semibold text-temple-burgundy">{journeyContent.explore.galleryTitle}</span><span className="mt-1 block text-sm text-temple-muted">{journeyContent.explore.galleryDescription}</span></span><ArrowRight size={18} className="text-temple-rust transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>
          </div>
          <div className="mt-9 flex justify-center"><Link href="/" className="btn-primary"><ArrowLeft size={18} aria-hidden="true" />{journeyContent.explore.back}</Link></div>
        </div>
      </section>
    </main>
  );
}
