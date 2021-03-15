import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '../test-utils';

import SizeSwapper from '.';

jest.mock('lodash.throttle', () => jest.fn((fn) => fn));

describe('SizeSwapper', () => {
  const originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth');
  const resetClientWidth = (width) => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: width,
    });
  };
  const breakpoints = [0, SizeSwapper.Breakpoint.EXTRA_SMALL];

  const items = breakpoints.map((bp) => ({
    items: [...Array(2)].map((val, key) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={`${key}-${bp}`}>
        element-{key + 1}-{bp}
      </div>
    )),
    layout: SizeSwapper.Layout.COLUMN,
    breakpoint: bp,
  }));

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
  });

  it('renders all elements and hides sizeswapper if clientWidth is not defined', () => {
    const { getByText, queryByText, container } = render(<SizeSwapper items={items} />);

    expect(getByText('element-1-0')).toBeInTheDocument();
    expect(getByText('element-2-0')).toBeInTheDocument();

    expect(queryByText(`element-1-${breakpoints[1]}`)).toBeInTheDocument();
    expect(queryByText(`element-2-${breakpoints[1]}`)).toBeInTheDocument();

    expect(container.querySelector('.np-size-swapper')).toHaveStyle(`visibility: hidden`);
  });

  it('changes visibility when clientWidth is set', () => {
    const { container } = render(<SizeSwapper items={items} />);

    expect(container.querySelector('.np-size-swapper')).toHaveStyle(`visibility: hidden`);

    resetClientWidth(breakpoints[1]);
    fireEvent(window, new Event('resize'));

    expect(container.querySelector('.np-size-swapper')).toHaveStyle(`visibility: visible`);
  });

  it('switches elements according to breakpoints', () => {
    const { getByText, queryByText } = render(<SizeSwapper items={items} />);
    resetClientWidth(breakpoints[1] - 1);
    fireEvent(window, new Event('resize'));

    expect(getByText(`element-1-0`)).toBeInTheDocument();
    expect(getByText(`element-2-0`)).toBeInTheDocument();
    expect(queryByText(`element-1-${breakpoints[1]}`)).not.toBeInTheDocument();
    expect(queryByText(`element-2-${breakpoints[1]}`)).not.toBeInTheDocument();

    resetClientWidth(breakpoints[1]);
    fireEvent(window, new Event('resize'));

    expect(queryByText(`element-1-${breakpoints[0]}`)).not.toBeInTheDocument();
    expect(queryByText(`element-2-${breakpoints[0]}`)).not.toBeInTheDocument();
    expect(getByText(`element-1-${breakpoints[1]}`)).toBeInTheDocument();
    expect(getByText(`element-2-${breakpoints[1]}`)).toBeInTheDocument();
  });

  describe('when ref is window', () => {
    it('switches elements according to breakpoints', () => {
      const { getByText, queryByText } = render(<SizeSwapper items={items} ref={window} />);
      global.innerWidth = breakpoints[1] - 1;
      fireEvent(window, new Event('resize'));

      expect(getByText(`element-1-0`)).toBeInTheDocument();
      expect(getByText(`element-2-0`)).toBeInTheDocument();
      expect(queryByText(`element-1-${breakpoints[1]}`)).not.toBeInTheDocument();
      expect(queryByText(`element-2-${breakpoints[1]}`)).not.toBeInTheDocument();

      [, global.innerWidth] = breakpoints;

      fireEvent(window, new Event('resize'));

      expect(queryByText(`element-1-${breakpoints[0]}`)).not.toBeInTheDocument();
      expect(queryByText(`element-2-${breakpoints[0]}`)).not.toBeInTheDocument();
      expect(getByText(`element-1-${breakpoints[1]}`)).toBeInTheDocument();
      expect(getByText(`element-2-${breakpoints[1]}`)).toBeInTheDocument();
    });
  });
});
