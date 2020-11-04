const basicTypes = ['string', 'number', 'integer', 'boolean'];

export const schemaType = {
  PERSIST_ASYNC: 'persistAsync',
  OBJECT: 'object',
  ONE_OF: 'oneOf',
  ALL_OF: 'allOf',
  BASIC: 'basic',
};

const isPersistAsyncSchema = (schema) => !!schema.persistAsync;

const isObjectSchema = (schema) => schema.type === 'object';

const isOneOfSchema = (schema) => !!schema.oneOf;

const isAllOfSchema = (schema) => !!schema.allOf;

const isBasicSchema = (schema) =>
  basicTypes.indexOf(schema.type) >= 0 || !!schema.enum || !!schema.const;

export const getSchemaType = (schema) => {
  // Order of application is important here
  if (isPersistAsyncSchema(schema)) {
    return schemaType.PERSIST_ASYNC;
  }
  if (isObjectSchema(schema)) {
    return schemaType.OBJECT;
  }
  if (isOneOfSchema(schema)) {
    return schemaType.ONE_OF;
  }
  if (isAllOfSchema(schema)) {
    return schemaType.ALL_OF;
  }
  if (isBasicSchema(schema)) {
    return schemaType.BASIC;
  }
  return null;
};
