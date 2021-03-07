import { formatDate } from '@transferwise/formatting';

export function getDayNames(locale, format = 'short') {
  const days = [];
  const date = new Date(2018, 0, 1); // 2018 started with Monday
  while (days.length < 7) {
    days.push(formatDate(date, locale, { weekday: format }));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
