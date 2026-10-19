import Image from "next/image";

export default function InitialLoader({
  fading,
  onFadeComplete,
}: {
  fading: boolean;
  onFadeComplete: () => void;
}) {
  return (
    <div
      id="app-loader"
      className={fading ? "is-fading" : undefined}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      onTransitionEnd={(event) => {
        if (
          event.target === event.currentTarget &&
          event.propertyName === "opacity"
        ) {
          onFadeComplete();
        }
      }}
    >
      <div className="loader-content" aria-hidden={fading}>
        <div className="loader-emblem">
          <Image
            src="/images/logo.png"
            width={1024}
            height={1024}
            sizes="(max-width: 560px) 120px, 168px"
            className="loader-logo"
            alt="Temple Logo"
            loading="eager"
          />
        </div>
        <p className="loader-title">Shri Khatu Shyam Ji</p>
        <p className="loader-subtitle">जय श्री श्याम</p>
        <div className="loader-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
