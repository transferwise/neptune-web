import { isMonthAndYearFormat } from '.';

describe('isDateValid', () => {
  it('should return false if day is provided ', () => {
    expect(isMonthAndYearFormat('1998-02-04')).toBe(false);
  });

  it('should return true if day is not provided ', () => {
    expect(isMonthAndYearFormat('1998-02')).toBe(true);
  });

  it('should return false if argument provided is not a string ', () => {
    expect(isMonthAndYearFormat([])).toBe(false);
  });
});
