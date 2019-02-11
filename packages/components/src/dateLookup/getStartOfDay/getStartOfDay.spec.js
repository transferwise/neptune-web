import { getStartOfDay } from '.';

describe('getStartOfDay', () => {
  it('works for date created with long date string', () => {
    const date = getStartOfDay(new Date('December 17, 1995 03:24:00'));
    expect(getDatePartsArray(date)).toEqual([1995, 11, 17, 0, 0]);
  });

  it('works for date in format "YYYY-MM-DDTHH:SS:SS"', () => {
    const date = getStartOfDay(new Date('1995-12-17T03:24:00'));
    expect(getDatePartsArray(date)).toEqual([1995, 11, 17, 0, 0]);
  });

  it('works for date in format "YYYY-MM-DD"', () => {
    // NB! YYYY-MM-DD is treated as UTC in JS Dates, this means that depending on your timezone
    // "local" value of the input is either 31 Dec 1994 (Los Angeles) or 1 Jan 1995 (Singapore)
    const input = new Date('1995-01-01');
    const output = getStartOfDay(input);
    // because of the reasons in the comment above we can only check that getStartOfTheDay didn't
    // change the year/month/date, but not against static values
    expect(output.getFullYear()).toBe(input.getFullYear());
    expect(output.getMonth()).toBe(input.getMonth());
    expect(output.getDate()).toBe(input.getDate());
    expect(output.getHours()).toBe(0);
    expect(output.getMinutes()).toBe(0);
  });

  it('works for date created with year, month', () => {
    const date = getStartOfDay(new Date(2018, 5));
    expect(getDatePartsArray(date)).toEqual([2018, 5, 1, 0, 0]);
  });

  it('works for date created with year, month, day, hours, minutes', () => {
    const date = getStartOfDay(new Date(2018, 11, 1, 23, 59));
    expect(getDatePartsArray(date)).toEqual([2018, 11, 1, 0, 0]);
  });

  it('returns null when no Date is provided', () => {
    expect(getStartOfDay()).toBeNull();
    expect(getStartOfDay(null)).toBeNull();
  });

  function getDatePartsArray(date) {
    return [
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
    ];
  }
});
