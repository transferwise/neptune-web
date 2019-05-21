const unformatWithPattern = (value, pattern) => {
  let valueArray = [''];
  if (value && value.length) {
    valueArray = value.toString().split('');
    valueArray = valueArray.filter(el => getSymbolsInPattern(pattern).indexOf(el) === -1);
  }

  return valueArray.join('');
};

const getSymbolsInPattern = pattern => pattern.split('').filter(symbol => symbol !== '*');

export default unformatWithPattern;
