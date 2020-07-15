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
      it('should return null', () => {
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
      it('should return null', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('when cleaning an integer schema', () => {
    beforeEach(() => {
      schema = { type: 'integer' };
    });

    describe('with an integer model', () => {
      beforeEach(() => {
        result = getValidModelParts(12345, schema);
      });
      it('should return the original integer', () => {
        expect(result).toBe(12345);
      });
    });

    describe('with any non integer model', () => {
      beforeEach(() => {
        result = getValidModelParts(12.34, schema);
      });
      it('should return null', () => {
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
      it('should return null', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('when cleaning a enum schema', () => {
    beforeEach(() => {
      schema = { enum: [1, 2] };
    });

    describe('if the model is part of the enum', () => {
      beforeEach(() => {
        result = getValidModelParts(1, schema);
      });
      it('should return the original model', () => {
        expect(result).toBe(1);
      });
    });

    describe('if the model is not part of the enum', () => {
      beforeEach(() => {
        result = getValidModelParts(3, schema);
      });
      it('should return null', () => {
        expect(result).toBeNull();
      });
    });
  });

  describe('when cleaning a const schema', () => {
    beforeEach(() => {
      schema = { const: 1 };
    });

    describe('if the model matches the const', () => {
      beforeEach(() => {
        result = getValidModelParts(1, schema);
      });
      it('should return the original model', () => {
        expect(result).toBe(1);
      });
    });

    describe('if the model does not match the const', () => {
      beforeEach(() => {
        result = getValidModelParts(2, schema);
      });
      it('should return null', () => {
        expect(result).toBeNull();
      });
    });

    describe('if the const evaluates to false', () => {
      beforeEach(() => {
        result = getValidModelParts(0, { const: 0 });
      });
      it('should still return matches', () => {
        expect(result).toBe(0);
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

  describe('when cleaning a oneOf schema', () => {
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
        result = getValidModelParts({ a: 1, b: 2 }, schema);
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

    describe('if the model contains undocumented properties', () => {
      beforeEach(() => {
        result = getValidModelParts({ a: 1, b: 2, c: 3 }, schema);
      });
      it('should remove them', () => {
        expect(result).toEqual({ a: 1, b: 2 });
      });
    });
  });

  describe('when cleaning a oneOf schema of const', () => {
    beforeEach(() => {
      schema = {
        oneOf: [{ const: 0 }, { const: 1 }, { const: 2 }],
      };
    });

    describe('when the value is in the const collection', () => {
      it('should return the value', () => {
        expect(getValidModelParts(0, schema)).toEqual(0);
        expect(getValidModelParts(1, schema)).toEqual(1);
        expect(getValidModelParts(2, schema)).toEqual(2);
      });
    });

    describe('when the value is not in the const collection', () => {
      it('should return null', () => {
        expect(getValidModelParts(3, schema)).toEqual(null);
        expect(getValidModelParts({}, schema)).toEqual(null);
        expect(getValidModelParts(null, schema)).toEqual(null);
      });
    });
  });

  describe('when cleaning an allOf schema', () => {
    beforeEach(() => {
      schema = {
        allOf: [
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
        result = getValidModelParts({ a: 1, b: 2 }, schema);
      });
      it('should return them', () => {
        expect(result).toEqual({ a: 1, b: 2 });
      });
    });

    describe('if the model contains invalid properties', () => {
      beforeEach(() => {
        result = getValidModelParts({ a: 1, b: '2' }, schema);
      });
      it('should remove them', () => {
        expect(result).toEqual({ a: 1 });
      });
    });

    describe('if the model contains undocumented properties', () => {
      beforeEach(() => {
        result = getValidModelParts({ a: 1, b: 2, c: 3 }, schema);
      });
      it('should remove them', () => {
        expect(result).toEqual({ a: 1, b: 2 });
      });
    });
  });

  describe('when schemas both contain the same nested object', () => {
    let model;
    beforeEach(() => {
      model = {
        nested: { a: '1', b: '2' },
      };

      schema = {
        oneOf: [
          {
            type: 'object',
            properties: {
              nested: {
                type: 'object',
                properties: {
                  a: { type: 'string' },
                },
              },
            },
          },
          {
            type: 'object',
            properties: {
              nested: {
                type: 'object',
                properties: {
                  b: { type: 'string' },
                },
              },
            },
          },
        ],
      };

      result = getValidModelParts(model, schema);
    });

    it('should deep merge the content of the nested objects', () => {
      expect(result).toEqual(model);
    });
  });
});
