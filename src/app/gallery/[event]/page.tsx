import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GalleryPage from "@/components/temple/GalleryPage";
import { galleryData } from "@/data/Gallerydata";
import { galleryContent } from "@/data/temple-content";
import RouteReadyMarker from "@/components/temple/RouteReadyMarker";

export function generateStaticParams() {
  return Object.keys(galleryData).map((event) => ({ event }));
}

export async function generateMetadata({ params }: { params: Promise<{ event: string }> }): Promise<Metadata> {
  const { event } = await params;
  const category = galleryContent.categories.find((item) => item.slug === event);
  if (!category) return { title: "Gallery | Shri Khatu Shyam Ji Temple" };
  return {
    title: `${category.label} | Shri Khatu Shyam Ji Temple`,
    description: `${galleryContent.eventDescriptionPrefix} ${category.title}${galleryContent.eventDescriptionSuffix}`,
  };
}

export default async function Page({ params }: { params: Promise<{ event: string }> }) {
  const { event } = await params;
  if (!galleryContent.categories.some((item) => item.slug === event)) notFound();
  return <><RouteReadyMarker /><GalleryPage event={event} /></>;
}
