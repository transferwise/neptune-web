/**
 * Collection of utilities to be used to validate and retrieve locale.
 * @type {{regex: RegExp, isValid: (function(*=): boolean), getCountryFromLocale: (function(*=): *)}}
 */
const localeService = {
  // This regex expect a string in a format xx-XX.
  regex: /^[a-z]{2}(-[A-Z]{2})?$/,
  isValid: testLocale => localeService.regex.test(testLocale),
  getCountryFromLocale: locale => localeService.isValid(locale) && locale.slice(3, 5),
};

export default localeService;
