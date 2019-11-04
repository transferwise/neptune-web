import { formatUsingPattern } from './text-format';

describe('TextFormat, ', () => {
  let pattern;
  let value;

  describe('Given there is a pattern', () => {
    describe('for numeric string', () => {
      beforeEach(() => {
        pattern = '** - ** - **';
        value = '123456';
      });

      it('should format the value', () => {
        expect(formatUsingPattern(value, pattern)).toBe('12 - 34 - 56');
      });
    });
  });

  describe('Given there are multiple patterns', () => {
    describe('for string', () => {
      beforeEach(() => {
        pattern = '** - **||**-**-**';
        value = 'ABCDEF';
      });

      it('should use the first option', () => {
        expect(formatUsingPattern(value, pattern)).toBe('AB - CDEF');
      });
    });
  });

  describe('When no pattern supplied', () => {
    beforeEach(() => {
      pattern = '';
      value = '123456';
    });

    it('should leave the value unaltered', () => {
      expect(formatUsingPattern(value, pattern)).toBe('123456');
    });
  });
});
