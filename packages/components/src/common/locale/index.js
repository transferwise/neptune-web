const ENGLISH_LOCALE = 'en';
export const DEFAULT_LOCALE = 'en-GB';
export const US_LOCALE = 'en-US';
export const JAPANESE_LOCALE = 'ja';
export const GERMAN_LOCALE = 'de';
export const SPANISH_LOCALE = 'es';
export const FRENCH_LOCALE = 'fr';
export const HUNGARIAN_LOCALE = 'hu';
export const INDONESIAN_LOCALE = 'id';
export const ITALIAN_LOCALE = 'it';
export const POLISH_LOCALE = 'pl';
export const PORTUGUESE_LOCALE = 'pt';
export const ROMANIAN_LOCALE = 'ro';
export const RUSSIAN_LOCALE = 'ru';
export const TURKISH_LOCALE = 'tr';
export const HONG_KONG_LOCALE = 'zh-HK';

const COUNTRY_ISO2_CODE_LENGTH = 2;

export const LOCALES = [
  DEFAULT_LOCALE,
  US_LOCALE,
  GERMAN_LOCALE,
  SPANISH_LOCALE,
  FRENCH_LOCALE,
  HUNGARIAN_LOCALE,
  INDONESIAN_LOCALE,
  ITALIAN_LOCALE,
  JAPANESE_LOCALE,
  POLISH_LOCALE,
  PORTUGUESE_LOCALE,
  ROMANIAN_LOCALE,
  RUSSIAN_LOCALE,
  TURKISH_LOCALE,
  HONG_KONG_LOCALE,
];

export function mapLocale(locale) {
  if (!locale || locale.trim().length === 0) {
    return null;
  }
  if (ENGLISH_LOCALE === locale.toLowerCase()) {
    return DEFAULT_LOCALE;
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
