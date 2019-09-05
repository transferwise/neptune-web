import {
  isValidRequired,
  isValidMinLength,
  isValidMaxLength,
  isValidPattern,
  isValidMax,
  isValidMin,
  isValidMinItems,
  isValidMaxItems,
} from '.';

describe('Given a library for validating json schema rules', function() {
  describe('when establishing if a value passes required validation', function() {
    it('should return true if required and value defined', function() {
      expect(isValidRequired('something', true)).toBe(true);
    });
    it('should return false if required and value undefined', function() {
      expect(isValidRequired(undefined, true)).toBe(false);
    });
    it('should return true if not required', function() {
      expect(isValidRequired(undefined, false)).toBe(true);
      expect(isValidRequired('something', false)).toBe(true);
    });
  });

  describe('when establishing if a value passes minLength validation', function() {
    it('should return true if minLength exists and value matches or exceeds it', function() {
      expect(isValidMinLength('a', 1)).toBe(true);
      expect(isValidMinLength('ab', 1)).toBe(true);
    });
    it('should return false if minLength exists and value undefined', function() {
      expect(isValidMinLength(undefined, 1)).toBe(false);
    });
    it('should return false if minLength exists and value too short', function() {
      expect(isValidMinLength('', 1)).toBe(false);
    });
    it('should return true if minLength not defined', function() {
      expect(isValidMinLength('a', undefined)).toBe(true);
    });
  });

  describe('when establishing if a value passes maxLength validation', function() {
    it('should return true if maxLength exists and value matches or exceeds it', function() {
      expect(isValidMaxLength('a', 2)).toBe(true);
      expect(isValidMaxLength('ab', 2)).toBe(true);
    });
    it('should return false if maxLength exists and value undefined', function() {
      expect(isValidMaxLength(undefined, 2)).toBe(false);
    });
    it('should return false if maxLength exists and value too long', function() {
      expect(isValidMaxLength('abc', 2)).toBe(false);
    });
    it('should return true if maxLength not defined', function() {
      expect(isValidMinLength('a', undefined)).toBe(true);
    });
  });

  describe('when establishing if a value passes pattern validation', function() {
    it('should return true if pattern exists and value matches it', function() {
      expect(isValidPattern('a', '[a-z]+')).toBe(true);
    });
    it('should return false if pattern exists and value undefined', function() {
      expect(isValidPattern(undefined, '[a-z]+')).toBe(false);
    });
    it('should return false if pattern exists and value invalid', function() {
      expect(isValidPattern('012', '[a-z]+')).toBe(false);
    });
    it('should return true if pattern not defined', function() {
      expect(isValidPattern('a', undefined)).toBe(true);
    });
  });

  describe('when establishing if a value passes min validation', function() {
    it('should return true if min exists and value matches or exceeds it', function() {
      expect(isValidMin(1, 1)).toBe(true);
      expect(isValidMin(0, 0)).toBe(true);
    });
    it('should return false if min exists and value undefined', function() {
      expect(isValidMin(undefined, 1)).toBe(false);
    });
    it('should return false if min exists and value too low', function() {
      expect(isValidMin(1, 2)).toBe(false);
      expect(isValidMin(-1, 0)).toBe(false);
    });
    it('should return true if min not defined', function() {
      expect(isValidMin(1, undefined)).toBe(true);
    });
  });

  describe('when establishing if a value passes max validation', function() {
    it('should return true if max exists and value matches or exceeds it', function() {
      expect(isValidMax(2, 2)).toBe(true);
      expect(isValidMax(-1, 0)).toBe(true);
    });
    it('should return false if max exists and value undefined', function() {
      expect(isValidMax(undefined, 2)).toBe(false);
    });
    it('should return false if max exists and value too high', function() {
      expect(isValidMax(3, 2)).toBe(false);
    });
    it('should return true if max not defined', function() {
      expect(isValidMax(2, undefined)).toBe(true);
    });
  });

  describe('when establishing if an array passes minItems validation', function() {
    it('should return true if minItems exists and value matches or exceeds it', function() {
      expect(isValidMinItems([1], 1)).toBe(true);
      expect(isValidMinItems([], 0)).toBe(true);
    });
    it('should return false if minItems exists and value undefined', function() {
      expect(isValidMinItems(undefined, 1)).toBe(false);
    });
    it('should return false if minItems exists and value too short', function() {
      expect(isValidMinItems([1], 2)).toBe(false);
      expect(isValidMinItems([], 1)).toBe(false);
    });
    it('should return true if minItems not defined', function() {
      expect(isValidMinItems([], undefined)).toBe(true);
    });
  });

  describe('when establishing if an array passes maxItems validation', function() {
    it('should return true if maxItems exists and value matches or exceeds it', function() {
      expect(isValidMaxItems([1], 1)).toBe(true);
      expect(isValidMaxItems([], 0)).toBe(true);
    });
    it('should return false if maxItems exists and value undefined', function() {
      expect(isValidMaxItems(undefined, 1)).toBe(false);
    });
    it('should return false if maxItems exists and value too long', function() {
      expect(isValidMaxItems([1, 2], 1)).toBe(false);
    });
    it('should return true if maxItems not defined', function() {
      expect(isValidMaxItems([], undefined)).toBe(true);
    });
  });
});
