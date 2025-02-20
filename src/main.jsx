// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";
import GlobalContextProvider from "./contexts/GlobalContextProvider";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "./components/ErrorBoundaryFallback";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <ErrorBoundary fallbackRender={ErrorBoundaryFallback}>
      <App />
    </ErrorBoundary>
  </GlobalContextProvider>
);
