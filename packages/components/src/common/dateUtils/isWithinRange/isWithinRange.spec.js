import { isWithinRange } from '..';

describe('isWithinRange', () => {
  it('returns true when no dates are provided', () => {
    expect(isWithinRange()).toBe(true);
  });

  it('returns true when no min and max', () => {
    expect(isWithinRange(new Date())).toBe(true);
  });

  it('returns true when date is between min and max', () => {
    const date = new Date('1995-12-20');
    const min = new Date('1995-12-19');
    const max = new Date('1995-12-21');
    expect(isWithinRange(date, min, max)).toBe(true);
  });

  it('returns true when date is the same as min and max', () => {
    const date = new Date('1995-12-20');
    const min = new Date('1995-12-20');
    const max = new Date('1995-12-20');
    expect(isWithinRange(date, min, max)).toBe(true);
  });

  it('returns false when min > date', () => {
    const date = new Date('1995-12-20');
    const min = new Date('1995-12-21');
    const max = new Date('1995-12-22');
    expect(isWithinRange(date, min)).toBe(false);
    expect(isWithinRange(date, min, max)).toBe(false);
  });

  it('returns false when date > max', () => {
    const date = new Date('1995-12-23');
    const min = new Date('1995-12-20');
    const max = new Date('1995-12-22');
    expect(isWithinRange(date, null, max)).toBe(false);
    expect(isWithinRange(date, min, max)).toBe(false);
  });
});
