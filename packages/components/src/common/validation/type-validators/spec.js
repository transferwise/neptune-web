import { isString, isNumber, isInteger, isBoolean, isObject, isArray } from '.';

describe('Given a library for validating data types', function() {
  describe('when validating a string', function() {
    it('should return true when the value is a string', function() {
      expect(isString('a')).toBe(true);
      expect(isString('')).toBe(true);
    });
    it('should return false when the value is not string', function() {
      expect(isString(1)).toBe(false);
      expect(isString(true)).toBe(false);
      expect(isString([])).toBe(false);
      expect(isString({})).toBe(false);
    });
  });

  describe('when validating a number', function() {
    it('should return true when the value is a number', function() {
      expect(isNumber(1)).toBe(true);
      expect(isNumber(0)).toBe(true);
      expect(isNumber(1.23)).toBe(true);
      expect(isNumber(-1)).toBe(true);
    });
    it('should return false when the value is not number', function() {
      expect(isNumber('a')).toBe(false);
      expect(isNumber(true)).toBe(false);
      expect(isNumber([])).toBe(false);
      expect(isNumber({})).toBe(false);
    });
  });

  describe('when validating an integer', function() {
    it('should return true when the value is a integer', function() {
      expect(isInteger(1)).toBe(true);
      expect(isInteger(0)).toBe(true);
      expect(isInteger(-1)).toBe(true);
    });
    it('should return false when the value is not an integer', function() {
      expect(isInteger(1.23)).toBe(false);
      expect(isInteger('a')).toBe(false);
      expect(isInteger(true)).toBe(false);
      expect(isInteger([])).toBe(false);
      expect(isInteger({})).toBe(false);
    });
  });

  describe('when validating a boolean', function() {
    it('should return true when the value is a boolean', function() {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });
    it('should return false when the value is not a boolean', function() {
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean('a')).toBe(false);
      expect(isBoolean([])).toBe(false);
      expect(isBoolean({})).toBe(false);
    });
  });

  describe('when validating an array', function() {
    it('should return true when the value is an array', function() {
      expect(isArray([1])).toBe(true);
      expect(isArray([])).toBe(true);
    });
    it('should return false when the value is not an array', function() {
      expect(isArray(1)).toBe(false);
      expect(isArray('a')).toBe(false);
      expect(isArray(true)).toBe(false);
      expect(isArray({})).toBe(false);
    });
  });

  describe('when validating an object', function() {
    it('should return true when the value is an object', function() {
      expect(isObject({ a: 1 })).toBe(true);
      expect(isObject({})).toBe(true);
    });
    it('should return false when the value is not an array', function() {
      expect(isObject(1)).toBe(false);
      expect(isObject('a')).toBe(false);
      expect(isObject(true)).toBe(false);
      expect(isObject([])).toBe(false);
    });
  });
});
