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
  return value.constructor === Object;
}
function isArray(value) {
  return Array.isArray(value);
}

export { isString, isNumber, isInteger, isBoolean, isObject, isArray };
