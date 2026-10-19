import Gallery from "../../../site-pages/Gallery";

export default async function Page({
  params,
}: {
  params: Promise<{ event: string }>;
}) {
  const { event } = await params;
  return <Gallery event={event} />;
}

