import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type LoaderContextType = {
  loading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
};

const LoaderContext = createContext({} as LoaderContextType);

const MIN_LOADER_TIME = 2500;

export const LoaderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);

  // Loader kab start hua tha
  const loaderStartTime = useRef<number | null>(null);

  // Hide karne ka timer
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Current loading state ko ref me bhi maintain karenge
  const loadingRef = useRef(false);

  const showLoader = useCallback(() => {
    // Agar loader already visible hai,
    // to uska timer dobara start nahi karna.
    if (loadingRef.current) {
      return;
    }

    // Agar koi previous hide timer pending hai,
    // to use clear kar do.
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }

    loaderStartTime.current = Date.now();

    loadingRef.current = true;
    setLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    // Safety check
    if (loaderStartTime.current === null) {
      loadingRef.current = false;
      setLoading(false);
      return;
    }

    const elapsed = Date.now() - loaderStartTime.current;

    const remaining = Math.max(
      0,
      MIN_LOADER_TIME - elapsed
    );

    // Agar pehle se hide timer laga hua hai,
    // to usko clear karo.
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }

    hideTimer.current = setTimeout(() => {
      loadingRef.current = false;

      setLoading(false);

      loaderStartTime.current = null;
      hideTimer.current = null;
    }, remaining);
  }, []);

  // Component unmount hone par timer clean karo
  useEffect(() => {
    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, []);

  return (
    <LoaderContext.Provider
      value={{
        loading,
        showLoader,
        hideLoader,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);