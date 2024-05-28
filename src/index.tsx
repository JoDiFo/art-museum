import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { GlobalStyles } from "./globalStyles";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "components/ErrorBoundary";
import { Provider } from "react-redux";
import { configureStore } from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const store = configureStore();

root.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  </>,
);
