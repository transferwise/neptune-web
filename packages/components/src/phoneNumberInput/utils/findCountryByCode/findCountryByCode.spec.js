import { findCountryByCode } from '.';

describe('findCountryByCode', () => {
  it('should return a country with the longest matching prefix', () => {
    const testCountry = {
      iso2: 'AQ',
      iso3: 'ATA',
      name: 'Australian Antarctic Territory',
      phone: '+672',
    };
    expect(findCountryByCode('AQ')).toEqual(testCountry);
    expect(findCountryByCode('aq')).toEqual(testCountry);
  });

  it('should return null for invalid code', () => {
    expect(findCountryByCode('Wrong')).toBeNull();
    expect(findCountryByCode(null)).toBeNull();
    expect(findCountryByCode('')).toBeNull();
    expect(findCountryByCode('  ')).toBeNull();
  });
});
