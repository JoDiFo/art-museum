import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { GlobalStyles } from "./globalStyles";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "components/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
