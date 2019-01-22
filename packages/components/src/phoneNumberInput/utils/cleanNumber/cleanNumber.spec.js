import { cleanNumber } from './';

const TESTS = [
  { input: '', output: '' },
  { input: '+23456', output: '+23456' },
  { input: '+23456--', output: '+23456' },
  { input: '+23456--  77777+8980', output: '+23456777778980' },
  { input: '+23456--+777+77+8980', output: '+23456777778980' },
  { input: '+23456--  777 77+89 -- =80', output: '+23456777778980' },
];
describe('cleanNumber', () => {
  TESTS.forEach(test => {
    it('strips the incorrect chars', () => {
      expect(cleanNumber(test.input)).toBe(test.output);
    });
  });
});
