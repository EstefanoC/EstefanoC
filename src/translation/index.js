// Dependencies
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Lang
import esp from "./esp.json";
import eng from "./eng.json";

i18n.use(initReactI18next).init({
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    es: {
      global: esp,
    },
    en: {
      global: eng,
    },
  },
  lng: navigator.language || navigator.userLanguage === "es" ? "es" : "en", // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

export default i18n;
