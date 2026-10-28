import type { Metadata } from "next";
import GalleryPage from "@/components/temple/GalleryPage";
import RouteReadyMarker from "@/components/temple/RouteReadyMarker";
import { galleryContent } from "@/data/temple-content";

export const metadata: Metadata = {
  title: "Gallery | Shri Khatu Shyam Ji Temple",
  description: galleryContent.allDescription,
};

export default function Page() {
  return <><RouteReadyMarker /><GalleryPage /></>;
}
