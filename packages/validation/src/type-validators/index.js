const isString = (value) => typeof value === 'string';
const isNumber = (value) => typeof value === 'number' && !Number.isNaN(value);
const isInteger = (value) => {
  return isNumber(value) && Math.floor(value) === value;
};
const isBoolean = (value) => typeof value === 'boolean';

const isObject = (value) => !isNull(value) && !isUndefined(value) && value.constructor === Object;
const isArray = (value) => Array.isArray(value);
const isNull = (value) => value === null;
const isUndefined = (value) => typeof value === 'undefined';

export { isString, isNumber, isInteger, isBoolean, isObject, isArray, isNull, isUndefined };
