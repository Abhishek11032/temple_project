import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Compass,
  Heart,
  HandHelping,
  Sparkles,
} from "lucide-react";
import { aboutContent, homeContent, journeyContent } from "@/data/temple-content";

const themeIcons = [Heart, Sparkles, HandHelping];

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-temple-ivory">
      <section className="bg-temple-sand px-4 pb-10 pt-5 sm:px-8 sm:pb-14 sm:pt-8 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-[1500px]">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-3 text-sm text-temple-muted">
            <Link href="/" className="inline-flex min-h-10 items-center transition-colors hover:text-temple-rust">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="font-semibold text-temple-burgundy">About Us</span>
          </nav>
          <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[.88fr_1.12fr] lg:gap-14 xl:gap-20">
            <div className="min-w-0 py-2 sm:py-5 lg:py-10">
              <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-rust">{aboutContent.hero.eyebrow}</p>
              <h1 className="mt-4 max-w-[13ch] text-[clamp(2.6rem,5vw,5.4rem)] font-semibold leading-[1.02] tracking-[-.035em] text-temple-burgundy">{aboutContent.hero.title}</h1>
              <span className="my-6 block h-px w-20 bg-temple-saffron sm:my-8" aria-hidden="true" />
              <p className="max-w-xl text-base leading-7 text-temple-ink sm:text-lg sm:leading-8">{aboutContent.hero.description}</p>
              <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
                <Link href="/home/journey" className="btn-primary">Explore Our Journey<ArrowRight size={18} aria-hidden="true" /></Link>
                <Link href="/gallery" className="btn-secondary">{homeContent.gallery.action}</Link>
              </div>
              <a href="#vision" aria-label="Scroll to Our Vision" className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-temple-saffron pb-1 text-sm font-semibold text-temple-burgundy transition-colors hover:text-temple-rust focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-saffron">
                {aboutContent.vision.eyebrow}<ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="relative min-w-0 border-2 border-[#FF8C00] bg-temple-burgundy p-2 shadow-[0_24px_60px_rgba(48,35,31,.16)] sm:p-3">
              <Image src="/images/temple.jpeg" alt="Temple entrance" width={1600} height={720} priority sizes="(min-width: 1024px) 58vw, 100vw" className="block h-auto w-full object-contain" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 -z-0 h-1/3 w-1/3 border-b border-r border-temple-rust/65 sm:-bottom-4 sm:-right-4" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section id="temple-introduction" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-rust">{aboutContent.significance.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-temple-burgundy sm:text-5xl lg:text-6xl">{aboutContent.significance.title}</h2>
            <span className="mx-auto mt-6 block h-px w-20 bg-temple-saffron" aria-hidden="true" />
          </header>
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div className="relative min-w-0 bg-temple-sand p-3 sm:p-4">
              <Image src={aboutContent.significance.image} alt="" width={1536} height={1024} sizes="(min-width: 1024px) 50vw, 100vw" className="block h-auto w-full object-contain" />
              <span className="pointer-events-none absolute -bottom-3 -left-3 -z-0 h-1/2 w-1/2 border-b border-l border-temple-saffron/70 sm:-bottom-5 sm:-left-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="max-w-2xl text-base leading-8 text-temple-muted sm:text-lg sm:leading-9">{aboutContent.significance.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="scroll-mt-24 bg-temple-burgundy text-white">
        <div className="grid min-w-0 lg:grid-cols-2">
          <div className="flex min-w-0 flex-col justify-center px-5 py-14 sm:px-9 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
            <header className="mx-auto mb-8 max-w-2xl text-center lg:mb-10">
              <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-gold">{aboutContent.vision.eyebrow}</p>
              <h2 className="mt-3 text-4xl font-semibold leading-[1.08] sm:text-5xl">{aboutContent.vision.title}</h2>
              <span className="mx-auto mt-6 block h-px w-16 bg-temple-gold" aria-hidden="true" />
            </header>
            <p className="mx-auto max-w-2xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">{aboutContent.vision.description}</p>
            <div className="mt-8 grid grid-cols-1 border-y border-white/20 sm:grid-cols-3">
              {aboutContent.vision.themes.map((theme, index) => {
                const Icon = themeIcons[index]!;
                return <article key={theme.title} className="border-b border-white/20 py-5 last:border-0 sm:border-b-0 sm:border-r sm:px-4 sm:py-6 sm:first:pl-0 sm:last:border-r-0 lg:px-5">
                  <Icon size={25} strokeWidth={1.6} className="text-temple-gold" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-semibold text-white">{theme.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{theme.description}</p>
                </article>;
              })}
            </div>
          </div>
          <div className="relative min-h-[300px] bg-temple-maroon sm:min-h-[430px] lg:min-h-[620px]">
            <Image src="/images/vision.jpeg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-4 sm:p-8" />
            <span className="pointer-events-none absolute inset-4 border border-temple-gold/40 sm:inset-8" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section id="our-mission" className="scroll-mt-24 bg-temple-ivory px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] min-w-0 gap-5 lg:grid-cols-2 lg:gap-8">
          <article className="relative isolate flex min-h-[540px] min-w-0 flex-col justify-center overflow-hidden rounded-[1.5rem] bg-temple-burgundy px-6 py-10 text-white shadow-[0_20px_50px_rgba(48,35,31,.16)] sm:min-h-[590px] sm:px-10 sm:py-12 lg:min-h-[650px] lg:px-12">
            <Image src={aboutContent.mission.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="z-0 object-cover object-[64%_center]" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#21110f]/90 via-[#291512]/70 to-[#301b16]/45" aria-hidden="true" />
            <div className="relative z-20">
              <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{aboutContent.significance.eyebrow}</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">{aboutContent.significance.description}</p>
              <ul className="mt-5 max-w-xl space-y-3">
                {aboutContent.significance.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-white sm:text-base sm:leading-7"><BadgeCheck size={19} className="mt-1 shrink-0 text-temple-gold" aria-hidden="true" /><span>{point}</span></li>)}
              </ul>
              <a href="#mission-activities" className="btn-primary mt-7 w-fit">Read More<ArrowRight size={18} aria-hidden="true" /></a>
            </div>
          </article>

          <article id="mission-activities" className="relative isolate min-w-0 overflow-hidden rounded-[1.5rem] border border-temple-gold/35 bg-[#fffdfa] px-6 py-9 shadow-[0_20px_50px_rgba(48,35,31,.10)] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <Image src={aboutContent.mission.illustration} alt="" width={1536} height={1024} sizes="180px" className="pointer-events-none absolute bottom-2 right-3 z-0 w-28 opacity-[.10] mix-blend-multiply sm:bottom-4 sm:right-5 sm:w-40 lg:w-48" />
            <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-rust">OUR MISSION</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-temple-burgundy sm:text-5xl lg:text-6xl">{aboutContent.mission.title}</h2>
            <span className="mt-5 block h-px w-16 bg-temple-saffron" aria-hidden="true" />
            <ul className="mt-6 divide-y divide-temple-ink/10">
              {aboutContent.mission.activities.map((activity) => <li key={activity} className="flex min-h-14 items-center gap-4 py-3 text-base text-temple-ink sm:min-h-[62px] sm:text-lg">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-temple-saffron text-temple-rust"><CheckCircle2 size={17} aria-hidden="true" /></span>
                <span>{activity}</span>
              </li>)}
            </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="journey" className="relative isolate scroll-mt-24 flex min-h-[520px] items-start overflow-hidden bg-temple-burgundy px-5 py-14 text-white sm:min-h-[560px] sm:px-8 sm:py-16 lg:min-h-[620px] lg:px-12 lg:py-20">
        <Image src="/images/about-hero.jpeg" alt="" fill sizes="100vw" className="-z-20 object-cover object-[64%_center] md:object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#21110f]/90 via-[#291512]/75 to-[#301b16]/25" aria-hidden="true" />
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-gold">{journeyContent.beginning.title}</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{journeyContent.hero.eyebrow}</h2>
            <span className="my-6 block h-px w-20 bg-temple-saffron sm:my-8" aria-hidden="true" />
            <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">{journeyContent.beginning.description}</p>
            <Link href="/home/journey" className="btn-primary mt-7">Explore Our Journey<Compass size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-temple-sand px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto flex max-w-[1200px] justify-center border-y border-temple-burgundy/20 py-6 sm:py-7">
          <Link href="/" className="btn-secondary">{journeyContent.explore.back}</Link>
        </div>
      </section>
    </main>
  );
}
