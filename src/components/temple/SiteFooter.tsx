import Image from "next/image";
import Link from "next/link";
import { ChevronUp, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { contactContent, footerContent } from "@/data/temple-content";

export default function SiteFooter() {
  return (
    <footer className="bg-[#291214] text-white">
      <div className="mx-auto max-w-[1500px] px-5 pb-12 pt-14 sm:px-8 sm:pb-14 sm:pt-20 lg:px-12">
        <div className="mb-10 flex items-center gap-4 border-b border-temple-gold/30 pb-8 sm:mb-14 sm:pb-10">
          <Image src="/images/logo.png" alt="Khatu Shyam Temple Logo" width={1024} height={1024} sizes="60px" className="h-12 w-12 object-contain sm:h-[60px] sm:w-[60px]" />
          <div>
            <p className="font-display text-2xl font-semibold text-temple-gold sm:text-3xl">{footerContent.title}</p>
            <p className="mt-1 text-xs uppercase tracking-[.2em] text-white/60">Temple Trust</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.05fr_.75fr_1.4fr_.75fr] lg:gap-12">
          <section aria-labelledby="footer-about">
            <h2 id="footer-about" className="sr-only">{footerContent.title}</h2>
            <p className="max-w-sm leading-7 text-white/75">{footerContent.summary}</p>
            <p className="mt-6 font-display text-xl text-temple-gold">जय श्री श्याम</p>
            <p className="mt-2 max-w-sm leading-7 text-white/65">{footerContent.blessing}</p>
          </section>

          <nav aria-label="Footer quick links">
            <h2 className="font-display text-2xl text-temple-gold">Quick Links</h2>
            <ul className="mt-5 space-y-2">
              {footerContent.quickLinks.map((item) => (
                <li key={item.title}><Link className="inline-flex min-h-9 items-center text-white/75 transition-colors hover:text-temple-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-gold" href={item.href}>{item.title}</Link></li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="font-display text-2xl text-temple-gold">Contact</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/75">
              <p className="flex items-start gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-temple-gold" aria-hidden="true" /><span>{contactContent.footerAddress}</span></p>
              <p className="flex items-start gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-temple-gold" aria-hidden="true" /><span className="flex flex-col">{contactContent.phones.map((phone) => <a key={phone} href={`tel:${phone.replaceAll(" ", "")}`} className="hover:text-temple-gold">{phone}</a>)}</span></p>
              <p className="flex items-start gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-temple-gold" aria-hidden="true" /><a className="break-all hover:text-temple-gold" href={`mailto:${contactContent.footerEmail}`}>{contactContent.footerEmail}</a></p>
              <a href={footerContent.facebook.href} target="_blank" rel="noopener noreferrer" className="flex min-h-9 items-center gap-3 hover:text-temple-gold"><FaFacebookF aria-hidden="true" className="text-temple-gold" />{footerContent.facebook.title}</a>
              <a href={footerContent.youtube.href} target="_blank" rel="noopener noreferrer" className="flex min-h-9 items-center gap-3 hover:text-temple-gold"><PiYoutubeLogoFill aria-hidden="true" className="text-temple-gold" />{footerContent.youtube.title}</a>
              <a href={footerContent.whatsapp.href} target="_blank" rel="noopener noreferrer" className="flex min-h-10 items-center gap-3 hover:text-temple-gold"><MessageCircle aria-hidden="true" className="h-4 w-4 text-temple-gold" />{footerContent.whatsapp.label}</a>
            </div>
          </section>

          <section aria-labelledby="footer-hours">
            <h2 id="footer-hours" className="font-display text-2xl text-temple-gold">Temple Timings</h2>
            <div className="mt-5 space-y-5 text-sm">
              {contactContent.timings.map((time) => (
                <p key={time.label} className="flex items-start gap-3"><Clock3 className="mt-1 h-4 w-4 shrink-0 text-temple-gold" aria-hidden="true" /><span><span className="block font-semibold text-white">{time.label}</span><span className="mt-1 block text-white/75">{time.value.replace(" - ", " – ")}</span></span></p>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="border-t border-temple-gold/25">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-3 px-5 py-6 text-center sm:px-8 md:flex-row md:text-left lg:px-12">
          <p className="text-xs leading-6 text-white/55">© {new Date().getFullYear()} {footerContent.copyright}</p>
          <p className="font-display text-lg text-temple-gold">{footerContent.devotionalLine}</p>
          <a href="#top" className="inline-flex min-h-10 items-center gap-2 text-sm text-white/75 transition-colors hover:text-temple-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-temple-gold lg:hidden"><ChevronUp aria-hidden="true" className="h-4 w-4" />Back to top</a>
        </div>
      </div>
    </footer>
  );
}
