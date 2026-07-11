import BackToTop from "../components/common/BackToTop";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import ConstructionJourney from "../components/sections/ConstructionJourney";
import Contact from "../components/sections/Contact";
import GalleryPreview from "../components/sections/GalleryPreview";
import Hero from "../components/sections/Hero";
import Updates from "../components/sections/Updates";
import Donate from "../components/sections/Donate"

export default function Home() {
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