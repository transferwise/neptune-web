import getSymbolsInPatternWithPosition from '../getSymbolsInPatternWithPosition';

const getCountOfSymbolsInSelection = (selectionStart, selectionEnd, pattern) =>
  getSymbolsInPatternWithPosition(pattern).filter(
    symbol => symbol.index >= selectionStart && symbol.index < selectionEnd,
  ).length;

export default getCountOfSymbolsInSelection;
