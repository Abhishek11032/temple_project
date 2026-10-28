import { Clock3, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { contactContent } from "@/data/temple-content";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-temple-ivory py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-rust">{contactContent.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-temple-burgundy sm:text-5xl lg:text-6xl">{contactContent.title}</h2>
          <span className="mx-auto mt-6 block h-px w-20 bg-temple-saffron" aria-hidden="true" />
        </header>

        <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-[.9fr_1.1fr] xl:gap-16">
        <div>
          <div className="grid grid-cols-1 border-y border-temple-ink/15 sm:grid-cols-2 xl:grid-cols-2">
            <div className="flex gap-4 border-b border-temple-ink/15 py-5 sm:col-span-2">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-temple-rust" aria-hidden="true" />
              <div><h3 className="font-display text-xl font-semibold text-temple-burgundy">{contactContent.addressLabel}</h3><p className="mt-2 max-w-md leading-7 text-temple-muted">{contactContent.contactAddress}</p></div>
            </div>
            <div className="flex gap-4 border-b border-temple-ink/15 py-5 sm:pr-5 xl:border-r xl:pr-5">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-temple-rust" aria-hidden="true" />
              <div><h3 className="font-display text-xl font-semibold text-temple-burgundy">{contactContent.phoneLabel}</h3><div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-temple-muted">{contactContent.phones.map((phone) => <a key={phone} href={`tel:${phone.replaceAll(" ", "")}`} className="underline decoration-temple-gold underline-offset-4 hover:text-temple-rust">{phone}</a>)}</div></div>
            </div>
            <div className="flex gap-4 border-b border-temple-ink/15 py-5 sm:pl-5 xl:border-r-0">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-temple-rust" aria-hidden="true" />
              <div><h3 className="font-display text-xl font-semibold text-temple-burgundy">{contactContent.emailLabel}</h3><a href={`mailto:${contactContent.contactEmail}`} className="mt-2 inline-block break-all text-temple-muted underline decoration-temple-gold underline-offset-4 hover:text-temple-rust">{contactContent.contactEmail}</a></div>
            </div>
            <div className="flex gap-4 py-5 sm:col-span-2">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-temple-rust" aria-hidden="true" />
              <div><h3 className="font-display text-xl font-semibold text-temple-burgundy">{contactContent.timingsLabel}</h3><div className="mt-2 space-y-1 text-temple-muted">{contactContent.timings.map((time) => <p key={time.label}>{time.label} : {time.value}</p>)}</div></div>
            </div>
          </div>

          <a href={contactContent.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7">
            {contactContent.directions}<Navigation size={18} aria-hidden="true" />
          </a>
          <p className="mt-5 max-w-md text-sm leading-6 text-temple-muted">{contactContent.locationNote}</p>
          <p className="mt-3 max-w-md border-l-2 border-temple-saffron pl-4 text-sm leading-6 text-temple-muted">{contactContent.confirmNote}</p>
        </div>

        <div className="relative min-h-[340px] overflow-hidden border border-temple-ink/10 bg-temple-sand shadow-[0_24px_60px_rgba(48,36,32,.12)] sm:min-h-[450px] xl:min-h-[590px]">
          <iframe title={contactContent.mapTitle} src={contactContent.mapUrl} className="absolute inset-0 h-full w-full border-0" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
        </div>
        </div>
      </div>
    </section>
  );
}
