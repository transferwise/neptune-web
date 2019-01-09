/**
 *
 * @param phoneNumber
 * @returns {boolean} - returns true for number that starts with '+' and contains a mix of digits and spaces with
 * at least 4 digits.
 */
export const isValidPhoneNumber = phoneNumber =>
  /^\+[\d-\s]+$/.test(phoneNumber) &&
  phoneNumber.match(/\d+/g) &&
  phoneNumber.match(/\d+/g).join('').length >= 4;
