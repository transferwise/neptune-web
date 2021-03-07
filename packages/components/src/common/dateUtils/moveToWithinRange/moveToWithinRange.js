import { isWithinRange } from '../isWithinRange';

// Makes sure that date is between min and max dates, returns a cloned min or max
export function moveToWithinRange(date, min, max) {
  return isWithinRange(date, min, max) ? date : new Date(min && date < min ? +min : +max);
}
