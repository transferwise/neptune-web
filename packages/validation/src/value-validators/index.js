import { isString, isObject, isArray } from '../type-validators';

/**
 * Checks empty values for arrays,objects and strings.
 * @param {object|array|string} value
 */
const isEmpty = (value) =>
  (isString(value) && value.length === 0) ||
  ((isObject(value) || isArray(value)) && Object.keys(value).length === 0);

export { isEmpty };
