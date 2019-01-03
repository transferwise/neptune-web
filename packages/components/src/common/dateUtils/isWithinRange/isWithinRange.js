export function isWithinRange(date, min, max) {
  return !date || ((!min || date >= min) && (!max || date <= max));
}
