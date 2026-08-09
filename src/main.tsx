import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import { LoaderProvider } from "./context/LoaderContext";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);