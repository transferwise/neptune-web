const DIGITS_MATCH = /^$|^(\+)|([\d]+)/g;

export const cleanNumber = number =>
  (number.match(DIGITS_MATCH) && number.match(DIGITS_MATCH).join('')) || '';
