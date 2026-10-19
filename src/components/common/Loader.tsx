import Image from "next/image";

interface LoaderProps {
  loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
  return (
    <div
      className={`route-loader${loading ? " is-visible" : ""}`}
      role={loading ? "status" : undefined}
      aria-live={loading ? "polite" : undefined}
      aria-label={loading ? "Loading page" : undefined}
      aria-hidden={!loading}
    >
      <div className="loader-content" aria-hidden={!loading}>
        <div className="loader-emblem">
          <Image
            src="/images/logo.png"
            width={1024}
            height={1024}
            sizes="(max-width: 560px) 120px, 168px"
            loading="eager"
            className="loader-logo"
            alt="Temple Logo"
            data-loader-required="true"
          />
        </div>
        <p className="loader-title">Shri Khatu Shyam Ji</p>
        <p className="loader-subtitle">🙏 जय श्री श्याम 🙏</p>
        <div className="loader-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
