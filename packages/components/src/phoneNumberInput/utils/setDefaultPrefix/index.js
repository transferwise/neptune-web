import localeService from '../../../common/localeService';
import { findCountryByCode } from '../findCountryByCode';

/**
 * Given a valid locale it returns the correspondent prefix if found or +44 otherwise.
 * @param {string} locale - a string that represent the locale ex:'es-ES'
 * @returns {string}
 */
export const setDefaultPrefix = locale => {
  const localeCountry = localeService.getCountryFromLocale(locale);
  const country = findCountryByCode(localeCountry);
  let prefix = '+44';
  if (country) {
    prefix = country.phone;
  }
  return prefix;
};
