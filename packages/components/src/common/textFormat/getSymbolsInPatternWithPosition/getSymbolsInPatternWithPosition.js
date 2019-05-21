const getSymbolsInPatternWithPosition = pattern => {
  const patternWithSymbolsPosition = [];
  const patternArray = pattern.split('');
  patternArray.forEach((symbol, index) => {
    if (symbol !== '*') {
      patternWithSymbolsPosition.push({ index, symbol });
    }
  });

  return patternWithSymbolsPosition;
};

export default getSymbolsInPatternWithPosition;
