import { getAsyncUrl } from './url';

describe('async url', () => {
  const baseUrl = 'http://foo/bar';

  describe('given absolute url', () => {
    it('should return url as is', () => {
      const result = getAsyncUrl('http://absolute.url', baseUrl);

      expect(result).toBe('http://absolute.url');
    });
  });

  describe('given path', () => {
    it('should prepend the baseUrl', () => {
      const result = getAsyncUrl('/relative/url', baseUrl);

      expect(result).toBe('http://foo/bar/relative/url');
    });
  });
});
