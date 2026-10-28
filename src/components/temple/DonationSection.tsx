import Image from "next/image";
import { donationContent } from "@/data/temple-content";
import { Flower2, HandCoins, HeartHandshake, Landmark, UtensilsCrossed } from "lucide-react";

const purposeIcons = [Landmark, HandCoins, Flower2, UtensilsCrossed, HeartHandshake];

export default function DonationSection() {
  return (
    <section id="donate" className="scroll-mt-24 bg-temple-burgundy py-16 text-temple-ivory sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-temple-gold">{donationContent.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">{donationContent.title}</h2>
          <span className="mx-auto mt-6 block h-px w-20 bg-temple-gold" aria-hidden="true" />
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">{donationContent.introduction}</p>
          <p className="mx-auto mt-5 max-w-3xl font-display text-xl leading-8 text-temple-gold sm:text-2xl">{donationContent.hindiIntroduction}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-temple-gold/40 lg:mt-16 lg:grid-cols-[1.05fr_.95fr]">
          <section className="bg-temple-ivory p-6 text-temple-ink sm:p-9 lg:p-12" aria-labelledby="why-donate">
            <h3 id="why-donate" className="font-display text-3xl font-semibold text-temple-burgundy sm:text-4xl">{donationContent.whyDonate}</h3>
            <ul className="mt-7 divide-y divide-temple-ink/10 border-y border-temple-ink/10">
              {donationContent.purposes.map((purpose, index) => {
                const Icon = purposeIcons[index];
                return <li key={purpose} className="flex min-h-14 items-center gap-4 py-3 text-base sm:text-lg"><Icon className="h-5 w-5 shrink-0 text-temple-saffron" aria-hidden="true" />{purpose}</li>;
              })}
            </ul>
            <div className="mt-8 border-l-2 border-temple-saffron bg-temple-sand/70 p-5 sm:p-6">
              <h4 className="font-display text-xl font-semibold text-temple-burgundy">{donationContent.supportHeading}</h4>
              <p className="mt-3 leading-8">{donationContent.supportHindi}</p>
              <p className="mt-4 leading-7 text-temple-muted">{donationContent.supportEnglish}</p>
            </div>
          </section>

          <section className="bg-[#f2e9da] p-6 text-temple-ink sm:p-9 lg:p-12" aria-labelledby="donation-details">
            <h3 id="donation-details" className="font-display text-3xl font-semibold text-temple-burgundy sm:text-4xl">{donationContent.detailsTitle}</h3>
            <dl className="mt-7 space-y-4">
              {donationContent.details.map((detail) => <div key={detail.label} className="border-b border-temple-ink/10 pb-3"><dt className="text-sm font-medium text-temple-muted">{detail.label}</dt><dd className="mt-1 break-words font-semibold text-temple-burgundy">{detail.value}</dd></div>)}
            </dl>
            <div className="mt-8 flex justify-center">
              <div className="border border-temple-saffron/50 bg-white p-3 sm:p-4">
                <Image src={donationContent.qrImage} alt={donationContent.qrAlt} width={1064} height={1600} sizes="(max-width: 640px) 208px, 240px" className="h-52 w-52 object-contain sm:h-60 sm:w-60" />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-temple-muted">{donationContent.qrInstruction}</p>
          </section>
        </div>
      </div>
    </section>
  );
}
