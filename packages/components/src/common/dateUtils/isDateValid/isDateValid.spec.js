import { isDateValid } from '.';

describe('isDateValid', () => {
  it('should return false for invalid format ', () => {
    expect(isDateValid('1998-02-044')).toBe(false);
  });

  it('should return true for valid format ', () => {
    expect(isDateValid(new Date('1995-12-17T03:24:00'))).toBe(true);
  });
});
