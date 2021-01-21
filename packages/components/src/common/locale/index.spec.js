import { mapLocale, LOCALES } from '.';
import translationFiles from '../../../i18n';

describe('locale utils', () => {
  describe('mapLocale', () => {
    test.each([
      ['en', 'en-GB'],
      ['EN', 'en-GB'],
      ['en-GB', 'en-GB'],
      ['en_GB', 'en-GB'],
      ['ES', 'es'],
      ['ZH-HK', 'zh-HK'],
      ['en_US', 'en-US'],
      ['en-US', 'en-US'],
      ['zh_HK', 'zh-HK'],
      ['ja-JP', 'ja'],
      ['zhHK', null],
      ['lol', null],
      [null, null],
      ['', null],
      ['  ', null],
    ])('with "%s" expect "%s"', (locale, expectedValue) => {
      expect(mapLocale(locale)).toBe(expectedValue);
    });
  });

  describe('locales', () => {
    it('number of locale codes should be equal to number of translations files', () => {
      expect(LOCALES.length).toBe(Object.keys(translationFiles).length);
    });

    it('locale codes should match to names of translations object', () => {
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const property in translationFiles) {
        const result = LOCALES.includes(property);
        if (!result) {
          // eslint-disable-next-line no-console
          console.log(`'${property}' doesn't exist in LOCALES`);
        }
        expect(result).toBe(true);
      }
    });

    it('locale codes should match with names of translations files', async () => {
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (let i = 0; i < LOCALES.length; i += 1) {
        const locale = LOCALES[i];
        // eslint-disable-next-line no-await-in-loop
        const file = await import(`../../../i18n/${locale}.json`);
        expect(file).not.toBe(null);
      }
    });
  });
});
