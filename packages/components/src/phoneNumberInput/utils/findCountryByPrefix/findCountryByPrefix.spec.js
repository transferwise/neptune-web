import { findCountryByPrefix } from './';

describe('findCountryByPrefix', () => {
  it('should return a country with the longest matching prefix', () => {
    expect(findCountryByPrefix('+1')).toEqual({
      iso2: 'US',
      iso3: 'USA',
      name: 'United States of America',
      phone: '+1',
    });
  });

  it('should return null for invalid code', () => {
    expect(findCountryByPrefix('Wrong')).toBeNull();
  });
});
