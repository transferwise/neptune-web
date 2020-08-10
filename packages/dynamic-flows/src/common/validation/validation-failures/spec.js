import { getValidationFailures } from '.';

describe('Given a library for identifying validation failures', () => {
  let schema;

  describe('when value is null and schema required', () => {
    beforeEach(() => {
      schema = {
        type: 'string',
        minLength: 3,
        maxLength: 10,
        pattern: '^[a-z]+$',
      };
    });

    it('should return only required', () => {
      expect(getValidationFailures(null, schema, true)).toEqual(['required']);
    });
  });

  describe('when validating a string schema', () => {
    beforeEach(() => {
      schema = {
        type: 'string',
        minLength: 3,
        maxLength: 6,
        pattern: '^[a-z]+$',
      };
    });

    it('should return an empty array for valid string', () => {
      expect(getValidationFailures('string', schema)).toEqual([]);
    });
    it('should return an empty array for null if not required', () => {
      expect(getValidationFailures(null, schema, false)).toEqual([]);
    });
    it('should return minLength when too short', () => {
      expect(getValidationFailures('st', schema)).toEqual(['minLength']);
    });
    it('should return [maxLength] when too long', () => {
      expect(getValidationFailures('strings', schema)).toEqual(['maxLength']);
    });
    it('should return [pattern] when does not pass regex', () => {
      expect(getValidationFailures('STRING', schema)).toEqual(['pattern']);
    });
    it('should return [type] when incorrect data type', () => {
      expect(getValidationFailures(1234, schema)).toEqual(['type']);
    });
  });

  describe('when validating a string date', () => {
    beforeEach(() => {
      schema = {
        type: 'string',
        minimum: '2000-01-01T00:00:00Z',
        maximum: '2010-01-01T00:00:00Z',
      };
    });

    it('should return an empty array for valid date', () => {
      expect(getValidationFailures('2005-01-01T00:00:00Z', schema)).toEqual([]);
    });
    it('should return [min] when date is too early', () => {
      expect(getValidationFailures('1999-01-01T00:00:00Z', schema)).toEqual(['minimum']);
    });
    it('should return [max] when date is too late', () => {
      expect(getValidationFailures('2011-01-01T00:00:00Z', schema)).toEqual(['maximum']);
    });
  });

  describe('when validating a number schema', () => {
    beforeEach(() => {
      schema = {
        type: 'number',
        minimum: 0,
        maximum: 20,
      };
    });

    it('should return an empty array for an integer in range', () => {
      expect(getValidationFailures(10, schema)).toEqual([]);
    });
    it('should return an empty array for a float in range', () => {
      expect(getValidationFailures(12.34, schema)).toEqual([]);
    });
    it('should return an empty array for a number that matches our min', () => {
      expect(getValidationFailures(0, schema)).toEqual([]);
    });
    it('should return an empty array for a number that matches our max', () => {
      expect(getValidationFailures(20, schema)).toEqual([]);
    });
    it('should return [min] when number is too low', () => {
      expect(getValidationFailures(-1, schema)).toEqual(['minimum']);
    });
    it('should return [max] when number is too high', () => {
      expect(getValidationFailures(21, schema)).toEqual(['maximum']);
    });
    it('should return [type] when incorrect data type', () => {
      expect(getValidationFailures('string', schema)).toEqual(['type']);
    });
  });

  describe('when validating an integer schema', () => {
    beforeEach(() => {
      schema = { type: 'integer' };
    });

    it('should return an empty array for valid integer', () => {
      expect(getValidationFailures(15, schema)).toEqual([]);
    });
    it('should return [type] when a number is not an integer', () => {
      expect(getValidationFailures(12.34, schema)).toEqual(['type']);
    });
  });

  describe('when validating a boolean schema', () => {
    beforeEach(() => {
      schema = { type: 'boolean' };
    });

    it('should return an empty array for valid boolean', () => {
      expect(getValidationFailures(true, schema)).toEqual([]);
      expect(getValidationFailures(false, schema)).toEqual([]);
    });
    it('should return [type] when incorrect data type', () => {
      expect(getValidationFailures(1, schema)).toEqual(['type']);
    });
  });

  describe('when validating a const schema', () => {
    beforeEach(() => {
      schema = { const: 'abcd' };
    });

    it('should return an empty array when the const matches', () => {
      expect(getValidationFailures('abcd', schema)).toEqual([]);
    });
    it('should return [enum] when not const', () => {
      expect(getValidationFailures('1234', schema)).toEqual(['enum']);
    });
    it('should return [enum] when null', () => {
      expect(getValidationFailures(null, schema)).toEqual(['enum']);
    });
  });

  describe('when validating an enum schema', () => {
    beforeEach(() => {
      schema = { enum: ['a', 'b', 'c'] };
    });

    it('should return an empty array when value is one of the enums', () => {
      expect(getValidationFailures('b', schema)).toEqual([]);
    });
    it('should return [enum] when not allowed', () => {
      expect(getValidationFailures('d', schema)).toEqual(['enum']);
    });
    it('should return [enum] when null', () => {
      expect(getValidationFailures(null, schema)).toEqual(['enum']);
    });
  });

  describe('when validating an array schema', () => {
    beforeEach(() => {
      schema = {
        type: 'array',
        items: {
          type: 'number',
        },
        minItems: 2,
        maxItems: 2,
      };
    });

    it('should return an empty array for a valid array', () => {
      expect(getValidationFailures([1, 2], schema)).toEqual([]);
    });
    it('should return [minItems] when the array is too small', () => {
      expect(getValidationFailures([1], schema)).toEqual(['minItems']);
    });
    it('should return [maxItems] when the array is too big', () => {
      expect(getValidationFailures([1, 2, 3], schema)).toEqual(['maxItems']);
    });
    it('should return [type] when incorrect data type', () => {
      expect(getValidationFailures({ a: 1 }, schema)).toEqual(['type']);
    });
  });

  describe('when validating an object schema', () => {
    beforeEach(() => {
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

    it('should return an empty array for a valid object', () => {
      expect(getValidationFailures({ a: 1 }, schema)).toEqual([]);
    });
    it('should return [required] when required properties are missing', () => {
      expect(getValidationFailures({}, schema)).toEqual(['required']);
    });
    it('should return [type] when incorrect data type', () => {
      expect(getValidationFailures([1], schema)).toEqual(['type']);
    });
  });
});
