import countries from '../../data/countries';
import { longestMatchingPrefix } from '../';

export const findCountryByCode = code => {
  let matchingCodes;
  if (code && code.length === 2) {
    matchingCodes = countries.filter(country => code === country.iso2);
  }
  return matchingCodes && matchingCodes.length ? longestMatchingPrefix(matchingCodes) : null;
};
