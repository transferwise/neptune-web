import { longestMatchingPrefix } from '.';

describe('longestMatchingPrefix', () => {
  const matchingcodes = [
    {
      name: 'Some country',
      iso2: 'AB',
      iso3: 'ABC',
      phone: '+34',
    },
    {
      name: 'Some country with same ISO code',
      iso2: 'AB',
      iso3: 'ABC',
      phone: '+123',
    },
  ];
  it('should return a country with the longest matching prefix', () => {
    expect(longestMatchingPrefix(matchingcodes)).toEqual(matchingcodes[1]);
  });
});
