import countries from './countries';

describe('Given a list of countries', () => {
  countries.forEach(country => {
    it('each country should have a valid format', () => {
      expect(country).toHaveProperty('phone');
      expect(country).toHaveProperty('name');
      expect(country).toHaveProperty('iso3');
      expect(country).toHaveProperty('iso2');
    });
  });
});
