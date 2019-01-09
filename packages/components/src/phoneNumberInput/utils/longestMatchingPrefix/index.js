export const longestMatchingPrefix = matchingCodes =>
  matchingCodes.reduce((a, b) => (a.phone.length > b.phone.length ? a : b));
