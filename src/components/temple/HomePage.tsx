import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flower2, HandHelping, HeartHandshake, Landmark } from "lucide-react";
import ContactSection from "@/components/temple/ContactSection";
import DonationSection from "@/components/temple/DonationSection";
import ScrollCue from "@/components/temple/ScrollCue";
import { homeContent } from "@/data/temple-content";

const themeIcons = [Landmark, Flower2, HeartHandshake, HandHelping];

export default function HomePage() {
  return (
    <main id="main-content">
      <section id="home" className="bg-temple-ivory px-3 pb-7 pt-3 sm:px-6 sm:pb-10 sm:pt-6 lg:px-10">
        <div className="mx-auto grid w-full min-w-0 max-w-[1680px] grid-cols-1 overflow-hidden border border-temple-burgundy/15 bg-temple-burgundy lg:grid-cols-[1.12fr_.88fr]">
          <div className="relative order-1 min-w-0 min-h-[clamp(250px,68vw,470px)] bg-temple-sand sm:min-h-[480px] lg:min-h-[min(760px,calc(100svh-124px))]">
            <Image src="/images/Temple.png" alt="Shri Khatu Shyam Ji Temple" fill loading="eager" sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-[43%_center]" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent sm:h-40" aria-hidden="true" />
            <ScrollCue href="#about" label={homeContent.hero.scroll} />
          </div>
          <div className="order-2 flex min-w-0 flex-col justify-center px-5 py-9 text-white sm:px-10 sm:py-12 lg:px-12 xl:px-16">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.28em] text-temple-gold before:h-px before:w-8 before:bg-temple-gold">{homeContent.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-[12ch] font-display text-[clamp(2.55rem,5.1vw,5.7rem)] font-medium leading-[.98] tracking-[-.035em] text-white">{homeContent.hero.title}</h1>
            <span className="my-5 block h-px w-16 bg-temple-gold sm:my-7" aria-hidden="true" />
            <p className="max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">{homeContent.hero.description}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
              <Link href="/home/journey" className="btn-primary w-full sm:w-auto">{homeContent.hero.action}<ArrowRight size={18} aria-hidden="true" /></Link>
              <Link href="/gallery" className="btn-secondary-on-dark w-full sm:w-auto">{homeContent.gallery.action}</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-temple-sand py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-rust">{homeContent.about.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-[1.08] text-temple-burgundy sm:text-5xl lg:text-6xl">{homeContent.about.title}</h2>
            <span className="mx-auto mt-6 block h-px w-20 bg-temple-saffron" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[580px] pb-6 pr-5 sm:pb-9 sm:pr-8 lg:pb-10 lg:pr-9">
            <Image src="/images/bhumi-pujan.jpeg" alt="" width={720} height={911} sizes="(min-width: 1024px) 40vw, 90vw" className="block h-auto w-full rounded-sm object-contain shadow-[0_25px_60px_rgba(48,35,31,.2)]" />
            <div className="absolute bottom-0 right-0 w-[28%] rounded-lg border-[6px] border-white bg-white p-1 shadow-[0_16px_38px_rgba(48,35,31,.24)] sm:w-[30%] sm:border-[8px] sm:p-1.5 lg:w-[32%]">
              <Image src="/images/left-side.jpeg" alt="" width={558} height={993} sizes="(min-width: 1024px) 20vw, 34vw" className="block h-auto w-full rounded-sm object-contain" />
            </div>
          </div>
          <div>
            <p className="mt-6 text-base leading-8 text-temple-ink sm:text-lg sm:leading-9">{homeContent.about.hindi}</p>
            <p className="mt-4 text-base leading-8 text-temple-muted sm:text-lg sm:leading-9">{homeContent.about.english}</p>
            <div className="mt-8 grid grid-cols-2 gap-x-5 sm:grid-cols-4 sm:gap-x-7">
              {homeContent.about.themes.map((theme, index) => {
                const Icon = themeIcons[index]!;
                return <div key={theme} className="min-h-28 border-t border-temple-burgundy/20 py-4 sm:py-5"><Icon size={28} className="text-temple-saffron" strokeWidth={1.7} aria-hidden="true" /><h3 className="mt-3 text-xs font-semibold leading-snug text-temple-burgundy sm:text-sm">{theme}</h3></div>;
              })}
            </div>
            <Link href="/about" className="btn-primary mt-6">{homeContent.about.action}<ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
        </div>
      </section>

      <section id="journey" className="scroll-mt-24 bg-temple-sand py-14 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-rust">{homeContent.celebrations.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-temple-burgundy sm:text-5xl lg:text-6xl">{homeContent.celebrations.title}</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-temple-muted sm:text-lg sm:leading-8">{homeContent.celebrations.description}</p>
          </div>
          <div className="divide-y divide-temple-burgundy/20 border-y border-temple-burgundy/20 lg:mx-auto lg:max-w-6xl">
            {homeContent.celebrations.events.map((event) => <article key={event.slug} className="group min-w-0 py-5 sm:py-7">
              <Link href={`/gallery/${event.slug}`} aria-label={event.title} className="grid min-w-0 grid-cols-[minmax(88px,30%)_1fr] items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-temple-saffron sm:grid-cols-[minmax(140px,28%)_1fr_auto] sm:gap-6 lg:grid-cols-[minmax(180px,27%)_1fr_auto] lg:gap-9">
                <div className="relative aspect-[4/3] overflow-hidden bg-temple-ivory">
                  <Image src={event.image} alt="" fill sizes="(min-width: 1024px) 24vw, 32vw" className={event.slug === "bhumi-pujan" ? "object-contain" : "object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transform-none"} />
                </div>
                <div className="min-w-0 py-1"><p className="text-[10px] font-semibold uppercase leading-5 tracking-[.13em] text-temple-rust sm:text-xs sm:tracking-[.18em]">{event.label}</p><h3 className="mt-1 break-words font-display text-xl font-semibold leading-tight text-temple-burgundy sm:mt-2 sm:text-3xl">{event.title}</h3><p className="mt-2 text-sm leading-6 text-temple-muted sm:mt-3 sm:text-base sm:leading-7">{event.description}</p></div>
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center border border-temple-burgundy/25 text-temple-burgundy transition-colors group-hover:border-temple-burgundy group-hover:bg-temple-burgundy group-hover:text-white sm:flex"><ArrowRight size={19} aria-hidden="true" /></span>
              </Link>
            </article>)}
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 bg-temple-burgundy py-16 text-white sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-gold">{homeContent.gallery.eyebrow}</p><h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl lg:text-6xl">{homeContent.gallery.title}</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">{homeContent.gallery.description}</p></div>
          <div className="mt-9 grid auto-rows-[clamp(125px,20vw,275px)] grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
            {homeContent.gallery.images.map((image, index) => <Link key={image + index} href="/gallery" aria-label={homeContent.gallery.action} className={`group relative overflow-hidden bg-temple-maroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-gold ${index === 0 ? "col-span-2 row-span-2" : index === 3 ? "col-span-2" : ""}`}><Image src={image} alt="" fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none" /><span className="absolute inset-0 bg-temple-burgundy/0 transition-colors group-hover:bg-temple-burgundy/20" aria-hidden="true" /></Link>)}
          </div>
          <div className="mt-8 flex justify-center"><Link href="/gallery" className="btn-primary">{homeContent.gallery.action}<ArrowRight size={18} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section id="temple" className="scroll-mt-24 bg-temple-sand py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-rust">{homeContent.resolve.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-temple-burgundy sm:text-5xl">{homeContent.resolve.title}</h2>
          </div>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div className="min-w-0">
            <figure className="mx-auto mt-7 w-full max-w-sm text-center">
              <div className="rounded-sm border-2 border-[#FF8C00] bg-temple-ivory p-2 shadow-[0_20px_50px_rgba(48,35,31,.18)]">
                <Image src={homeContent.resolve.portrait} alt={homeContent.resolve.name} width={975} height={1600} sizes="(min-width: 1024px) 28vw, 100vw" className="block h-auto w-full object-contain" />
              </div>
              <figcaption className="mt-5 text-center">
                <h3 className="font-display text-xl font-semibold text-temple-burgundy">{homeContent.resolve.honorific}</h3>
                <p className="mt-1 font-display text-xl text-temple-rust">{homeContent.resolve.name}</p>
                <p className="mt-1 text-sm text-temple-muted">{homeContent.resolve.role}</p>
              </figcaption>
            </figure>
          </div>
          <div className="border-l border-temple-saffron/70 pl-5 sm:pl-8 lg:pl-10">
            {homeContent.resolve.paragraphs.map((paragraph, index) => <p key={paragraph} className={`max-w-3xl text-base leading-8 text-temple-ink sm:text-lg sm:leading-9 ${index ? "mt-6" : ""}`}>{paragraph}</p>)}
          </div>
        </div>
        </div>
      </section>

      <ContactSection />
      <DonationSection />
    </main>
  );
}
