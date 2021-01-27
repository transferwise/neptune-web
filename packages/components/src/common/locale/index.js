export const DEFAULT_LANG = 'en';
export const DEFAULT_LOCALE = 'en-GB';

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
  // This regex expect a string in a format xx-XX.
  regex: /^[a-z]{2}(-[A-Z]{2})?$/,
  isValid: (testLocale) => localeService.regex.test(testLocale),
  getCountryFromLocale: (locale) => localeService.isValid(locale) && locale.slice(3, 5),
};
