import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import "./normalize.css";
import App from "./component/app";
import i18n from "./translation";
import { I18nextProvider } from "react-i18next";

function Main() {
  // Callback will be called when the div is first created.
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  );
}

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<Main />);
