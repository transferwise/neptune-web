import { generateErrorMessage } from './generateErrorMessage';

describe('generateErrorMessage', () => {
  it('returns default message when no override is passed', () => {
    expect(generateErrorMessage(413)).toBe('Please provide a smaller file');
  });

  it('returns ovveride message when  override is passed', () => {
    expect(generateErrorMessage(413, { 413: 'New error message' })).toBe('New error message');
  });

  it('returns default message unknow errror is passed', () => {
    expect(generateErrorMessage(-1)).toBe('Unknown error');
  });

  it('returns default message unknow errror is passed', () => {
    expect(generateErrorMessage(-1, { unknownError: 'a new Unknow Error' })).toBe(
      'a new Unknow Error',
    );
  });
});
