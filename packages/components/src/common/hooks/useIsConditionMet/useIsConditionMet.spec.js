import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import { fireEvent, render } from '../../../test-utils';

import { useIsConditionMet } from './useIsConditionMet';

const MockApp = () => <button type="button">Hello!</button>;

describe('useIsConditionMet', () => {
  const callBack = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it(`doesn't call callBack by default`, () => {
    const refs = [{ current: {} }];

    renderHook(() => useIsConditionMet({ refs, callBack, attachListener: true }));
    expect(callBack).not.toHaveBeenCalled();
  });

  it('calls callBack with true when click is not from ref', () => {
    renderHook(() =>
      useIsConditionMet({
        refs: [{ current: { contains: () => false } }],
        callBack,
        attachListener: true,
      }),
    );

    expect(callBack).not.toHaveBeenCalled();

    act(() => {
      fireEvent.click(document);
    });

    expect(callBack).toHaveBeenCalledWith(true);
  });

  it('calls callBack with true when click is from ref', () => {
    render(<MockApp />);

    renderHook(() =>
      useIsConditionMet({
        refs: [{ current: { contains: () => true } }],
        callBack,
        attachListener: true,
      }),
    );

    act(() => {
      fireEvent.click(document.querySelector('button'));
    });

    expect(callBack).toHaveBeenCalledWith(false);
  });

  it('does not calls callBack when attachListener is false', () => {
    renderHook(() =>
      useIsConditionMet({
        refs: [{ current: { contains: () => false } }],
        callBack,
        attachListener: false,
      }),
    );

    expect(callBack).not.toHaveBeenCalled();

    act(() => {
      fireEvent.click(document);
    });

    expect(callBack).not.toHaveBeenCalled();
  });
});
