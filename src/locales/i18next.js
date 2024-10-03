import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translateRu from "./ru/translate.json";
import translateEn from "./en/translate.json";

i18next.use(initReactI18next).init({
  resources: {
    ru: { translation: translateRu },
    en: { translation: translateEn },
  },

  lng: "ru",
});

export default i18next;
