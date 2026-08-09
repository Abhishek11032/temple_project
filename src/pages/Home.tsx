import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import BackToTop from "../components/common/BackToTop";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Footer from "../components/layout/Footer";
import About from "../components/sections/About";
import ConstructionJourney from "../components/sections/ConstructionJourney";
import Contact from "../components/sections/Contact";
import GalleryPreview from "../components/sections/GalleryPreview";
import Hero from "../components/sections/Hero";
import Updates from "../components/sections/Updates";
import Donate from "../components/sections/Donate";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const sectionId = searchParams.get("section");

    if (!sectionId) return;

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        const navbarHeight = 96;

        const sectionPosition =
          section.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight;

        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        });
      }
    }, 200);
  }, [searchParams]);

  return (
    <>
    <Navbar />
      <main>
        <Hero />
        <About />
        <ConstructionJourney />
        <GalleryPreview />
        <Updates />
        <Contact />
        <Donate />
        <BackToTop />
        <WhatsAppButton />
      </main>

      <Footer />
    </>
  );
}