import { isString, isNumber, isInteger, isBoolean, isArray, isObject } from '.';

describe('Given a library for validating data types', () => {
  describe('when validating a string', () => {
    it('should return true when the value is a string', () => {
      expect(isString('a')).toBe(true);
      expect(isString('')).toBe(true);
    });
    it('should return false when the value is not string', () => {
      expect(isString(1)).toBe(false);
      expect(isString(true)).toBe(false);
      expect(isString([])).toBe(false);
      expect(isString({})).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString(null)).toBe(false);
    });
  });

  describe('when validating a number', () => {
    it('should return true when the value is a number', () => {
      expect(isNumber(1)).toBe(true);
      expect(isNumber(0)).toBe(true);
      expect(isNumber(1.23)).toBe(true);
      expect(isNumber(-1)).toBe(true);
    });
    it('should return false when the value is not number', () => {
      expect(isNumber('a')).toBe(false);
      expect(isNumber(true)).toBe(false);
      expect(isNumber([])).toBe(false);
      expect(isNumber({})).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(null)).toBe(false);
    });
  });

  describe('when validating an integer', () => {
    it('should return true when the value is a integer', () => {
      expect(isInteger(1)).toBe(true);
      expect(isInteger(0)).toBe(true);
      expect(isInteger(-1)).toBe(true);
    });
    it('should return false when the value is not an integer', () => {
      expect(isInteger(1.23)).toBe(false);
      expect(isInteger('a')).toBe(false);
      expect(isInteger(true)).toBe(false);
      expect(isInteger([])).toBe(false);
      expect(isInteger({})).toBe(false);
      expect(isInteger(undefined)).toBe(false);
      expect(isInteger(null)).toBe(false);
    });
  });

  describe('when validating a boolean', () => {
    it('should return true when the value is a boolean', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });
    it('should return false when the value is not a boolean', () => {
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean('a')).toBe(false);
      expect(isBoolean([])).toBe(false);
      expect(isBoolean({})).toBe(false);
      expect(isBoolean(undefined)).toBe(false);
      expect(isBoolean(null)).toBe(false);
    });
  });

  describe('when validating an array', () => {
    it('should return true when the value is an array', () => {
      expect(isArray([1])).toBe(true);
      expect(isArray([])).toBe(true);
    });
    it('should return false when the value is not an array', () => {
      expect(isArray(1)).toBe(false);
      expect(isArray('a')).toBe(false);
      expect(isArray(true)).toBe(false);
      expect(isArray({})).toBe(false);
      expect(isArray(undefined)).toBe(false);
      expect(isArray(null)).toBe(false);
    });
  });

  describe('when validating an object', () => {
    it('should return true when the value is an object', () => {
      expect(isObject({ a: 1 })).toBe(true);
      expect(isObject({})).toBe(true);
    });
    it('should return false when the value is not an object', () => {
      expect(isObject(1)).toBe(false);
      expect(isObject('a')).toBe(false);
      expect(isObject(true)).toBe(false);
      expect(isObject([])).toBe(false);
      expect(isObject(undefined)).toBe(false);
      expect(isObject(null)).toBe(false);
    });
  });
});
