import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";

const criticalImages = [
  "/images/logo.png",
  "/images/Temple.jpeg",
  "/images/bhumi-puja.jpeg",
  "/images/left-side.jpeg",
];

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const loader = document.getElementById("app-loader");

    const MIN_LOADER_TIME = 2500;
    const startTime = Date.now();

    const preloadImages = Promise.all(
      criticalImages.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;

            if (img.complete) {
              resolve();
              return;
            }

            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      )
    );

    preloadImages.then(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);

      setTimeout(() => {
        // Pehle React render ho
        setReady(true);

        requestAnimationFrame(() => {
          // Scrollbar pehle restore karo
          document.body.style.overflow = "auto";

          requestAnimationFrame(() => {
            if (loader) {
              loader.style.pointerEvents = "none";
              loader.style.willChange = "opacity";
              loader.style.transition = "opacity .8s ease";
              loader.style.opacity = "0";

              setTimeout(() => {
                loader.remove();
              }, 800);
            }
          });
        });
      }, remaining);
    });

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!ready) return null;

  return <AppRoutes />;
}