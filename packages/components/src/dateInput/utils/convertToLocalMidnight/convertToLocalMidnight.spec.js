import { convertToLocalMidnight } from './';

describe('convertToObjectDate.spec', () => {
  it('returns utc date for valid ISO long format ', () => {
    const date = '2019-03-30T23:00:00.000';
    expect(convertToLocalMidnight(date)).toEqual(new Date(2019, 2, 30));
  });

  it('returns utc date for valid Iso shortformat ', () => {
    const date = '1995-12-17';
    expect(convertToLocalMidnight(date)).toEqual(new Date(1995, 11, 17));
  });

  it('returns utc date for valid format (last day) ', () => {
    const date = '2019-06-30';
    expect(convertToLocalMidnight(date)).toEqual(new Date(2019, 5, 30));
  });

  it('returns utc date for valid format (first day)', () => {
    const date = '1995-12-01';
    expect(convertToLocalMidnight(date)).toEqual(new Date(1995, 11, 1));
  });
});
