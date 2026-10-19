"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type LoaderContextType = {
  loading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
};

const LoaderContext = createContext({} as LoaderContextType);

export const LoaderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const showLoader = useCallback(() => setLoading(true), []);
  const hideLoader = useCallback(() => setLoading(false), []);

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
