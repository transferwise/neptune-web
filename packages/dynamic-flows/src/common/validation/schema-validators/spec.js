import { isValidSchema } from '.';

describe('Given a library for validating json schema models', () => {
  let schema;

  describe('when validating an object schema', () => {
    beforeEach(() => {
      schema = {
        type: 'object',
        properties: {
          a: {
            type: 'number',
            minimum: 2,
          },
          b: {
            type: 'string',
            minLength: 3,
          },
          c: {
            const: true,
          },
        },
        required: ['a', 'c'],
      };
    });

    it('should return false if the value is of an incorrect type', () => {
      expect(isValidSchema([1], schema)).toBe(false);
    });
    it('should return false if a required property is missing', () => {
      expect(isValidSchema({}, schema)).toBe(false);
    });
    it('should return false is a required property does not validate', () => {
      expect(isValidSchema({ a: 1, c: true }, schema)).toBe(false);
    });
    it('should return false if an optional property is invalid', () => {
      expect(isValidSchema({ a: 2, b: 'c', c: true }, schema)).toBe(false);
    });

    it('should return true if required properties validate and non-required fields are missing', () => {
      expect(isValidSchema({ a: 2, c: true }, schema)).toBe(true);
    });
    it('should return true if all properties validate', () => {
      expect(isValidSchema({ a: 2, b: 'cde', c: true }, schema)).toBe(true);
    });
  });

  describe('when validating an array schema', () => {
    beforeEach(() => {
      schema = {
        type: 'array',
        items: {
          type: 'string',
          minLength: 2,
        },
        minItems: 2,
        maxItems: 2,
      };
    });

    it('should return false if not an array', () => {
      expect(isValidSchema({ a: 1 }, schema)).toBe(false);
    });
    it('should return false if the array is too small', () => {
      expect(isValidSchema(['ab'], schema)).toBe(false);
    });
    it('should return false if the array is too long', () => {
      expect(isValidSchema(['ab', 'cd', 'ef'], schema)).toBe(false);
    });
    it('should return false if any of the items do not validate', () => {
      expect(isValidSchema(['ab', 'c'], schema)).toBe(false);
    });
    it('should return true is the array is correct size and items are valid', () => {
      expect(isValidSchema(['ab', 'cd'], schema)).toBe(true);
    });
  });

  describe('when validating a oneOf schema', () => {
    beforeEach(() => {
      schema = {
        oneOf: [
          {
            type: 'string',
            minLength: 2,
          },
          {
            type: 'number',
            minimum: 2,
          },
        ],
      };
    });

    it('should return false if neither schema validates', () => {
      expect(isValidSchema(true, schema)).toBe(false);
      expect(isValidSchema('a', schema)).toBe(false);
      expect(isValidSchema(1, schema)).toBe(false);
    });
    it('should return true if either schema validates', () => {
      expect(isValidSchema('ab', schema)).toBe(true);
      expect(isValidSchema(2, schema)).toBe(true);
    });
  });

  describe('when validating an allOf schema', () => {
    beforeEach(() => {
      schema = {
        allOf: [
          {
            type: 'object',
            properties: {
              a: {
                type: 'string',
                minLength: 2,
              },
            },
            required: ['a'],
          },
          {
            type: 'object',
            properties: {
              b: {
                type: 'number',
                minimum: 2,
              },
            },
            required: ['b'],
          },
        ],
      };
    });

    it('should return false if only one schema is present', () => {
      expect(isValidSchema({ a: 'bc' }, schema)).toBe(false);
      expect(isValidSchema({ b: 2 }, schema)).toBe(false);
    });
    it('should return false if any schemas are invalid', () => {
      expect(isValidSchema({ a: 'bc', b: 1 }, schema)).toBe(false);
    });
    it('should return true if both schemas validate', () => {
      expect(isValidSchema({ a: 'bc', b: 2 }, schema)).toBe(true);
    });
  });
});
