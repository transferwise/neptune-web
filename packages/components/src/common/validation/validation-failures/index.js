import { isObject, isArray, isString, isNumber, isInteger, isBoolean } from '../type-validators';

import {
  isValidRequired,
  isValidMinLength,
  isValidMaxLength,
  isValidPattern,
  isValidMax,
  isValidMin,
  isValidMinItems,
  isValidMaxItems,
} from '../rule-validators';

function getValidationFailures(value, schema) {
  switch (schema.type) {
    case 'string':
      return getStringValidationFailures(value, schema);
    case 'number':
      return getNumberValidationFailures(value, schema);
    case 'integer':
      return getIntegerValidationFailures(value, schema);
    case 'boolean':
      return getBooleanValidationFailures(value, schema);
    case 'array':
      return getArrayValidationFailures(value, schema);
    case 'object':
      return getObjectValidationFailures(value, schema);
    default:
      return [];
  }
}

function getStringValidationFailures(value, schema) {
  if (!isString(value)) {
    return ['type'];
  }

  const failures = [];
  if (!isValidRequired(value)) {
    failures.push('required');
  }
  if (!isValidMinLength(value, schema.minLength)) {
    failures.push('minLength');
  }
  if (!isValidMaxLength(value, schema.maxLength)) {
    failures.push('maxLength');
  }
  if (!isValidPattern(value, schema.pattern)) {
    failures.push('pattern');
  }
  if (!isValidMin(value, schema.min)) {
    failures.push('min');
  }
  if (!isValidMax(value, schema.max)) {
    failures.push('max');
  }
  return failures;
}

function getNumberValidationFailures(value, schema) {
  if (!isNumber(value)) {
    return ['type'];
  }

  const failures = [];
  if (!isValidRequired(value)) {
    failures.push('required');
  }
  if (!isValidMin(value, schema.min)) {
    failures.push('min');
  }
  if (!isValidMax(value, schema.max)) {
    failures.push('max');
  }
  return failures;
}

function getIntegerValidationFailures(value, schema) {
  if (!isInteger(value)) {
    return ['type'];
  }
  return getNumberValidationFailures(value, schema);
}

function getBooleanValidationFailures(value) {
  if (!isBoolean(value)) {
    return ['type'];
  }

  const failures = [];
  if (!isValidRequired(value)) {
    failures.push('required');
  }
  return failures;
}

function getArrayValidationFailures(value, schema) {
  if (!isArray(value)) {
    return ['type'];
  }

  const failures = [];
  if (!isValidMinItems(value, schema.minItems)) {
    failures.push('minItems');
  }
  if (!isValidMaxItems(value, schema.maxItems)) {
    failures.push('maxItems');
  }
  return failures;
}

/**
 * When validating an object we only checking that it is an object and that it
 * has the required properties, we do not check if the properties are valid.
 */
function getObjectValidationFailures(value, schema) {
  if (!isObject(value)) {
    return ['type'];
  }

  if (!isArray(schema.required)) {
    return [];
  }

  const allPresent = schema.required
    .map(prop => typeof value[prop] !== 'undefined')
    .reduce((propInModel, validSoFar) => propInModel && validSoFar, true);

  return allPresent ? [] : ['required'];
}

export {
  getValidationFailures,
  getStringValidationFailures,
  getNumberValidationFailures,
  getBooleanValidationFailures,
  getArrayValidationFailures,
  getObjectValidationFailures,
};
