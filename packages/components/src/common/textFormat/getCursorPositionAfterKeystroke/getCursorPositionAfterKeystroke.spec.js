import getCursorPositionAfterKeystroke from './getCursorPositionAfterKeystroke';

const tests = [
  // Add.
  {
    testMessage: 'Add: When add 1 element from position 0 it returns cursor in position 1',
    key: '@',
    selectionStart: 0,
    expectedValue: 1,
    pattern: '**-**-**',
  },
  {
    testMessage: 'Add: When add 1 element from position 1 it returns cursor in position 2',
    key: '@',
    selectionStart: 1,
    expectedValue: 2,
    pattern: '**-**-**',
  },
  {
    testMessage: 'Add: When add 1 element from position 2 it returns cursor in position 3',
    key: '@',
    selectionStart: 2,
    expectedValue: 4,
    pattern: '**-**-**',
  },
  {
    testMessage: 'Add: When add 1 element from position 1 it returns cursor in position 2',
    key: '@',
    selectionStart: 1,
    expectedValue: 2,
    pattern: '**-**-**',
  },
  // Cut.
  {
    testMessage: 'Cut: When cut from position 2 it returns cursors | in position 2',
    key: 'Cut',
    selectionStart: 2,
    expectedValue: 2,
    pattern: '**-**-**',
  },
  // Paste.
  {
    testMessage: `Paste: When paste @@ from position 0 it returns cursors | in position 2`,
    key: 'Paste',
    selectionStart: 0,
    expectedValue: 4,
    pattern: '+(**) **',
    pastedLength: 2,
  },
  {
    testMessage: `Paste: When paste @@ from position 1 it returns cursors | in position 3`,
    key: 'Paste',
    selectionStart: 1,
    expectedValue: 4,
    pattern: '**-**-',
    pastedLength: 2,
  },
  {
    testMessage: `Paste: When paste @@ from position 8 it returns cursors | in position 6`,
    key: 'Paste',
    selectionStart: 8,
    expectedValue: 10,
    pattern: '+(**) **',
    pastedLength: 2,
  },
  // BackSpace.
  {
    testMessage:
      'Backspace: After char has been deleted from position 2 it returns cursors | in position 1',
    key: 'Backspace',
    selectionStart: 2,
    selectionEnd: 2,
    expectedValue: 1,
    pattern: '**-**-**',
  },
  {
    testMessage:
      'Backspace: After char has been deleted from position 4 it returns cursors | in position 3',
    key: 'Backspace',
    selectionStart: 4,
    selectionEnd: 4,
    expectedValue: 3,
    pattern: '**-**-**',
  },
  {
    testMessage:
      'Backspace: After char has been deleted from position 8 it returns cursors | in position 8',
    key: 'Backspace',
    selectionStart: 7,
    selectionEnd: 7,
    expectedValue: 6,
    pattern: '+(**) *',
  },
  {
    testMessage:
      'Backspace: After char has been deleted from position 8 it returns cursors | in position 1',
    key: 'Backspace',
    selectionStart: 8,
    selectionEnd: 8,
    expectedValue: 7,
    pattern: '+(**) **',
  },
  {
    testMessage:
      'Backspace: After char has been deleted from position 4 it returns cursors | in position 3',
    key: 'Backspace',
    selectionStart: 3,
    selectionEnd: 5,
    expectedValue: 3,
    pattern: '**-**-**',
  },
];

describe('pushValueToStack', () => {
  tests
    .filter(test => !test.only)

    .forEach(test => {
      const {
        key,
        selectionStart,
        selectionEnd,
        expectedValue,
        testMessage,
        pattern,
        pastedLength,
      } = test;
      it(`${testMessage}`, () => {
        expect(
          getCursorPositionAfterKeystroke(key, selectionStart, selectionEnd, pattern, pastedLength),
        ).toEqual(expectedValue);
      });
    });
});
