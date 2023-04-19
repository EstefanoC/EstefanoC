// Dependencies
import { render } from "react-dom";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

// Components
import i18n from "./translation";
import App from "./component/app";

// Styles
import "./normalize.css";

const Main = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>
);

render(<Main />, document.getElementById("root"));
