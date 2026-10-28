import Link from "next/link";
import RouteReadyMarker from "@/components/temple/RouteReadyMarker";

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-[55svh] flex-col items-center justify-center bg-temple-ivory px-5 py-16 text-center">
      <RouteReadyMarker />
      <h1 className="font-display text-3xl font-semibold text-temple-burgundy">Page not found</h1>
      <Link href="/" className="btn-primary mt-6">Return home</Link>
    </main>
  );
}
