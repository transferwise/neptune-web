export const DEFAULT_LOCALE = 'en';
const COUNTRY_ISO2_CODE_LENGTH = 2;

export const LOCALES = [
  DEFAULT_LOCALE,
  'de',
  'es',
  'fr',
  'hu',
  'id',
  'it',
  'ja',
  'pl',
  'pt',
  'ro',
  'ru',
  'tr',
  'zh-HK',
];

export function mapLocale(locale) {
  if (LOCALES.includes(locale)) {
    return locale;
  }
  const iso2Code = locale.slice(0, COUNTRY_ISO2_CODE_LENGTH);
  if (LOCALES.includes(locale)) {
    return iso2Code;
  }
  return null;
}
