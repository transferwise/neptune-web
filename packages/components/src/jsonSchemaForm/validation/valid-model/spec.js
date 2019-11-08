import { getValidModelParts } from '.';

describe('Given a library for returning the valid parts of a model based on a schema', () => {
  let result;
  let schema;

  describe('when cleaning a string schema', () => {
    beforeEach(() => {
      schema = { type: 'string' };
    });

    describe('with a string model', () => {
      beforeEach(() => {
        result = getValidModelParts('string', schema);
      });
      it('should return the original string', () => {
        expect(result).toBe('string');
      });
    });

    describe('with any non string model', () => {
      beforeEach(() => {
        result = getValidModelParts({ a: 1 }, schema);
      });
      it('should return undefined', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('when cleaning a number schema', () => {
    beforeEach(() => {
      schema = { type: 'number' };
    });

    describe('with a number model', () => {
      beforeEach(() => {
        result = getValidModelParts(12345, schema);
      });
      it('should return the original number', () => {
        expect(result).toBe(12345);
      });
    });

    describe('with any non number model', () => {
      beforeEach(() => {
        result = getValidModelParts('string', schema);
      });
      it('should return undefined', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('when cleaning a boolean schema', () => {
    beforeEach(() => {
      schema = { type: 'boolean' };
    });

    describe('with a boolean model', () => {
      beforeEach(() => {
        result = getValidModelParts(false, schema);
      });
      it('should return the original boolean', () => {
        expect(result).toBe(false);
      });
    });

    describe('with any non number model', () => {
      beforeEach(() => {
        result = getValidModelParts('string', schema);
      });
      it('should return undefined', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('when cleaning a simple object schema', () => {
    beforeEach(() => {
      schema = {
        type: 'object',
        properties: {
          a: {
            type: 'number',
          },
        },
      };
    });

    describe('if the model has a property with the correct name and the correct type', () => {
      beforeEach(() => {
        result = getValidModelParts({ a: 1 }, schema);
      });
      it('should return the property', () => {
        expect(result).toEqual({ a: 1 });
      });
    });

    describe('if the model has a property with the correct name and an incorrect typs', () => {
      beforeEach(() => {
        result = getValidModelParts({ a: '1' }, schema);
      });
      it('should return an empty object', () => {
        expect(result).toEqual({});
      });
    });

    describe('if the model contains properties not in the schema', () => {
      beforeEach(() => {
        result = getValidModelParts({ a: 1, b: 2 }, schema);
      });
      it('should return the object without those properties', () => {
        expect(result).toEqual({ a: 1 });
      });
    });
  });

  describe('when cleaning an object schema with nested objects', () => {
    beforeEach(() => {
      schema = {
        type: 'object',
        properties: {
          a: {
            type: 'number',
          },
          b: {
            type: 'object',
            properties: {
              c: {
                type: 'number',
              },
            },
          },
        },
      };
    });

    describe('if the nested model is valid', () => {
      beforeEach(() => {
        result = getValidModelParts({ a: 1, b: { c: 2 } }, schema);
      });
      it('should be returned', () => {
        expect(result).toEqual({ a: 1, b: { c: 2 } });
      });
    });

    describe('if the nested model contains invalid properties', () => {
      beforeEach(() => {
        result = getValidModelParts({ a: 1, b: { c: 2, d: 3 }, e: 4 }, schema);
      });
      it('should remove them', () => {
        expect(result).toEqual({ a: 1, b: { c: 2 } });
      });
    });
  });

  describe('when cleaning an allOf schema', () => {
    beforeEach(() => {
      schema = {
        oneOf: [
          {
            type: 'object',
            properties: {
              a: {
                type: 'number',
              },
            },
          },
          {
            type: 'object',
            properties: {
              b: {
                type: 'number',
              },
            },
          },
        ],
      };
    });

    describe('if all of the properties are valid', () => {
      beforeEach(() => {
        result = getValidModelParts({ a: 1, b: 2, c: 3 }, schema);
      });
      it('should return them', () => {
        expect(result).toEqual({ a: 1, b: 2 });
      });
    });

    describe('if the nested model contains invalid properties', () => {
      beforeEach(() => {
        result = getValidModelParts({ a: 1, b: '2' }, schema);
      });
      it('should remove them', () => {
        expect(result).toEqual({ a: 1 });
      });
    });
  });
});
