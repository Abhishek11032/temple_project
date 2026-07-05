import AboutHero from "../components/about/AboutHero";
import MissionSection from "../components/about/MissionSection";
import Vision from "../components/about/Vision";
import WhyKhatuShyam from "../components/about/WhyKhatuShyam";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
       <Vision />
        <WhyKhatuShyam />
        <MissionSection />
    </>
  );
}