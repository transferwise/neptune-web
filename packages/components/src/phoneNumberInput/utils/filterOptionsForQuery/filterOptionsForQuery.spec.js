import { filterOptionsForQuery } from '../';

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

describe('filterOptionsForQuery', () => {
  describe('when options are given', () => {
    it('should return some if query is relevant', () => {
      expect(filterOptionsForQuery(DATA_TEST, 'TT')).toEqual([DATA_TEST[0]]);
    });

    it('should return some if query is relevant', () => {
      expect(filterOptionsForQuery(DATA_TEST, 'SMT')).toEqual([DATA_TEST[1]]);
    });

    it('should return all options if query is not relevant', () => {
      expect(filterOptionsForQuery(DATA_TEST, 'AA')).toEqual([]);
    });
  });
});
