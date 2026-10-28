"use client";

import RouteReadyMarker from "@/components/temple/RouteReadyMarker";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="main-content" className="flex min-h-[40svh] items-center justify-center bg-temple-ivory px-5 py-16">
      <RouteReadyMarker />
      <div className="max-w-lg border-y border-temple-gold/60 py-8 text-center">
        <h1 className="font-display text-3xl font-semibold text-temple-burgundy">Something went wrong</h1>
        <button
          type="button"
          onClick={() => reset()}
          className="btn-primary mt-6"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
