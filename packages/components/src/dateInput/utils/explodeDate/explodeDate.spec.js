import { explodeDate } from './';

describe('explodeDate', () => {
  it('returns exploded model for valid format ', () => {
    expect(explodeDate(new Date('1995-12-17T03:24:00'))).toEqual({
      day: 17,
      month: 11,
      year: 1995,
    });
  });
});
