import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from "./languages/en.json";
import vietnamese from './languages/vn.json';
const resources = {
  en: {
    translation: english,
  },
  vn: {
    translation: vietnamese,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('language') || 'vn',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
