import { findCountryByPrefix } from '../findCountryByPrefix';

/**
 * Given a sting in a valid format ex:'+447573135343' it returns an object of shape
 * {prefix=+44 ,suffix=7573135343}
 * @param {string} number - a string that defines a phone number.
 * @returns {{prefix: (string|*), suffix: string, format: string}}
 */
export const explodeNumberModel = (number) => {
  let prefix = '';
  let suffix = '';
  let format = '';
  const country = findCountryByPrefix(number);

  if (country) {
    prefix = country.phone;
    suffix = number.substring(country.phone.length);
    format = country.phoneFormat || '';
  } else {
    prefix = '';
    suffix = number.substring(1);
    format = '';
  }

  return { prefix, suffix, format };
};
