import { isSyntheticEvent, normalizeEvent } from '.';

describe('when validating a synthetic event', () => {
  it('returns true when the value is synthetic event', () => {
    expect(isSyntheticEvent({ nativeEvent: new Event('test') })).toBe(true);
  });

  it('returns false when the value is not a synthetic event', () => {
    expect(isSyntheticEvent(null)).toBe(false);
    expect(isSyntheticEvent(undefined)).toBe(false);
    expect(isSyntheticEvent(new Event('test'))).toBe(false);
  });
});

describe('when normalizing an event', () => {
  it('returns the original event when the event is falsy', () => {
    const event = null;
    expect(normalizeEvent(event)).toEqual(event);
  });

  it('returns the original event when the event is not a recognised format', () => {
    const event = { randomProperty: 'something' };
    expect(normalizeEvent(event)).toEqual(event);
  });

  it('returns a number when the type is number', () => {
    let event = { nativeEvent: new Event(''), target: { value: '123' } };
    expect(normalizeEvent(event, 'number')).toEqual(123);
    event = { nativeEvent: new Event(''), target: { value: 123 } };
    expect(normalizeEvent(event, 'number')).toEqual(123);
  });

  it('returns NaN when the type is number and value is not numeric', () => {
    const event = { nativeEvent: new Event(''), target: { value: '' } };
    expect(normalizeEvent(event, 'number')).toEqual(NaN);
  });

  it('returns a string when the type is not number', () => {
    const event = { nativeEvent: new Event(''), target: { value: '123' } };
    expect(normalizeEvent(event)).toEqual('123');
  });

  it('returns value for event with value property', () => {
    let event = { value: 'a value' };
    expect(normalizeEvent(event)).toEqual('a value');
    event = { value: 0 };
    expect(normalizeEvent(event)).toEqual(0);
    event = { value: null };
    expect(normalizeEvent(event)).toBeNull();
  });
});
