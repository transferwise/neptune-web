import getSymbolsInPatternWithPosition from '../getSymbolsInPatternWithPosition';

const formatWithPattern = (value, pattern) => {
  if (!value || value === '') {
    return '';
  }

  const valueArray = value.toString().split('');

  const patternWithSymbolsPosition = getSymbolsInPatternWithPosition(pattern);

  let patternSymbol = [];
  // valueArray.length increments during the cycle cause we are adding new elements.
  for (let index = 0; index < valueArray.length; index += 1) {
    patternSymbol = patternWithSymbolsPosition.filter(symbol => symbol.index === index);
    // Add pattern's symbol at n position
    if (patternSymbol.length === 1) {
      valueArray.splice(index, 0, patternSymbol.pop().symbol);
    }
  }

  return valueArray.join('');
};

export default formatWithPattern;
