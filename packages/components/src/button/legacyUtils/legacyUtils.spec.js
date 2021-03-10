/* eslint-disable no-console */
import { ControlType, Priority, Size, Type } from '../../common';
import { establishNewPriority, establishNewType, logDeprecationNotices } from '.';
import { cleanup } from '../../test-utils';

describe('establishNewPriority', () => {
  it('returns the provided priority for supported combinations', () => {
    expect(establishNewPriority(Priority.PRIMARY, ControlType.ACCENT)).toBe(Priority.PRIMARY);
    expect(establishNewPriority(Priority.SECONDARY, ControlType.ACCENT)).toBe(Priority.SECONDARY);
    expect(establishNewPriority(Priority.TERTIARY, ControlType.ACCENT)).toBe(Priority.TERTIARY);

    expect(establishNewPriority(Priority.PRIMARY, ControlType.POSITIVE)).toBe(Priority.PRIMARY);
    expect(establishNewPriority(Priority.SECONDARY, ControlType.POSITIVE)).toBe(Priority.SECONDARY);

    expect(establishNewPriority(Priority.PRIMARY, ControlType.NEGATIVE)).toBe(Priority.PRIMARY);
    expect(establishNewPriority(Priority.SECONDARY, ControlType.NEGATIVE)).toBe(Priority.SECONDARY);
  });

  it('maps to Priority.SECONDARY if the original type was SECONDARY', () => {
    expect(establishNewPriority(Priority.PRIMARY, Type.SECONDARY)).toBe(Priority.SECONDARY);
    expect(establishNewPriority(Priority.SECONDARY, Type.SECONDARY)).toBe(Priority.SECONDARY);
    expect(establishNewPriority(Priority.TERTIARY, Type.SECONDARY)).toBe(Priority.SECONDARY);
  });

  it('maps to Priority.SECONDARY if the original type was DANGER', () => {
    expect(establishNewPriority(Priority.PRIMARY, Type.DANGER)).toBe(Priority.SECONDARY);
    expect(establishNewPriority(Priority.SECONDARY, Type.DANGER)).toBe(Priority.SECONDARY);
    expect(establishNewPriority(Priority.TERTIARY, Type.DANGER)).toBe(Priority.SECONDARY);
  });

  it('maps to Priority.TERTIARY if the original type was LINK', () => {
    expect(establishNewPriority(Priority.PRIMARY, Type.LINK)).toBe(Priority.TERTIARY);
    expect(establishNewPriority(Priority.SECONDARY, Type.LINK)).toBe(Priority.TERTIARY);
    expect(establishNewPriority(Priority.TERTIARY, Type.LINK)).toBe(Priority.TERTIARY);
  });

  it('allows type Priority.TERTIARY for types converted to ACCENT other than SECONDARY', () => {
    expect(establishNewPriority(Priority.TERTIARY, ControlType.ACCENT)).toBe(Priority.TERTIARY);
    expect(establishNewPriority(Priority.TERTIARY, Type.PRIMARY)).toBe(Priority.TERTIARY);
    expect(establishNewPriority(Priority.TERTIARY, Type.LINK)).toBe(Priority.TERTIARY);
  });

  it('maps Priority.TERTIARY to Priority.SECONDARY for type SECONDARY and non ACCENT types', () => {
    expect(establishNewPriority(Priority.TERTIARY, ControlType.POSITIVE)).toBe(Priority.SECONDARY);
    expect(establishNewPriority(Priority.TERTIARY, ControlType.NEGATIVE)).toBe(Priority.SECONDARY);
    expect(establishNewPriority(Priority.TERTIARY, Type.SECONDARY)).toBe(Priority.SECONDARY);
    expect(establishNewPriority(Priority.TERTIARY, Type.PAY)).toBe(Priority.SECONDARY);
    expect(establishNewPriority(Priority.TERTIARY, Type.DANGER)).toBe(Priority.SECONDARY);
  });
});

describe('establishNewType', () => {
  it('maps deprecated types to their new equivalents', () => {
    expect(establishNewType(Type.PRIMARY)).toBe(ControlType.ACCENT);
    expect(establishNewType(Type.SECONDARY)).toBe(ControlType.ACCENT);
    expect(establishNewType(Type.LINK)).toBe(ControlType.ACCENT);
    expect(establishNewType(Type.PAY)).toBe(ControlType.POSITIVE);
    expect(establishNewType(Type.DANGER)).toBe(ControlType.NEGATIVE);
  });

  it('returns the original type if not deprecated', () => {
    expect(establishNewType(ControlType.ACCENT)).toBe(ControlType.ACCENT);
    expect(establishNewType(ControlType.POSITIVE)).toBe(ControlType.POSITIVE);
    expect(establishNewType(ControlType.NEGATIVE)).toBe(ControlType.NEGATIVE);
  });
});

describe('logDeprecationNotices', () => {
  const origWarn = console.warn;
  let mockedWarn;

  beforeAll(() => {
    mockedWarn = jest.fn();
    console.warn = mockedWarn;
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  afterAll(() => {
    console.warn = origWarn;
  });

  it('logs a warning if someone uses an extra small button ', () => {
    logDeprecationNotices({ size: Size.EXTRA_SMALL });
    expect(mockedWarn).toHaveBeenCalledTimes(1);
  });

  it('logs a warning if someone uses a deprecated prop type ', () => {
    [ControlType.ACCENT, ControlType.POSITIVE, ControlType.NEGATIVE].forEach((type) => {
      logDeprecationNotices({ type });
      expect(mockedWarn).toHaveBeenCalledTimes(0);
    });

    [Type.PRIMARY, Type.SECONDARY, Type.LINK, Type.PAY, Type.DANGER].forEach((type, count) => {
      logDeprecationNotices({ type });
      expect(mockedWarn).toHaveBeenCalledTimes(count + 1);
    });
  });
});
