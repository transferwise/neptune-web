import {
  isNull,
  isString,
  isNumber,
  isValidMaxLength,
  isValidMinLength,
  isValidRequired,
  isValidMinimum,
  isValidMaximum,
  isValidPattern,
  isEmpty,
} from '@transferwise/neptune-validation';

function getValidationFailures(value, type, validations) {
  const isRequired = validations.required;

  if (isNull(value) || value === false || isEmpty(value) || Number.isNaN(value)) {
    return isRequired ? ['required'] : [];
  }

  switch (type) {
    case 'string':
      return getStringValidationFailures(value, validations, isRequired);
    case 'number':
      return getNumberValidationFailures(value, validations, isRequired);
    default:
      return [];
  }
}

function getStringValidationFailures(value, validations, isRequired) {
  if (!isString(value) && !isNull(value)) {
    return ['type'];
  }

  if (value === '' && isRequired) {
    return ['required'];
  }

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push('required');
  }
  if (!isValidMinLength(value, validations.minLength)) {
    failures.push('minLength');
  }
  if (!isValidMaxLength(value, validations.maxLength)) {
    failures.push('maxLength');
  }
  if (!isValidPattern(value, validations.pattern)) {
    failures.push('pattern');
  }
  if (!isValidMinimum(value, validations.minimum)) {
    failures.push('minimum');
  }
  if (!isValidMaximum(value, validations.maximum)) {
    failures.push('maximum');
  }
  return failures;
}

function getNumberValidationFailures(value, validations, isRequired) {
  if (!isNumber(value) && !isNull(value)) {
    return ['type'];
  }

  const failures = [];
  if (!isValidRequired(value, isRequired)) {
    failures.push('required');
  }
  if (!isValidMinimum(value, validations.minimum)) {
    failures.push('minimum');
  }
  if (!isValidMaximum(value, validations.maximum)) {
    failures.push('maximum');
  }
  return failures;
}

export { getValidationFailures, getStringValidationFailures, getNumberValidationFailures };

export default getValidationFailures;
