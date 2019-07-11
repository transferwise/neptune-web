import { getDistanceToNextSymbol, getDistanceToPreviousSymbol } from './getDistanceToSymbol';

const testsGetDistanceToNextSymbol = [
  { selectionStart: 0, pattern: '**-**-**', expectedValue: 0, direction: 'default' },
  { selectionStart: 2, pattern: '**-**-**', expectedValue: 1, direction: 'default' },
  { selectionStart: 5, pattern: '**-**-**', expectedValue: 1, direction: 'default' },
  { selectionStart: 0, pattern: '+(**)', expectedValue: 2, direction: 'default' },
  { selectionStart: 0, pattern: '+(---***)', expectedValue: 5, direction: 'default' },
  { selectionStart: 1, pattern: '+(---***)', expectedValue: 4, direction: 'default' },
];

const testsGetDistanceToPreviousSymbol = [
  { selectionStart: 1, pattern: '+(---***)', expectedValue: 1, direction: 'reverse' },
  { selectionStart: 2, pattern: '+(---***)', expectedValue: 2, direction: 'reverse' },
  { selectionStart: 3, pattern: '+(---***)', expectedValue: 3, direction: 'reverse' },
];

describe('getDistanceToNextSymbol', () => {
  testsGetDistanceToNextSymbol.forEach(test => {
    it(`returns ${test.expectedValue} for current cursor ${test.selectionStart} if pattern is ${test.pattern} and direction ${test.direction}`, () => {
      expect(getDistanceToNextSymbol(test.selectionStart, test.pattern)).toEqual(
        test.expectedValue,
      );
    });
  });
});

describe('testsGetDistanceToPreviousSymbol', () => {
  testsGetDistanceToPreviousSymbol.forEach(test => {
    it(`returns ${test.expectedValue} for current cursor ${test.selectionStart} if pattern is ${test.pattern} and direction ${test.direction}`, () => {
      expect(
        getDistanceToPreviousSymbol(test.selectionStart, test.pattern, test.direction),
      ).toEqual(test.expectedValue);
    });
  });
});
