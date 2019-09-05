function isValidRequired(value, isRequired) {
  return !isRequired || typeof value !== 'undefined';
}

function isValidMinLength(value, minLength) {
  return typeof minLength === 'undefined' || (!!value && value.length >= minLength);
}

function isValidMaxLength(value, maxLength) {
  return typeof maxLength === 'undefined' || (!!value && value.length <= maxLength);
}

function isValidPattern(value, pattern) {
  try {
    const regex = new RegExp(pattern);
    return typeof value !== 'undefined' && !!regex.test(value);
  } catch (error) {
    return true;
  }
}

function isValidMax(value, max) {
  return typeof max === 'undefined' || (typeof value !== 'undefined' && value <= max);
}

function isValidMin(value, min) {
  return typeof min === 'undefined' || (typeof value !== 'undefined' && value >= min);
}

function isValidMinItems(value, minItems) {
  return !minItems || (!!value && value.length >= minItems);
}

function isValidMaxItems(value, maxItems) {
  return !maxItems || (!!value && value.length <= maxItems);
}

export {
  isValidRequired,
  isValidMinLength,
  isValidMaxLength,
  isValidPattern,
  isValidMax,
  isValidMin,
  isValidMinItems,
  isValidMaxItems,
};
