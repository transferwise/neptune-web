import getCountOfSymbolsInSelection from './getCountOfSymbolsInSelection';

const tests = [
  {
    selectionStart: 0,
    selectionEnd: 2,
    pattern: '**-**-**',
    expectedValue: 0,
  },
  {
    selectionStart: 0,
    selectionEnd: 3,
    pattern: '**-**-**',
    expectedValue: 1,
  },
  {
    selectionStart: 2,
    selectionEnd: 6,
    pattern: '**-**-**',
    expectedValue: 2,
  },
  {
    selectionStart: 0,
    selectionEnd: 6,
    pattern: '+(**) **',
    expectedValue: 4,
  },
  {
    selectionStart: 2,
    selectionEnd: 6,
    pattern: '**--*-**',
    expectedValue: 3,
  },
  {
    selectionStart: 3,
    selectionEnd: 5,
    pattern: '+(**) ',
    expectedValue: 1,
  },
];

describe('getCountOfSymbolsInSelection', () => {
  tests.forEach(test => {
    const { selectionStart, selectionEnd, pattern, expectedValue } = test;
    it(`returns ${expectedValue} symbols between ${selectionStart} and ${selectionEnd} for pattern ${pattern} `, () => {
      expect(getCountOfSymbolsInSelection(selectionStart, selectionEnd, pattern)).toEqual(
        expectedValue,
      );
    });
  });
});
