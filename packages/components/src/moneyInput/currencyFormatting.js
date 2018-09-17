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
  const numberString = number.toLocaleString && number.toLocaleString('en-GB');
  return numberString === '1,234';
}

function getCurrencyDecimals(currency = '') {
  const upperCaseCurrency = currency.toUpperCase();
  if (Object.prototype.hasOwnProperty.call(currencyDecimals, upperCaseCurrency)) {
    return currencyDecimals[upperCaseCurrency];
  }
  return DEFAULT_CURRENCY_DECIMALS;
}

function countDecimalPlaces(number, locale) {
  const decimalSeparator = getDecimalSeparator(locale);
  if (number.toString().indexOf(decimalSeparator) === -1) {
    return 0;
  }
  return number.toString().split(decimalSeparator)[1].length || 0;
}

function getDecimalSeparator(locale) {
  return isNumberLocaleSupported() ? (1.1).toLocaleString(locale)[1] : '.';
}

export function formatCurrency(number, locale = 'en-GB', currency) {
  const previouslyUsedPrecision = countDecimalPlaces(number, locale);
  const currencyPrecision = getCurrencyDecimals(currency);
  const precision = previouslyUsedPrecision ? currencyPrecision : 0;
  if (!isNumberLocaleSupported()) {
    return number.toFixed(precision);
  }

  return number.toLocaleString(locale, {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });
}

export function parseCurrency(num, locale, currency) {
  const precision = getCurrencyDecimals(currency);
  const number = formatCurrency(num, locale, currency);
  const groupSeparator = isNumberLocaleSupported() ? (1000).toLocaleString(locale)[1] : ',';
  const decimalSeparator = getDecimalSeparator(locale);
  const trimmedNumber = number.replace(/\s/g, '');
  const numberWithoutGroupSeparator = trimmedNumber.replace(
    new RegExp(`\\${groupSeparator}`, 'g'),
    '',
  );
  const numberWithStandardDecimalSeparator = numberWithoutGroupSeparator.replace(
    new RegExp(`\\${decimalSeparator}`, 'g'),
    '.',
  );
  return parseFloat(parseFloat(numberWithStandardDecimalSeparator).toFixed(precision));
}
