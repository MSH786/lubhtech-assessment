import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import PluralRules from 'intl-pluralrules';

import en from '../translations/en';
import fr from '../translations/fr';

const LANGUAGES = {
  en,
  fr,
};

const LANG_CODES = Object.keys(LANGUAGES);
const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    AsyncStorage.getItem('user-language', (err, language) => {
      // if error fetching stored data or no language was stored
      // display errors when in DEV mode as console statements
      if (err || !language) {
        if (err) {
          console.log('Error fetching Languages from asyncstorage ', err);
        } else {
          console.log('No language is set, choosing English as fallback');
        }
        // const findBestAvailableLanguage =
        //   RNLocalize.findBestAvailableLanguage(LANG_CODES);

        // callback(findBestAvailableLanguage.languageTag || 'en');

        // Use the new getLocales method to get the user's preferred locales
        const locales = RNLocalize.getLocales();

        // Use the first locale as the fallback language
        const fallbackLanguage =
          locales.length > 0 ? locales[0].languageCode : 'en';

        callback(fallbackLanguage);
        return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: (language) => {
    AsyncStorage.setItem('user-language', language);
  },
};
i18n
  // detect language
  .use(LANGUAGE_DETECTOR)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // set options
  .init({
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    pluralRules: {
      pluralRuleFunction: PluralRules,
    },
  });
