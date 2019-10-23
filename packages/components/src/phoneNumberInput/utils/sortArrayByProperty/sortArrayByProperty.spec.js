import { sortArrayByProperty } from './sortArrayByProperty';

const arrayToSort = [
  {
    iso3: 'BBB',
    phone: '+2',
  },
  {
    iso3: 'CCC',
    phone: '+1',
  },
  {
    iso3: 'AAA',
    phone: '+3',
  },
];

const arraySortedByISO3 = [
  {
    iso3: 'AAA',
    phone: '+3',
  },
  {
    iso3: 'BBB',
    phone: '+2',
  },
  {
    iso3: 'CCC',
    phone: '+1',
  },
];

const arraySortedByPhone = [
  {
    iso3: 'CCC',
    phone: '+1',
  },
  {
    iso3: 'BBB',
    phone: '+2',
  },
  {
    iso3: 'AAA',
    phone: '+3',
  },
];

describe('sortArrayByPropery', () => {
  it('should sort the array based on property phone', () => {
    expect(sortArrayByProperty(arrayToSort, 'phone')).toEqual(arraySortedByPhone);
  });

  it('should sort the array based on property iso3', () => {
    expect(sortArrayByProperty(arrayToSort, 'iso3')).toEqual(arraySortedByISO3);
  });
});
