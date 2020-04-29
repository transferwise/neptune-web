import {
  isValidRequired,
  isValidMinLength,
  isValidMaxLength,
  isValidMin,
  isValidMax,
  isValidPattern,
  isValidMinItems,
  isValidMaxItems,
} from '.';

describe('Given a library for validating json schema rules', () => {
  describe('when establishing if a value passes required validation', () => {
    it('should return true if required and value defined', () => {
      expect(isValidRequired('something', true)).toBe(true);
    });
    it('should return false if required and value undefined', () => {
      expect(isValidRequired(undefined, true)).toBe(false);
    });
    it('should return true if not required', () => {
      expect(isValidRequired(undefined, false)).toBe(true);
      expect(isValidRequired('something', false)).toBe(true);
    });
  });

  describe('when establishing if a value passes minLength validation', () => {
    it('should return true if minLength exists and value matches or exceeds it', () => {
      expect(isValidMinLength('a', 1)).toBe(true);
      expect(isValidMinLength('ab', 1)).toBe(true);
    });
    it('should return false if minLength exists and value undefined', () => {
      expect(isValidMinLength(undefined, 1)).toBe(false);
    });
    it('should return false if minLength exists and value too short', () => {
      expect(isValidMinLength('', 1)).toBe(false);
    });
    it('should return true if minLength not defined', () => {
      expect(isValidMinLength('a', undefined)).toBe(true);
    });
  });

  describe('when establishing if a value passes maxLength validation', () => {
    it('should return true if maxLength exists and value matches or exceeds it', () => {
      expect(isValidMaxLength('', 2)).toBe(true);
      expect(isValidMaxLength('a', 2)).toBe(true);
      expect(isValidMaxLength('ab', 2)).toBe(true);
    });
    it('should return false if maxLength exists and value undefined', () => {
      expect(isValidMaxLength(undefined, 2)).toBe(false);
    });
    it('should return false if maxLength exists and value too long', () => {
      expect(isValidMaxLength('abc', 2)).toBe(false);
    });
    it('should return true if maxLength not defined', () => {
      expect(isValidMinLength('a', undefined)).toBe(true);
    });
  });

  describe('when establishing if a value passes pattern validation', () => {
    it('should return true if pattern exists and value matches it', () => {
      expect(isValidPattern('a', '[a-z]+')).toBe(true);
    });
    it('should return false if pattern exists and value undefined', () => {
      expect(isValidPattern(undefined, '[a-z]+')).toBe(false);
    });
    it('should return false if pattern exists and value invalid', () => {
      expect(isValidPattern('012', '[a-z]+')).toBe(false);
    });
    it('should return true if pattern not defined', () => {
      expect(isValidPattern('a', undefined)).toBe(true);
    });
  });

  describe('when establishing if a value passes min validation', () => {
    it('should return true if min exists and value matches or exceeds it', () => {
      expect(isValidMin(1, 1)).toBe(true);
      expect(isValidMin(0, 0)).toBe(true);
    });
    it('should return false if min exists and value undefined', () => {
      expect(isValidMin(undefined, 1)).toBe(false);
    });
    it('should return false if min exists and value too low', () => {
      expect(isValidMin(1, 2)).toBe(false);
      expect(isValidMin(-1, 0)).toBe(false);
    });
    it('should return true if min not defined', () => {
      expect(isValidMin(1, undefined)).toBe(true);
    });
  });

  describe('when establishing if a value passes max validation', () => {
    it('should return true if max exists and value matches or exceeds it', () => {
      expect(isValidMax(2, 2)).toBe(true);
      expect(isValidMax(-1, 0)).toBe(true);
    });
    it('should return false if max exists and value undefined', () => {
      expect(isValidMax(undefined, 2)).toBe(false);
    });
    it('should return false if max exists and value too high', () => {
      expect(isValidMax(3, 2)).toBe(false);
    });
    it('should return true if max not defined', () => {
      expect(isValidMax(2, undefined)).toBe(true);
    });
  });

  describe('when establishing if an array passes minItems validation', () => {
    it('should return true if minItems exists and value matches or exceeds it', () => {
      expect(isValidMinItems([1], 1)).toBe(true);
      expect(isValidMinItems([], 0)).toBe(true);
    });
    it('should return false if minItems exists and value undefined', () => {
      expect(isValidMinItems(undefined, 1)).toBe(false);
    });
    it('should return false if minItems exists and value too short', () => {
      expect(isValidMinItems([1], 2)).toBe(false);
      expect(isValidMinItems([], 1)).toBe(false);
    });
    it('should return true if minItems not defined', () => {
      expect(isValidMinItems([], undefined)).toBe(true);
    });
  });

  describe('when establishing if an array passes maxItems validation', () => {
    it('should return true if maxItems exists and value matches or exceeds it', () => {
      expect(isValidMaxItems([1], 1)).toBe(true);
      expect(isValidMaxItems([], 0)).toBe(true);
    });
    it('should return false if maxItems exists and value undefined', () => {
      expect(isValidMaxItems(undefined, 1)).toBe(false);
    });
    it('should return false if maxItems exists and value too long', () => {
      expect(isValidMaxItems([1, 2], 1)).toBe(false);
    });
    it('should return true if maxItems not defined', () => {
      expect(isValidMaxItems([], undefined)).toBe(true);
    });
  });
});
