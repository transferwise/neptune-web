import { isStringNumeric } from '.';

describe('isStringNumeric', () => {
  it('should return true when numeric sting is provided', () => {
    expect(isStringNumeric('+23456')).toBe(true);
    expect(isStringNumeric('23456')).toBe(true);
    expect(isStringNumeric(23456)).toBe(true);
  });

  it('should return false when string is provided', () => {
    expect(isStringNumeric('USA')).toBe(false);
    expect(isStringNumeric('+')).toBe(false);
    expect(isStringNumeric('')).toBe(false);
  });
});
