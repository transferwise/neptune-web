// NB! Using with UTC timestamp (YYYY-MM-DD) might lead to unexpected results, for example
// getStartOfDay(new Date('1995-01-01')) in Los Angeles returns 31 Dec 1994, but in
// in Singapore it is 1 Jan 1995.
// You might want to use/implement `getUTCStartOfDay` if you want it to be 1995 in any timezone
export function getStartOfDay(date) {
  if (!date) return null;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
