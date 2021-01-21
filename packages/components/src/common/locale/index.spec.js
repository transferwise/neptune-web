import { mapLocale } from '.';

describe('locale utils', () => {
  describe('mapLocale', () => {
    test.each([
      ['EN', 'en'],
      ['ES', 'es'],
      ['ZH-HK', 'zh-HK'],
      ['en_US', 'en'],
      ['en-US', 'en'],
      ['zh_HK', 'zh-HK'],
      ['zhHK', null],
      ['lol', null],
      [null, null],
      ['', null],
      ['  ', null],
    ])('with "%s" expect "%s"', (locale, expectedValue) => {
      expect(mapLocale(locale)).toBe(expectedValue);
    });
  });
});
