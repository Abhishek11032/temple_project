import Image from "next/image";

type SpiritualLoaderProps = {
  mode?: "screen" | "inline";
  active?: boolean;
  failed?: boolean;
  onRetry?: () => void;
};

export default function SpiritualLoader({
  mode = "screen",
  active = true,
  failed = false,
  onRetry,
}: SpiritualLoaderProps) {
  if (mode === "inline") {
    return (
      <main
        id="main-content"
        aria-busy="true"
        className="flex min-h-[40svh] items-center justify-center bg-temple-ivory px-5 py-16"
      >
        <div role="status" aria-live="polite" className="flex items-center gap-4 border-y border-temple-gold/60 px-5 py-5 text-temple-burgundy sm:px-8">
          <span className="loader-inline-mark" aria-hidden="true">
            <Image src="/images/logo.png" alt="" width={56} height={56} sizes="56px" />
          </span>
          <span className="font-sans text-sm font-semibold tracking-wide">श्री खाटू श्याम जी मंदिर</span>
        </div>
      </main>
    );
  }

  return (
    <div
      className={`spiritual-loader ${active ? "spiritual-loader--active" : ""} ${failed ? "spiritual-loader--failed" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy={!failed}
      aria-hidden={!active}
      aria-label={failed ? "Loading failed" : "Loading Shri Khatu Shyam Ji Temple"}
      data-testid="spiritual-loader"
    >
      <div className="spiritual-loader__content">
        <div className="spiritual-loader__emblem" aria-hidden="true">
          <span className="spiritual-loader__aura" />
          <span className="spiritual-loader__ring" />
          <span className="spiritual-loader__logo">
            <Image src="/images/logo.png" alt="" width={80} height={80} sizes="80px" priority />
          </span>
          <svg className="spiritual-loader__diya" viewBox="0 0 48 28" fill="none">
            <path d="M8 16c2.8 6.1 8.1 9 16 9s13.2-2.9 16-9H8Z" />
            <path d="M17 15c3.1-1.5 4.8-4.1 5-8 .1-1.5.8-2.8 2-4 1.2 1.2 1.9 2.5 2 4 .2 3.9 1.9 6.5 5 8" />
            <path d="M5 16h38" />
          </svg>
        </div>

        <p className="spiritual-loader__eyebrow">श्री खाटू श्याम जी मंदिर</p>
        <p className="spiritual-loader__devotion">॥ हारे का सहारा, बाबा श्याम हमारा ॥</p>

        {failed ? (
          <div className="spiritual-loader__error">
            <p>Something went wrong</p>
            <button type="button" onClick={onRetry}>Try again</button>
          </div>
        ) : (
          <div className="spiritual-loader__track" aria-hidden="true">
            <span />
          </div>
        )}
      </div>
    </div>
  );
}
