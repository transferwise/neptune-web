import { findCountryByPrefix, setDefaultPrefix, isValidPhoneNumber } from '../';

/**
 * Given a sting in a valid format ex:'+447573135343' it returns an object of shape
 * {prefix=+44 ,suffix=7573135343}
 * @param {string} number - a string that defines a phone number.
 * @param {string} locale - a sting that defines the current locale ex:es-ES.
 * @returns {{prefix: (string|*), suffix: string, format: string}}
 */
export const explodeNumberModel = (number, locale) => {
  let prefix = '';
  let suffix = '';
  let format = '';
  const country = findCountryByPrefix(number);

  if (isValidPhoneNumber(number)) {
    if (country) {
      prefix = country.phone;
      suffix = number.substring(country.phone.length);
      format = country.phoneFormat || '';
    } else {
      prefix = '';
      suffix = number.substring(1);
      format = '';
    }
  } else {
    prefix = setDefaultPrefix(locale);
  }
  return { prefix, suffix, format };
};
