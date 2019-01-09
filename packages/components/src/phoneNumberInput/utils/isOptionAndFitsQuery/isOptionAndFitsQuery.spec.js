import { contains, isOptionAndFitsQuery } from '../';

const DATA_TEST = [
  {
    name: 'test1',
    iso2: 'TT',
    iso3: 'TT1',
    phone: '+93',
  },
  {
    name: 'something',
    iso2: 'ST',
    iso3: 'SMT',
    phone: '+33',
  },
];

describe('isOptionAndFitsQuery', () => {
  describe('when option is given', () => {
    it('should return true if query is relevant', () => {
      expect(isOptionAndFitsQuery(DATA_TEST[0], 'TT')).toBe(true);
    });

    it('should return false if query is relevant', () => {
      expect(isOptionAndFitsQuery(DATA_TEST[0], 'AA')).toBe(false);
    });
  });
});

describe('contains', () => {
  describe('when property is given', () => {
    it('should return true if query is contained', () => {
      expect(contains(DATA_TEST[0].iso2, 'TT')).toBe(true);
    });

    it('should return false if query is not contained', () => {
      expect(contains(DATA_TEST[0].iso2, 'AA')).toBe(false);
    });

    it('should return true if query lowercase is contained', () => {
      expect(contains(DATA_TEST[0].iso2, 'tt')).toBe(true);
    });
  });
});
