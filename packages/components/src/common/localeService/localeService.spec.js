import localeService from './';

describe('localeService', () => {
  it('given a valid locale it should return the correct value', () => {
    expect(localeService.getCountryFromLocale('es-ES')).toBe('ES');
  });
  it('given an invalid locale it should return false', () => {
    expect(localeService.getCountryFromLocale('es_ES')).toBe(false);
  });
  it('given an invalid locale it should return false', () => {
    expect(localeService.getCountryFromLocale('es_E')).toBe(false);
  });
  it('given an invalid locale it should return false', () => {
    expect(localeService.getCountryFromLocale('es-E')).toBe(false);
  });
});
