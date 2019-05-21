import unformatWithPattern from './unformatWithPattern';

const tests = [
  { value: '12-34-56', pattern: '**-**-**', expectedValue: '123456' },
  { value: '12-34-56', pattern: '**/**/**', expectedValue: '12-34-56' },
  { value: '12-34-56', pattern: '**-**/**', expectedValue: '123456' },
  { value: '12--34-56', pattern: '**-**-**', expectedValue: '123456' },
  { value: '12-44/22', pattern: '**-**-**', expectedValue: '1244/22' },
  { value: '12-44/22', pattern: '**-**/**', expectedValue: '124422' },
  { value: '-12-', pattern: '**-**-**', expectedValue: '12' },
  { value: '12-34-56', pattern: '**', expectedValue: '12-34-56' },
  { value: 'aba-a', pattern: '**-**-**', expectedValue: 'abaa' },
];

describe('unformatWithPattern', () => {
  it('return empty strings if original string is empty', () => {
    const value = '';
    const pattern = '**-**-**';
    const expectedValue = '';
    expect(unformatWithPattern(value, pattern)).toEqual(expectedValue);
  });

  tests.forEach(test => {
    it(`unformat string '${test.value}' according to patter ${test.pattern}`, () => {
      expect(unformatWithPattern(test.value, test.pattern)).toBe(test.expectedValue);
    });
  });
});
