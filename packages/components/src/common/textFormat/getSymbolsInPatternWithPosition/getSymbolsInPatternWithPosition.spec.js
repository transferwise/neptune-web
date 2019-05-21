import getSymbolsInPatternWithPosition from './getSymbolsInPatternWithPosition';

describe('getPatternWitPosition', () => {
  it('returns pattern symbol with original index', () => {
    const pattern = '**/** **@';
    const expectedPatternSymbolsPosition = [
      { index: 2, symbol: '/' },
      { index: 5, symbol: ' ' },
      { index: 8, symbol: '@' },
    ];
    expect(getSymbolsInPatternWithPosition(pattern)).toEqual(expectedPatternSymbolsPosition);
  });
});
