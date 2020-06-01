import { isString, isNumber, isArray, isUndefined } from '../type-validators';

function isValidRequired(value, isRequired) {
  return !isRequired || !isUndefined(value);
}

function isValidMinLength(value, minLength) {
  return !isNumber(minLength) || (isString(value) && value.length >= minLength);
}

function isValidMaxLength(value, maxLength) {
  return !isNumber(maxLength) || (isString(value) && value.length <= maxLength);
}

function isValidPattern(value, pattern) {
  try {
    const regex = new RegExp(pattern);
    return typeof value !== 'undefined' && !!regex.test(value);
  } catch (error) {
    return true;
  }
}

function isValidMaximum(value, maximum) {
  return (
    (!isNumber(maximum) && !isString(maximum)) ||
    ((isNumber(value) || isString(value)) && value <= maximum)
  );
}

function isValidMinimum(value, minimum) {
  return (
    (!isNumber(minimum) && !isString(minimum)) ||
    ((isNumber(value) || isString(value)) && value >= minimum)
  );
}

function isValidMinItems(value, minItems) {
  return !isNumber(minItems) || (isArray(value) && value.length >= minItems);
}

function isValidMaxItems(value, maxItems) {
  return !isNumber(maxItems) || (isArray(value) && value.length <= maxItems);
}

export {
  isValidRequired,
  isValidMinLength,
  isValidMaxLength,
  isValidPattern,
  isValidMaximum,
  isValidMinimum,
  isValidMinItems,
  isValidMaxItems,
};
