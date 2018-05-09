import { formatCurrency, parseCurrency } from './currencyFormatting';

describe('Number formatting', () => {
  const fakeNumber = {
    toLocaleString(locale, options) {
      return `formatted for ${locale} and options ${JSON.stringify(options)}`;
    },

    toFixed(precision) {
      return `fixed for precision ${precision}`;
    },
  };

  it('uses toLocaleString to format if it is supported', () => {
    expect(formatCurrency(fakeNumber, 'et-EE', 'eur')).toBe(
      'formatted for et-EE and options {"minimumFractionDigits":2,"maximumFractionDigits":2}',
    );

    expect(formatCurrency(1234.5, 'en-GB', 'gbp')).toBe('1,234.50'); // sanity check
  });

  it('uses toFixed to format if localeString not supported or acts weirdly', () => {
    const toLocaleString = Number.prototype.toLocaleString;
    // eslint-disable-next-line no-extend-native
    Number.prototype.toLocaleString = null;

    expect(formatCurrency(fakeNumber, 'en-GB', 'jpy')).toBe('fixed for precision 0');

    // eslint-disable-next-line no-extend-native
    Number.prototype.toLocaleString = () => 'some weird value';

    expect(formatCurrency(1234.56, 'en-GB', 'eur')).toBe('1234.56'); // sanity check

    // eslint-disable-next-line no-extend-native
    Number.prototype.toLocaleString = toLocaleString;
  });

  it('parses localized numbers', () => {
    [['1234.56', 'en-GB'], ['1,23,4.56', 'en-US']].forEach(([number, locale]) => {
      expect(parseCurrency(number, locale, 'gbp')).toBe(1234.56);
    });
  });

  it('has a precision fallback for unknown currencies', () => {
    expect(formatCurrency(123.4, 'en-GB', 'not existent')).toBe('123.40');
  });
});
