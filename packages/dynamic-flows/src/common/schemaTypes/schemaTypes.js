const basicTypes = ['string', 'number', 'integer', 'boolean'];

export const schemaType = {
  PERSIST_ASYNC: 'persistAsync',
  VALIDATION_ASYNC: 'validationAsync',
  OBJECT: 'object',
  ONE_OF: 'oneOf',
  ALL_OF: 'allOf',
  BASIC: 'basic',
};

export const isPersistAsyncSchema = (schema) => !!schema.persistAsync;

export const isValidationAsyncSchema = (schema) => !!schema.validationAsync;

export const isObjectSchema = (schema) => schema.type === 'object';

export const isOneOfSchema = (schema) => !!schema.oneOf;

export const isAllOfSchema = (schema) => !!schema.allOf;

export const isBasicSchema = (schema) =>
  basicTypes.indexOf(schema.type) >= 0 || !!schema.enum || !!schema.const;

export const getSchemaType = (schema) => {
  // Order of application is important here
  if (isPersistAsyncSchema(schema)) {
    return schemaType.PERSIST_ASYNC;
  }
  if (isValidationAsyncSchema(schema)) {
    return schemaType.VALIDATION_ASYNC;
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
