import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useDirection } from './useDirection';

let realUseContext;
let useContextMock;
let direction = 'ltr';

beforeEach(() => {
  realUseContext = React.useContext;
  React.useContext = jest.fn(() => direction);
  useContextMock = React.useContext;
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});
describe('useRTL', () => {
  it(`returns direction:'ltr' and isRTL false when context is ltr`, () => {
    const {
      result: { current },
    } = renderHook(() => useDirection());

    expect(current).toEqual({ direction, isRTL: false });
  });

  it(`returns direction:'rtl' and isRTL true when context is rtl`, () => {
    direction = 'rtl';
    useContextMock.mockReturnValue(direction);
    const {
      result: { current },
    } = renderHook(() => useDirection());

    expect(current).toEqual({ direction, isRTL: true });
  });
});
