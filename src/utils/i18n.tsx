import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import de from '../config/lang/de.json';
import en from '../config/lang/en.json';
import es from '../config/lang/es.json';
import fr from '../config/lang/fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    de: { translation: de },
    es: { translation: es }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
