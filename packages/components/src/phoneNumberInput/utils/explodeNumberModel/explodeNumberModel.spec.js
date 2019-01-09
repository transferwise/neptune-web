import { explodeNumberModel } from './';

describe('explodeNumberModel', () => {
  describe('when a valid number is provided', () => {
    it('should return an exploded number', () => {
      expect(explodeNumberModel('+447573135343', 'EN')).toEqual({
        format: '**** *** ***',
        prefix: '+44',
        suffix: '7573135343',
      });
    });

    it('should return an exploded number', () => {
      expect(explodeNumberModel('+3727573135343', 'EST')).toEqual({
        format: '',
        prefix: '+372',
        suffix: '7573135343',
      });
    });
  });

  describe('when a Invalid number is provided', () => {
    it('should return a default exploded object', () => {
      expect(explodeNumberModel('3727573135343', 'EST')).toEqual({
        format: '',
        prefix: '+44',
        suffix: '',
      });
    });

    it('should return a default exploded object', () => {
      expect(explodeNumberModel('+9997573135343', 'EST')).toEqual({
        format: '',
        prefix: '',
        suffix: '9997573135343',
      });
    });
  });
});
