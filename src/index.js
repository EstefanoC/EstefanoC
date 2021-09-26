import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "./normalize.css";
import App from "./component/app";
import i18n from "./translation";
import { I18nextProvider } from "react-i18next";


ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Router>
      <App />
    </Router>
  </I18nextProvider>,
  document.getElementById("root")
);
