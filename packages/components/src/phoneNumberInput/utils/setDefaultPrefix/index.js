import { mapLocale } from '../../../common/locale';
import { findCountryByCode } from '../findCountryByCode';

/**
 * Given a valid locale it returns the correspondent prefix if found or +44 otherwise.
 * @param {string} locale - a string that represent the locale ex:'es-ES'
 * @returns {string}
 */
export const setDefaultPrefix = (locale, countryCode) => {
  const mappedLocale = mapLocale(locale);
  const country = findCountryByCode(countryCode) || findCountryByCode(mappedLocale);
  return country?.phone ?? '+44';
};
