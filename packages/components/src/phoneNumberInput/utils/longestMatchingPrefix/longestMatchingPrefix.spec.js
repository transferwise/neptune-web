import { longestMatchingPrefix } from './';

describe('longestMatchingPrefix', () => {
  const matchingcodes = [
    {
      name: 'Australia',
      iso2: 'AU',
      iso3: 'AUS',
      phone: '+61',
    },
    {
      name: 'Australian External Territories',
      iso2: 'AU',
      iso3: 'AUS',
      phone: '+672',
    },
  ];
  it('should return a country with the longest matching prefix', () => {
    expect(longestMatchingPrefix(matchingcodes)).toEqual(matchingcodes[1]);
  });
});
