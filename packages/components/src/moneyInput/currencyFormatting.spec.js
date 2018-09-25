import { formatAmount, parseAmount } from './currencyFormatting';

jest.mock('@transferwise/formatting', () => ({
  formatAmount: number => `formatted ${number}`,
}));

describe('Number formatting', () => {
  it('uses @transferwise/formatting for formatting numbers', () => {
    expect(formatAmount(100)).toBe('formatted 100');
  });

  it('parses localized numbers', () => {
    [['1234.56', 'en-GB'], ['1,23,4.56', 'en-US']].forEach(([number, locale]) => {
      expect(parseAmount(number, 'gbp', locale)).toBe(1234.56);
    });
  });

  it('parses negative numbers into positive ones', () => {
    expect(parseAmount('-123.45', 'gbp')).toBe(123.45);
  });
});
