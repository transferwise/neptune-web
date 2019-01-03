import { getMidnight } from '..';

describe('getMidnight', () => {
  it('works for date created with long date string', () => {
    const date = getMidnight(new Date('December 17, 1995 03:24:00'));
    expect(getDatePartsArray(date)).toEqual([1995, 11, 17, 0, 0]);
  });

  it('works for date in format "YYYY-MM-DDTHH:SS:SS"', () => {
    const date = getMidnight(new Date('1995-12-17T03:24:00'));
    expect(getDatePartsArray(date)).toEqual([1995, 11, 17, 0, 0]);
  });

  it('works for date in format "YYYY-MM-DDTHH:SS:SS"', () => {
    const date = getMidnight(new Date('1995-01-01'));
    expect(getDatePartsArray(date)).toEqual([1995, 0, 1, 0, 0]);
  });

  it('works for date created with year, month', () => {
    const date = getMidnight(new Date(2018, 5));
    expect(getDatePartsArray(date)).toEqual([2018, 5, 1, 0, 0]);
  });

  it('works for date created with year, month, day, hours, minutes', () => {
    const date = getMidnight(new Date(2018, 11, 1, 23, 59));
    expect(getDatePartsArray(date)).toEqual([2018, 11, 1, 0, 0]);
  });

  it('returns null when no Date is provided', () => {
    expect(getMidnight()).toBeNull();
    expect(getMidnight(null)).toBeNull();
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
