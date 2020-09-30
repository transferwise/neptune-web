import { startsWith, isOptionAndFitsQuery } from '.';

const DATA_TEST = [
  {
    name: 'test1',
    iso2: 'TT',
    iso3: 'TT1',
    phone: '+93',
  },
  {
    name: 'test1',
    iso2: ['TT', 'AA'],
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

    it('should return true if query is relevant and one of the array values', () => {
      expect(isOptionAndFitsQuery(DATA_TEST[1], 'TT')).toBe(true);
    });

    it('should return false if query is not relevant and not one of the array values', () => {
      expect(isOptionAndFitsQuery(DATA_TEST[1], 'BB')).toBe(false);
    });

    it('should return false if query is not relevant', () => {
      expect(isOptionAndFitsQuery(DATA_TEST[0], 'AA')).toBe(false);
    });
  });
});

describe('startWith', () => {
  describe('when property is given', () => {
    it('returns true if any of the values starts with the query', () => {
      expect(startsWith('AA', 'AA')).toBe(true);
    });

    it(`returns false if value doesn't start with`, () => {
      expect(startsWith('AABB', 'BB')).toBe(false);
    });

    it('should return true if query is contained in grouped options', () => {
      expect(startsWith(['AA', 'BB'], 'BB')).toBe(true);
    });

    it(`returns false if any value doesn't start with`, () => {
      expect(startsWith(['CCAA', 'CCBB'], 'BB')).toBe(false);
    });

    it(`returns false if any value doesn't start with`, () => {
      expect(startsWith('', 'BB')).toBe(false);
    });
  });
});
