export const DEFAULT_LANG = 'en';
export const DEFAULT_LOCALE = 'en-GB';

const COUNTRY_ISO2_CODE_LENGTH = 2;

export const SUPPORTED_LANGUAGES = [
  DEFAULT_LANG,
  'ja',
  'de',
  'es',
  'fr',
  'hu',
  'id',
  'it',
  'pl',
  'pt',
  'ro',
  'ru',
  'tr',
  'zh',
];

export function adjustLocale(locale) {
  if (!locale || locale.trim().length === 0) {
    return null;
  }
  try {
    const { baseName } = new Intl.Locale(locale.replace('_', '-'));
    return baseName;
  } catch (e) {
    return null;
  }
}

export function mapLocaleToLanguage(locale) {
  const adjustedLocale = adjustLocale(locale);
  if (adjustedLocale === null) {
    return null;
  }
  try {
    const { language } = new Intl.Locale(adjustedLocale);
    if (SUPPORTED_LANGUAGES.includes(language)) {
      return language;
    }
    return null;
  } catch (e) {
    return null;
  }
}

export const localeService = {
  isValid: (locale) => {
    try {
      Intl.getCanonicalLocales(locale);
      return true;
    } catch {
      return false;
    }
  },
  getCountryFromLocale: (locale) => {
    if (localeService.isValid(locale)) {
      return locale.slice(0, COUNTRY_ISO2_CODE_LENGTH);
    }
    return null;
  },
};
