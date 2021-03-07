import { validDateString } from '../isDateValid';

export const isMonthAndYearFormat = (dateString) =>
  validDateString(dateString) && dateString.split('-').length < 3;
