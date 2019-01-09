import { isValidPhoneNumber } from '../';

describe('isValidPhoneNumber', () => {
  it('should return true for valid string numbers', () => {
    expect(isValidPhoneNumber('+393892712')).toBe(true);
  });

  it('should return true for valid string numbers', () => {
    expect(isValidPhoneNumber('+39 3892 - 712')).toBe(true);
  });

  it('should return false for invalid numbers', () => {
    expect(isValidPhoneNumber('+441')).toBe(false);
    expect(isValidPhoneNumber(44)).toBe(false);
    expect(isValidPhoneNumber('44123')).toBe(false);
  });
});
