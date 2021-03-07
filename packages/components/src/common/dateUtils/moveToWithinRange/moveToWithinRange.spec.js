import { moveToWithinRange } from '..';

describe('moveToWithinRange', () => {
  it('returns the same date when no min and max', () => {
    const date = new Date();
    expect(moveToWithinRange(date)).toBe(date);
  });

  it('returns the same date when date is between min and max', () => {
    const date = new Date('1995-12-20');
    const min = new Date('1995-12-19');
    const max = new Date('1995-12-21');
    expect(moveToWithinRange(date, min, max)).toBe(date);
  });

  it('returns the same date when date is the same as min and max', () => {
    const date = new Date('1995-12-20');
    const min = new Date('1995-12-20');
    const max = new Date('1995-12-20');
    expect(moveToWithinRange(date, min, max)).toBe(date);
  });

  it('returns min when min > date', () => {
    const date = new Date('1995-12-20');
    const min = new Date('1995-12-21');
    const max = new Date('1995-12-22');
    expect(+moveToWithinRange(date, min, max)).toBe(+min);
  });

  it('returns max when date > max', () => {
    const date = new Date('1995-12-23');
    const min = new Date('1995-12-20');
    const max = new Date('1995-12-22');
    expect(+moveToWithinRange(date, min, max)).toBe(+max);
  });
});
