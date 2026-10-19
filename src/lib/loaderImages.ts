const REQUIRED_IMAGE_SELECTOR = "img[data-loader-required]";

/** Watch only images explicitly marked as required for the current screen. */
export function watchRequiredImages(onSettled: () => void): () => void {
  const images = Array.from(
    document.querySelectorAll<HTMLImageElement>(REQUIRED_IMAGE_SELECTOR),
  );
  const cleanups: Array<() => void> = [];
  const settledImages = new Set<HTMLImageElement>();
  let cancelled = false;

  const settle = (image: HTMLImageElement) => {
    if (cancelled || settledImages.has(image)) return;

    settledImages.add(image);
    image.removeEventListener("load", handleLoad);
    image.removeEventListener("error", handleError);

    if (settledImages.size === images.length) onSettled();
  };

  function handleLoad(event: Event) {
    settle(event.currentTarget as HTMLImageElement);
  }

  function handleError(event: Event) {
    // A failed image is settled too, so one broken asset cannot trap the loader.
    settle(event.currentTarget as HTMLImageElement);
  }

  images.forEach((image) => {
    // `complete` covers cached successes and failures whose events happened
    // before this effect attached its listeners.
    if (image.complete) {
      settledImages.add(image);
      return;
    }

    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);
    cleanups.push(() => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    });
  });

  if (settledImages.size === images.length) onSettled();

  return () => {
    cancelled = true;
    cleanups.forEach((cleanup) => cleanup());
  };
}
