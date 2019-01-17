import { formatDate } from '@transferwise/formatting';

export const getMonthNames = (locale, format = 'long') => {
  const months = [];
  const date = new Date(2018, 0, 1);
  const monthFormat = { month: format };
  while (months.length < 12) {
    months.push(formatDate(date, locale, monthFormat));
    date.setMonth(date.getMonth() + 1);
  }

  return months;
};
