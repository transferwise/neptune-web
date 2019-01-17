export const isDateValid = date => validDateObject(date) || validDateString(date);

const validDateObject = dateObj => dateObj instanceof Date && !isNaN(dateObj); // eslint-disable-line no-restricted-globals

const validDateString = dateString =>
  typeof dateString === 'string' && validDateObject(new Date(dateString));
