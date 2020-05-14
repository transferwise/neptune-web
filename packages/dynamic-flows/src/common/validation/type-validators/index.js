function isString(value) {
  return typeof value === 'string';
}
function isNumber(value) {
  return typeof value === 'number';
}
function isInteger(value) {
  return isNumber(value) && Math.floor(value) === value;
}
function isBoolean(value) {
  return typeof value === 'boolean';
}
function isObject(value) {
  return !isNull(value) && typeof value !== 'undefined' && value.constructor === Object;
}
function isArray(value) {
  return Array.isArray(value);
}
function isNull(value) {
  return value === null;
}
function isUndefined(value) {
  return typeof value === 'undefined';
}

export { isString, isNumber, isInteger, isBoolean, isObject, isArray, isNull, isUndefined };
