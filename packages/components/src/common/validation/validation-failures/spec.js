import { getValidationFailures } from '.';

describe('Given a library for identifying validation failures', function() {
  let schema;

  describe('when validating a string schema', function() {
    beforeEach(function() {
      schema = {
        type: 'string',
        minLength: 3,
        maxLength: 6,
        pattern: '^[a-z]+$',
      };
    });

    it('should return an empty array for valid string', function() {
      expect(getValidationFailures('string', schema)).toEqual([]);
    });
    it('should return minLength when too short', function() {
      expect(getValidationFailures('st', schema)).toEqual(['minLength']);
    });
    it('should return [maxLength] when too long', function() {
      expect(getValidationFailures('strings', schema)).toEqual(['maxLength']);
    });
    it('should return [pattern] when does not pass regex', function() {
      expect(getValidationFailures('STRING', schema)).toEqual(['pattern']);
    });
    it('should return [type] when incorrect data type', function() {
      expect(getValidationFailures(1234, schema)).toEqual(['type']);
    });
  });

  describe('when validating a string date', function() {
    beforeEach(function() {
      schema = {
        type: 'string',
        min: '2000-01-01T00:00:00Z',
        max: '2010-01-01T00:00:00Z',
      };
    });

    it('should return an empty array for valid date', function() {
      expect(getValidationFailures('2005-01-01T00:00:00Z', schema)).toEqual([]);
    });
    it('should return [min] when date is too early', function() {
      expect(getValidationFailures('1999-01-01T00:00:00Z', schema)).toEqual(['min']);
    });
    it('should return [max] when date is too late', function() {
      expect(getValidationFailures('2011-01-01T00:00:00Z', schema)).toEqual(['max']);
    });
  });

  describe('when validating a number schema', function() {
    beforeEach(function() {
      schema = {
        type: 'number',
        min: 0,
        max: 20,
      };
    });

    it('should return an empty array for an integer in range', function() {
      expect(getValidationFailures(10, schema)).toEqual([]);
    });
    it('should return an empty array for a float in range', function() {
      expect(getValidationFailures(12.34, schema)).toEqual([]);
    });
    it('should return an empty array for a number that matches our min', function() {
      expect(getValidationFailures(0, schema)).toEqual([]);
    });
    it('should return an empty array for a number that matches our max', function() {
      expect(getValidationFailures(20, schema)).toEqual([]);
    });
    it('should return [min] when number is too low', function() {
      expect(getValidationFailures(-1, schema)).toEqual(['min']);
    });
    it('should return [max] when number is too high', function() {
      expect(getValidationFailures(21, schema)).toEqual(['max']);
    });
    it('should return [type] when incorrect data type', function() {
      expect(getValidationFailures('string', schema)).toEqual(['type']);
    });
  });

  describe('when validating an integer schema', function() {
    beforeEach(function() {
      schema = {
        type: 'integer',
      };
    });

    it('should return an empty array for valid integer', function() {
      expect(getValidationFailures(15, schema)).toEqual([]);
    });
    it('should return [type] when a number is not an integer', function() {
      expect(getValidationFailures(12.34, schema)).toEqual(['type']);
    });
  });

  describe('when validating a boolean schema', function() {
    beforeEach(function() {
      schema = {
        type: 'boolean',
      };
    });

    it('should return an empty array for valid boolean', function() {
      expect(getValidationFailures(true, schema)).toEqual([]);
      expect(getValidationFailures(false, schema)).toEqual([]);
    });
    it('should return [type] when incorrect data type', function() {
      expect(getValidationFailures(1, schema)).toEqual(['type']);
    });
  });

  describe('when validating an array schema', function() {
    beforeEach(function() {
      schema = {
        type: 'array',
        items: {
          type: 'number',
        },
        minItems: 2,
        maxItems: 2,
      };
    });

    it('should return an empty array for a valid array', function() {
      expect(getValidationFailures([1, 2], schema)).toEqual([]);
    });
    it('should return [minItems] when the array is too small', function() {
      expect(getValidationFailures([1], schema)).toEqual(['minItems']);
    });
    it('should return [maxItems] when the array is too big', function() {
      expect(getValidationFailures([1, 2, 3], schema)).toEqual(['maxItems']);
    });
    it('should return [type] when incorrect data type', function() {
      expect(getValidationFailures({ a: 1 }, schema)).toEqual(['type']);
    });
  });

  describe('when validating an object schema', function() {
    beforeEach(function() {
      schema = {
        type: 'object',
        properties: {
          a: {
            type: 'number',
          },
        },
        required: ['a'],
      };
    });

    it('should return an empty array for a valid object', function() {
      expect(getValidationFailures({ a: 1 }, schema)).toEqual([]);
    });
    it('should return [required] when required properties are missing', function() {
      expect(getValidationFailures({}, schema)).toEqual(['required']);
    });
    it('should return [type] when incorrect data type', function() {
      expect(getValidationFailures([1], schema)).toEqual(['type']);
    });
  });
});
