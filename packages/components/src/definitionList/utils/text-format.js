/* eslint-disable no-plusplus */

const formatUsingPattern = (value = '', pattern) => {
  if (typeof pattern !== 'string') {
    return value;
  }

  let newPattern = pattern;

  if (newPattern.indexOf('||') > 0) {
    newPattern = newPattern.substring(0, pattern.indexOf('||'));
  }

  let newValue = '';
  let separators = 0;
  let charactersToAllocate = value.length;
  let position = 0;

  while (charactersToAllocate) {
    if (positionIsSeparator(newPattern, position)) {
      newValue += newPattern[position];
      separators++;
    } else {
      newValue += value[position - separators];
      charactersToAllocate--;
    }
    position++;
  }

  const separatorsAfterCursor = countSeparatorsAfterCursor(newPattern, position);
  if (separatorsAfterCursor) {
    newValue += newPattern.substr(position, separatorsAfterCursor);
  }
  return newValue;
};

const countSeparatorsAfterCursor = (newPattern, position) => {
  let separators = 0;
  while (positionIsSeparator(newPattern, position + separators)) {
    separators++;
  }
  return separators;
};

const positionIsSeparator = (newPattern, position) =>
  newPattern[position] && newPattern[position] !== '*';

export { formatUsingPattern };
