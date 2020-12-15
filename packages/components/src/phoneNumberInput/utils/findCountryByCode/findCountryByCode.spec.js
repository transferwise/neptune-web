import { findCountryByCode } from '.';

describe('findCountryByCode', () => {
  it('should return a country with the longest matching prefix', () => {
    expect(findCountryByCode('AQ')).toEqual({
      iso2: 'AQ',
      iso3: 'ATA',
      name: 'Australian Antarctic Territory',
      phone: '+672',
    });
  });

  it('should return null for invalid code', () => {
    expect(findCountryByCode('Wrong')).toBeNull();
  });
});
