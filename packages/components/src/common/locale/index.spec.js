import { mapLocaleToLanguage, adjustLocale, localeService, SUPPORTED_LANGUAGES } from '.';
import translationFiles from '../../../i18n';

describe('locale utils', () => {
  describe('mapLocaleToLanguage', () => {
    test.each([
      ['en-GB', 'en'],
      ['en_GB', 'en'],
      ['EN-GB', 'en'],
      ['en-gb', 'en'],
      ['en_US', 'en'],
      ['en-US', 'en'],
      ['ES', 'es'],
      ['ZH-HK', 'zh'],
      ['ZH_HK', 'zh'],
      ['zh_HK', 'zh'],
      ['ja-JP', 'ja'],
      ['zhHK', null],
      [null, null],
      [undefined, null],
      ['', null],
      ['  ', null],
      ['ar-dz', null],
      ['ar-iq', null],
      ['zh-tw', 'zh'],
      ['nl-nl', null],
    ])('locale "%s" -> language "%s"', (locale, expectedValue) => {
      expect(mapLocaleToLanguage(locale)).toBe(expectedValue);
    });
  });

  describe('adjustLocale', () => {
    test.each([
      ['en-GB', 'en-GB'],
      ['en_GB', 'en-GB'],
      ['EN-GB', 'en-GB'],
      ['en-gb', 'en-GB'],
      ['en_US', 'en-US'],
      ['en-US', 'en-US'],
      ['ES', 'es'],
      ['ZH-HK', 'zh-HK'],
      ['ZH_HK', 'zh-HK'],
      ['zh_HK', 'zh-HK'],
      ['ja-JP', 'ja-JP'],
      ['zhHK', null],
      [null, null],
      [undefined, null],
      ['', null],
      ['  ', null],
      ['ar-dz', 'ar-DZ'],
      ['ar-iq', 'ar-IQ'],
      ['zh-tw', 'zh-TW'],
      ['nl-nl', 'nl-NL'],
    ])('locale "%s" -> language "%s"', (locale, expectedValue) => {
      expect(adjustLocale(locale)).toBe(expectedValue);
    });
  });

  describe('contract between SUPPORTED_LANGUAGES and names of translations files', () => {
    it('number of lang codes should be equal to number of translations files', () => {
      expect(SUPPORTED_LANGUAGES.length).toBe(Object.keys(translationFiles).length);
    });

    it('lang codes should match to names of translations object', () => {
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const property in translationFiles) {
        const result = SUPPORTED_LANGUAGES.includes(property);
        if (!result) {
          // eslint-disable-next-line no-console
          console.log(`'${property}' doesn't exist in ${[SUPPORTED_LANGUAGES]}`);
        }
        expect(result).toBe(true);
      }
    });

    it('lang codes should match with names of translations files', async () => {
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (let i = 0; i < SUPPORTED_LANGUAGES.length; i += 1) {
        const locale = SUPPORTED_LANGUAGES[i];
        // eslint-disable-next-line no-await-in-loop
        const file = await import(`../../../i18n/${locale}.json`);
        expect(file).not.toBe(null);
      }
    });
  });

  describe('localeService', () => {
    it('given a valid locale it should return the correct value', () => {
      expect(localeService.getCountryFromLocale('es-ES')).toBe('es');
    });
    it('given an invalid locale it should return false', () => {
      expect(localeService.getCountryFromLocale('es_ES')).toBe(null);
    });
    it('given an invalid locale it should return false', () => {
      expect(localeService.getCountryFromLocale('es_E')).toBe(null);
    });
    it('given an invalid locale it should return false', () => {
      expect(localeService.getCountryFromLocale('es-E')).toBe(null);
    });
  });
});
