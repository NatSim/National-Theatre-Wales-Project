import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEn from "../locales/en/translation.json";
import translationWelsh from "../locales/welsh/translation.json";

const resources = {
  en: { translation: translationEn },
  welsh: { translation: translationWelsh },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    options: { returnObjects: false },
    resources,
    initImmediate: false,
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
