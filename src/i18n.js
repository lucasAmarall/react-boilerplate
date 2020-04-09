import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
import detector from "i18next-browser-languagedetector";

i18n
  .use(detector)
  .use(XHR)
  .use(initReactI18next)
  .init({
    order: ["navigator"],
    debug: true,
    lng: "en",
    whiteList: ["en"],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    react: {
      wait: true,
    },
  });
export default i18n;