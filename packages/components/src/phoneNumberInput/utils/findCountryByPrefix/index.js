import countries from '../../data/countries';
import { longestMatchingPrefix } from '../longestMatchingPrefix';

export const findCountryByPrefix = number => {
  let matchingCodes = null;
  if (number && number.length > 1) {
    matchingCodes = countries.filter(country => number.indexOf(country.phone) === 0);
  }

  return matchingCodes && matchingCodes.length ? longestMatchingPrefix(matchingCodes) : null;
};
