import { Suspense } from "react";

import BackToTop from "../components/common/BackToTop";
import SectionScroller from "../components/common/SectionScroller";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import ConstructionJourney from "../components/sections/ConstructionJourney";
import Contact from "../components/sections/Contact";
import Donate from "../components/sections/Donate";
import GalleryPreview from "../components/sections/GalleryPreview";
import Hero from "../components/sections/Hero";
import Updates from "../components/sections/Updates";

export default function Home() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <SectionScroller />

      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <ConstructionJourney />
        <GalleryPreview />
        <Updates />
        <Contact />
        <Donate />
      </main>

      <BackToTop />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
