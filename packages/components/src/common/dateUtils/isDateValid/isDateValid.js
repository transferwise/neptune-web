export const isDateValid = (date) => validDateObject(date) || validDateString(date);

export const validDateString = (dateString) =>
  typeof dateString === 'string' && validDateObject(new Date(dateString));

const validDateObject = (dateObj) => dateObj instanceof Date && !isNaN(dateObj); // eslint-disable-line no-restricted-globals
