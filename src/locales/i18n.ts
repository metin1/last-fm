import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import * as de from './de/main.json'
import * as en from './en/main.json'
import languages from './languages'
export const langs = Object.keys(languages)

const showDebug = process.env.I18N_DEBUG === 'true'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
    },
    fallbackLng: ['en'],
    supportedLngs: langs,
    debug: showDebug,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
