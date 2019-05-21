import getSymbolsInPatternWithPosition from '../getSymbolsInPatternWithPosition';

export const getDistanceToNextSymbol = (selectionStart, pattern) => {
  const patternArray = getSymbolsInPatternWithPosition(pattern);
  const applicablePattern = patternArray.filter(symbol => symbol.index >= selectionStart);
  return countConsecutiveSymbols(selectionStart, applicablePattern, 'left');
};

export const getDistanceToPreviousSymbol = (selectionStart, pattern) => {
  const patternArray = getSymbolsInPatternWithPosition(pattern);
  const applicablePattern = patternArray.filter(symbol => symbol.index < selectionStart).reverse();
  return countConsecutiveSymbols(selectionStart, applicablePattern, 'right');
};

const countConsecutiveSymbols = (selectionStart, applicablePattern, direction) => {
  let cursor = selectionStart;
  let groupSize;

  for (groupSize = 0; groupSize < applicablePattern.length; groupSize += 1) {
    const condition = direction === 'left' ? cursor : cursor - 1;
    if (applicablePattern[groupSize].index === condition) {
      cursor = direction === 'left' ? cursor + 1 : cursor - 1;
    } else {
      // Exit if not consecutive.
      break;
    }
  }
  return groupSize;
};
