import { isValidPhoneNumber, setDefaultPrefix } from '../';

describe('setDefaultPrefix', () => {
  it('should return right prefix when valid locale is passed', () => {
    expect(setDefaultPrefix('it-IT')).toBe('+39');
  });

  it('should return default prefix when invalid locale is passed', () => {
    expect(setDefaultPrefix('en-Wrong')).toBe('+44');
  });
});

describe('isValidPhoneNumber', () => {
  it('should return true for valid string numbers', () => {
    expect(isValidPhoneNumber('+393892712')).toBe(true);
  });

  it('should return false for invalid numbers', () => {
    expect(isValidPhoneNumber('+441')).toBe(false);
    expect(isValidPhoneNumber(44)).toBe(false);
    expect(isValidPhoneNumber('44123')).toBe(false);
  });
});
