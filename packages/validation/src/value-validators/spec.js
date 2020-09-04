import { isEmpty } from '.';

describe('Given a library for validating values', () => {
  describe('when checking for empty values', () => {
    it('should return true for empty strings', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty('a')).toBe(false);
    });
    it('should return true for empty array', () => {
      expect(isEmpty([])).toBe(true);
      expect(isEmpty(['a'])).toBe(false);
    });
    it('should return true for empty object', () => {
      expect(isEmpty({})).toBe(true);
      expect(isEmpty({ a: 'a' })).toBe(false);
    });
    it('should return false when the value is not a string, array, or object', () => {
      expect(isEmpty(1)).toBe(false);
      expect(isEmpty(null)).toBe(false);
      expect(isEmpty(undefined)).toBe(false);
    });
  });
});
