import type { Metadata } from "next";
import JourneyPage from "@/components/temple/JourneyPage";
import RouteReadyMarker from "@/components/temple/RouteReadyMarker";

export const metadata: Metadata = {
  title: "Explore Our Journey | Shri Khatu Shyam Ji Temple",
  description: "Discover the divine location where spirituality, tradition and faith come together.",
};

export default function Page() {
  return <><RouteReadyMarker /><JourneyPage /></>;
}
