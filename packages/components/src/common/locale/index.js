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
  if (!locale || locale.trim().length === 0) {
    return null;
  }
  const adjustedLocale = locale.replace('_', '-').toLowerCase();
  const mappedLocale = LOCALES.find((value) => value.toLowerCase() === adjustedLocale);
  if (mappedLocale) {
    return mappedLocale;
  }
  const iso2Code = adjustedLocale.slice(0, COUNTRY_ISO2_CODE_LENGTH);
  if (LOCALES.includes(iso2Code)) {
    return iso2Code;
  }
  return null;
}
