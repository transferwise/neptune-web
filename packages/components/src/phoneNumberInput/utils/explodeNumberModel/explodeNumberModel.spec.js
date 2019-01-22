import { explodeNumberModel } from './';

describe('explodeNumberModel', () => {
  describe('when a valid number is provided', () => {
    it('should return an exploded number', () => {
      expect(explodeNumberModel('+447573135343')).toEqual({
        format: '**** *** ***',
        prefix: '+44',
        suffix: '7573135343',
      });
    });

    it('should return an exploded number', () => {
      expect(explodeNumberModel('+3727573135343')).toEqual({
        format: '',
        prefix: '+372',
        suffix: '7573135343',
      });
    });
  });
});
