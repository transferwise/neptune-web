import { act, renderHook } from '@testing-library/react-hooks';

import { fireEvent } from '../../../test-utils';

import { useAttachEvent } from './useAttachEvent';

describe('useAttachEvent', () => {
  const triggeredEvent = new Event('KittenEvent');
  const args = {
    eventType: 'click',
    condition: jest.fn(() => true),
    callBack: jest.fn(),
    attachListener: true,
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it(`by default doesn't call callBack`, () => {
    renderHook(() => useAttachEvent({ ...args }));
    expect(args.callBack).not.toHaveBeenCalled();
  });

  describe('when attachListener is true', () => {
    it('calls callback with true if conditon is met', () => {
      renderHook(() => useAttachEvent({ ...args, attachListener: true, condition: () => true }));

      expect(args.callBack).not.toHaveBeenCalled();

      act(() => {
        fireEvent.click(document, triggeredEvent);
      });

      expect(args.callBack).toHaveBeenCalledWith(true);
    });

    it('calls callback with false if conditon is not met', () => {
      renderHook(() => useAttachEvent({ ...args, attachListener: true, condition: () => false }));

      expect(args.callBack).not.toHaveBeenCalled();

      act(() => {
        fireEvent.click(document, triggeredEvent);
      });

      expect(args.callBack).toHaveBeenCalledWith(false);
    });
  });

  describe('when attachListener is false', () => {
    it("doesn't calls callback if conditon is met", () => {
      renderHook(() => useAttachEvent({ ...args, attachListener: false, condition: () => true }));

      expect(args.callBack).not.toHaveBeenCalled();

      act(() => {
        fireEvent.click(document, triggeredEvent);
      });

      expect(args.callBack).not.toHaveBeenCalled();
    });

    it('calls callback with false if conditon is not met', () => {
      renderHook(() => useAttachEvent({ ...args, attachListener: true, condition: () => false }));

      expect(args.callBack).not.toHaveBeenCalled();

      act(() => {
        fireEvent.click(document, triggeredEvent);
      });

      expect(args.callBack).toHaveBeenCalledWith(false);
    });
  });
});
