import formatWithPattern from './formatWithPattern';

const tests = [
  { value: '123456', pattern: '**-**-**', expectedValue: '12-34-56' },
  { value: 'aaaaa', pattern: '**-**-**', expectedValue: 'aa-aa-a' },
  {
    value: '1234567890123456',
    pattern: '**** **** **** ****',
    expectedValue: '1234 5678 9012 3456',
  },
  { value: '1234', pattern: '**/**', expectedValue: '12/34' },
  { value: '123456', pattern: '**-**-**', expectedValue: '12-34-56' },
  {
    value: '123456789',
    pattern: '+(**) **** ***',
    expectedValue: '+(12) 3456 789',
  },
  {
    value: '123456789012',
    pattern: '***.***.***-**',
    expectedValue: '123.456.789-012',
  },
  {
    value: '123456789',
    pattern: '**.***.***-*',
    expectedValue: '12.345.678-9',
  },
  {
    value: '1234',
    pattern: '**.***.***-*',
    expectedValue: '12.34',
  },
];

describe('formatWithPattern', () => {
  it(`returns empty string if empty value is passed`, () => {
    expect(formatWithPattern('', '**')).toBe('');
  });

  tests.forEach(test => {
    it(`format string ${test.value} to ${test.expectedValue} according to pattern ${
      test.pattern
    }`, () => {
      expect(formatWithPattern(test.value, test.pattern)).toEqual(test.expectedValue);
    });
  });
});
