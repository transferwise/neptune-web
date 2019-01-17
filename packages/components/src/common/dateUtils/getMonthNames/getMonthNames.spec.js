import { getMonthNames } from '..';

jest.mock('@transferwise/formatting', () => ({
  formatDate: month => month.getMonth(),
}));

describe('getMonthNames', () => {
  it('returns all months', () => {
    expect(getMonthNames()).toHaveLength(12);
  });

  it('starts with January and ends with December', () => {
    const months = getMonthNames();
    expect(months[0]).toBe(0);
    expect(months[months.length - 1]).toBe(11);
  });
});
