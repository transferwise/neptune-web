import { getDistanceToNextSymbol, getDistanceToPreviousSymbol } from '../getDistanceToSymbol';
import getCountOfSymbolsInSelection from '../getCountOfSymbolsInSelection';

const getCursorPositionAfteractionstroke = (
  action,
  selectionStart,
  selectionEnd,
  pattern,
  pastedLength,
) => {
  let cursorPosition = selectionStart;

  switch (action) {
    case 'Backspace':
      // If not multiple delete.
      if (selectionStart === selectionEnd) {
        cursorPosition -= getDistanceToPreviousSymbol(selectionStart, pattern);
        cursorPosition = cursorPosition > 0 ? cursorPosition - 1 : 0;
      }
      break;

    case 'Paste':
      cursorPosition +=
        pastedLength +
        getCountOfSymbolsInSelection(selectionStart, selectionStart + pastedLength, pattern) +
        getDistanceToNextSymbol(selectionStart + pastedLength, pattern);
      break;

    case 'Cut':
    case 'Delete':
      break;

    default:
      cursorPosition += 1 + getDistanceToNextSymbol(selectionStart, pattern);
      break;
  }

  return cursorPosition;
};

export default getCursorPositionAfteractionstroke;
