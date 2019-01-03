import { getDayNames } from '..';

jest.mock('@transferwise/formatting', () => ({
  formatDate: day => day.getDay(),
}));

describe('getDayNames', () => {
  it('returns all weekdays', () => {
    expect(getDayNames()).toHaveLength(7);
  });

  it('starts with Monday and ends with Sunday', () => {
    const days = getDayNames();
    expect(days[0]).toBe(1);
    expect(days[days.length - 1]).toBe(0);
  });
});
