import { findCountryByCode } from './';

describe('findCountryByCode', () => {
  it('should return a country with the longest matching prefix', () => {
    expect(findCountryByCode('AU')).toEqual({
      iso2: 'AU',
      iso3: 'AUS',
      name: 'Australian External Territories',
      phone: '+672',
    });
  });

  it('should return null for invalid code', () => {
    expect(findCountryByCode('Wrong')).toBeNull();
  });
});
