import type { Metadata } from "next";
import AboutPage from "@/components/temple/AboutPage";
import RouteReadyMarker from "@/components/temple/RouteReadyMarker";

export const metadata: Metadata = {
  title: "About | Shri Khatu Shyam Ji Temple",
  description: "A divine initiative dedicated to preserving Sanatan Dharma, spreading devotion, and creating a sacred place where every devotee experiences peace, faith, and the blessings of Shri Khatu Shyam Ji.",
};

export default function Page() {
  return <><RouteReadyMarker /><AboutPage /></>;
}
