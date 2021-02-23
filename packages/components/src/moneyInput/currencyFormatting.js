import { formatAmount } from '@transferwise/formatting';

import { DEFAULT_LOCALE } from '../common/locale';

export { formatAmount };

// TODO: do not duplicate this between formatting and components
const currencyDecimals = {
  BIF: 0,
  BYR: 0,
  CLP: 0,
  DJF: 0,
  GNF: 0,
  JPY: 0,
  KMF: 0,
  KRW: 0,
  MGA: 0,
  PYG: 0,
  RWF: 0,
  VND: 0,
  VUV: 0,
  XAF: 0,
  XOF: 0,
  XPF: 0,
  // technically HUF does have decimals, but due to the exchange rate banks
  // do not accept decimal amounts
  HUF: 0,

  BHD: 3,
  JOD: 3,
  KWD: 3,
  OMR: 3,
  TND: 3,
};

const DEFAULT_CURRENCY_DECIMALS = 2;

function isNumberLocaleSupported() {
  const number = 1234;
  const numberString = number.toLocaleString && number.toLocaleString(DEFAULT_LOCALE);
  return numberString === '1,234';
}

function getValidLocale(locale) {
  try {
    const noUnderscoreLocale = locale.replace(/_/, '-');

    Intl.NumberFormat(noUnderscoreLocale);
    return noUnderscoreLocale;
  } catch (e) {
    return 'en-GB';
  }
}

function getCurrencyDecimals(currency = '') {
  const upperCaseCurrency = currency.toUpperCase();
  if (Object.prototype.hasOwnProperty.call(currencyDecimals, upperCaseCurrency)) {
    return currencyDecimals[upperCaseCurrency];
  }
  return DEFAULT_CURRENCY_DECIMALS;
}

function getDecimalSeparator(locale) {
  return isNumberLocaleSupported() ? (1.1).toLocaleString(locale)[1] : '.';
}

export function parseAmount(number, currency, locale) {
  const validLocale = getValidLocale(locale);

  const precision = getCurrencyDecimals(currency);
  const groupSeparator = isNumberLocaleSupported() ? (1000).toLocaleString(validLocale)[1] : ',';
  const decimalSeparator = getDecimalSeparator(validLocale);
  const trimmedNumber = number.replace(/\s/g, '');
  const numberWithoutGroupSeparator = trimmedNumber.replace(
    new RegExp(`\\${groupSeparator}`, 'g'),
    '',
  );
  const numberWithStandardDecimalSeparator = numberWithoutGroupSeparator.replace(
    new RegExp(`\\${decimalSeparator}`, 'g'),
    '.',
  );
  const parsedAmount = parseFloat(
    parseFloat(numberWithStandardDecimalSeparator).toFixed(precision),
  );
  return Math.abs(parsedAmount);
}
