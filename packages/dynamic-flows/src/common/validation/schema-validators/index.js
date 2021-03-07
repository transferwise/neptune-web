import { isObject, isArray } from '@transferwise/neptune-validation';

import {
  getStringValidationFailures,
  getNumberValidationFailures,
  getIntegerValidationFailures,
  getBooleanValidationFailures,
  getEnumValidationFailures,
  getConstValidationFailures,
  getArrayValidationFailures,
} from '../validation-failures';

function isValidStringSchema(value, schema) {
  return !getStringValidationFailures(value, schema).length;
}

function isValidNumberSchema(value, schema) {
  return !getNumberValidationFailures(value, schema).length;
}

function isValidIntegerSchema(value, schema) {
  return !getIntegerValidationFailures(value, schema).length;
}

function isValidBooleanSchema(value, schema) {
  return !getBooleanValidationFailures(value, schema).length;
}

function isValidEnumSchema(value, schema) {
  return !getEnumValidationFailures(value, schema).length;
}

function isValidConstSchema(value, schema) {
  return !getConstValidationFailures(value, schema).length;
}

function isValidObjectSchema(value, schema) {
  if (!isObject(value) || schema.type !== 'object' || !isObject(schema.properties)) {
    return false;
  }

  return Object.keys(schema.properties)
    .map((propertyName) =>
      isObjectPropertyValid(
        value[propertyName],
        schema.properties[propertyName],
        schema.required && schema.required.indexOf(propertyName) >= 0,
      ),
    )
    .every((property) => property);
}

function isObjectPropertyValid(propertyValue, propertySchema, isRequired) {
  if (typeof propertyValue === 'undefined') {
    return !isRequired;
  }
  return isValidSchema(propertyValue, propertySchema);
}

function isValidArraySchema(value, schema) {
  if (schema.type !== 'array' || !isObject(schema.items)) {
    return false;
  }

  if (getArrayValidationFailures(value, schema).length) {
    return false;
  }
  return value.map((item) => isValidSchema(item, schema.items)).every((valid) => valid);
}

function isValidOneOfSchema(value, schema) {
  if (!isArray(schema.oneOf)) {
    return false;
  }
  return schema.oneOf.some((childSchema) => isValidSchema(value, childSchema));
}

function isValidAllOfSchema(value, schema) {
  if (!isArray(schema.allOf)) {
    return false;
  }
  return schema.allOf
    .map((childSchema) => isValidSchema(value, childSchema))
    .every((valid) => valid);
}

/**
 * Validate any value against a given schema
 */
function isValidSchema(value, schema) {
  if (schema.oneOf) {
    return isValidOneOfSchema(value, schema);
  }

  if (schema.allOf) {
    return isValidAllOfSchema(value, schema);
  }

  if (schema.enum) {
    return isValidEnumSchema(value, schema);
  }

  if (schema.const) {
    return isValidConstSchema(value, schema);
  }

  switch (schema.type) {
    case 'string':
      return isValidStringSchema(value, schema);
    case 'number':
      return isValidNumberSchema(value, schema);
    case 'integer':
      return isValidIntegerSchema(value, schema);
    case 'boolean':
      return isValidBooleanSchema(value, schema);
    case 'array':
      return isValidArraySchema(value, schema);
    case 'object':
      return isValidObjectSchema(value, schema);
    default:
      return false;
  }
}

export { isValidSchema };
