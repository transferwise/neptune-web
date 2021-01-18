import { mapLocale } from '../../../common/locale';
import { findCountryByCode } from '../findCountryByCode';

/**
 * Given a valid locale it returns the correspondent prefix if found or +44 otherwise.
 * @param {string} locale - a string that represent the locale ex:'es'
 * @returns {string}
 */
export const setDefaultPrefix = (locale, countryCode) => {
  const localeCountry = mapLocale(locale);
  const country = findCountryByCode(countryCode) || findCountryByCode(localeCountry);
  let prefix = '+44';
  if (country) {
    prefix = country.phone;
  }
  return prefix;
};
