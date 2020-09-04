import { isString, isObject, isArray } from '../type-validators';

const isEmpty = (value) =>
  (isString(value) && value.length === 0) ||
  ((isObject(value) || isArray(value)) && Object.keys(value).length === 0);

export { isEmpty };
