/**
 * @param {string} iconName
 * @returns {{currency:string}}
 */
export function getCurrencyFlag(iconName) {
  if (iconName) {
    const index = availablePrefixedCurrencyFlags.indexOf(iconName);
    if (index >= 0) {
      return {
        currency: availableCurrencyFlags[index],
      };
    }
  }

  return null;
}

const availableCurrencyFlags = [
  'eur',
  'gbp',
  'inr',
  'usd',
  'aed',
  'ars',
  'aud',
  'bdt',
  'bgn',
  'brl',
  'bwp',
  'cad',
  'chf',
  'clp',
  'cny',
  'cop',
  'crc',
  'czk',
  'dkk',
  'egp',
  'gel',
  'ghs',
  'hkd',
  'hrk',
  'huf',
  'idr',
  'ils',
  'jpy',
  'kes',
  'krw',
  'lkr',
  'mad',
  'mxn',
  'myr',
  'mzn',
  'nad',
  'ngn',
  'nok',
  'npr',
  'nzd',
  'pen',
  'php',
  'pkr',
  'pln',
  'ron',
  'rub',
  'sek',
  'sgd',
  'thb',
  'try',
  'tzs',
  'uah',
  'ugx',
  'uyu',
  'vnd',
  'xof',
  'zar',
  'zmw',
];

const availablePrefixedCurrencyFlags = availableCurrencyFlags.map((code) => `flag-${code}`);
