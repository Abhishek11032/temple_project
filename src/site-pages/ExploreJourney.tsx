"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  HeartHandshake,
  Images,
  Landmark,
  MapPin,
  Mountain,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const highlights = [
  {
    icon: MapPin,
    title: "Near Varanasi",
    description: (
      <>
        Situated approximately 50 km from Varanasi,
        making it easily accessible for pilgrims
        visiting the spiritual capital of India.
      </>
    ),
  },
  {
    icon: Landmark,
    title: "Ancient Shiva Temple",
    description: (
      <>
        The temple is being established near a revered
        Lord Shiva Temple that is traditionally believed
        to have a history spanning nearly one thousand years.
      </>
    ),
  },
  {
    icon: Mountain,
    title: "Divine Environment",
    description: (
      <>
        Surrounded by nature, spirituality and devotion,
        this sacred place offers a peaceful atmosphere
        for every devotee.
      </>
    ),
  },
];

export default function ExploreJourney() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>

      <section className="relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden sm:min-h-[480px]">
        <Image
          src="/images/Temple.png"
          alt="Temple"
          width={1537}
          height={1023}
          sizes="100vw"
          preload
          data-loader-required="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#2B120D]/70" />

        <div className="relative mx-auto max-w-4xl px-5 pt-20 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300 sm:text-sm"
          >
            A place of faith and devotion
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Explore Our Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-100 sm:text-lg sm:leading-8"
          >
            Discover the divine location where spirituality,
            tradition and faith come together.
          </motion.p>
          <a
            href="#sacred-beginning"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-amber-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
          >
            Begin exploring <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <nav
        aria-label="Breadcrumb"
        className="border-b border-[#4A1F1F]/10 bg-white/70"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 text-sm text-gray-600">
          <Link href="/" className="transition-colors hover:text-amber-700">
            Home
          </Link>
          <ChevronRight size={15} aria-hidden="true" />
          <span aria-current="page" className="font-semibold text-[#5A2417]">
            Explore Our Journey
          </span>
        </div>
      </nav>

      <section
        id="sacred-beginning"
        className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#7A2E1D]/10 bg-white px-6 py-10 shadow-[0_18px_60px_rgba(74,31,31,0.07)] sm:px-10 sm:py-14 lg:px-16">
          <div className="mx-auto mb-7 h-1 w-16 rounded-full bg-amber-500" />
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
            The story and setting
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-[#5A2417] sm:text-4xl"
          >
            A Sacred Beginning
          </motion.h2>
          <p className="mx-auto mt-7 max-w-4xl text-center text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
            Shri Khatu Shyam Ji Temple is being developed in a spiritually
            blessed region located nearly <strong>50 kilometers from Varanasi</strong>.

            This holy place is already known for an ancient Lord Shiva Temple,
            believed by devotees to have existed for nearly a thousand years.

            The upcoming Khatu Shyam Ji Temple is envisioned to become another
            sacred destination where devotees can experience peace,
            devotion and the blessings of both Lord Shiva and Shri Khatu Shyam Ji.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="journey-highlights"
        className="relative overflow-hidden bg-[#FFF8F2] px-6 py-16 sm:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-amber-600/10" />
        <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-amber-600/10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
              Discover the setting
            </p>
            <h2
              id="journey-highlights"
              className="mt-3 text-3xl font-bold text-[#5A2417] sm:text-4xl"
            >
              A Place Rooted in Faith
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
              Explore the place, heritage and atmosphere described in this journey.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6 lg:mt-14">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group h-full rounded-3xl border border-[#7A2E1D]/10 bg-white p-7 shadow-[0_10px_35px_rgba(74,31,31,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(74,31,31,0.12)] sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2E1D] text-amber-200 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#4A1F1F] sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#5A2417] px-6 py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/50 text-amber-300">
            <HeartHandshake size={28} strokeWidth={1.6} aria-hidden="true" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
            A vision carried forward
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Faith, Culture and Devotion
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-100 sm:text-lg">
            Our vision is to establish Shri Khatu Shyam Temple as a sacred destination where spirituality, culture, and devotion unite.
            Through this temple, we aspire to preserve Sanatan traditions while inspiring future generations to remain connected with faith, values and service.
          </p>
        </div>
      </section>

      <section className="border-y border-amber-500/20 bg-[#3B1610] px-6 py-14 text-center sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold leading-snug text-white sm:text-4xl">
            "Where Lord Shiva Resides,
            <br />
            Devotion Blossoms."
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
            This sacred land is a symbol of faith,
            tradition and spiritual heritage.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="continue-exploring"
        className="border-t border-[#7A2E1D]/10 bg-[#FFF8F2] px-6 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-amber-500" />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
            Continue your visit
          </p>
          <h2
            id="continue-exploring"
            className="mt-3 text-3xl font-bold text-[#5A2417] sm:text-4xl"
          >
            Explore More
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Visit more pages to discover the temple trust and moments from its events.
          </p>
        </div>

        <div className="mx-auto mt-9 grid max-w-4xl items-stretch gap-4 sm:grid-cols-2 sm:gap-6">
          <Link
            href="/about"
            className="group flex min-h-28 items-center gap-5 rounded-2xl border border-[#7A2E1D]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-600/30 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 motion-reduce:transform-none motion-reduce:transition-none sm:p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF0DC] text-[#7A2E1D]">
              <Landmark size={24} aria-hidden="true" />
            </span>
            <span className="flex-1">
              <span className="block font-bold text-[#4A1F1F]">About the Temple</span>
              <span className="mt-1 block text-sm text-gray-600">Explore the temple trust and its vision.</span>
            </span>
            <ArrowRight size={18} className="text-amber-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <Link
            href="/gallery"
            className="group flex min-h-28 items-center gap-5 rounded-2xl border border-[#7A2E1D]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-600/30 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 motion-reduce:transform-none motion-reduce:transition-none sm:p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF0DC] text-[#7A2E1D]">
              <Images size={24} aria-hidden="true" />
            </span>
            <span className="flex-1">
              <span className="block font-bold text-[#4A1F1F]">Temple Gallery</span>
              <span className="mt-1 block text-sm text-gray-600">Browse photos from temple events.</span>
            </span>
            <ArrowRight size={18} className="text-amber-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            Back to Home
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
