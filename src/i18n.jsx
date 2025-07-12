import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationSW from './locales/sw/translation.json';
import translationRW from './locales/rw/translation.json';

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  sw: { translation: translationSW },
  rw: { translation: translationRW },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
export const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'sw', name: 'Kiswahili' },
  { code: 'rw', name: 'Kinyarwanda' },
];