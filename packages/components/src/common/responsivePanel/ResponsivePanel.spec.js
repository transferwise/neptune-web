import React from 'react';
import { render, waitFor } from '../../test-utils';
import ResponsivePanel from './ResponsivePanel';
import { Breakpoint } from '..';

jest.mock('../bottomSheet', () => {
  // eslint-disable-next-line
  const { forwardRef } = require('react');
  // eslint-disable-next-line react/prop-types
  return forwardRef(({ open, children }, ref) =>
    open ? (
      <div ref={ref} className="np-bottom-sheet">
        {children}
      </div>
    ) : null,
  );
});

jest.mock('../panel', () => {
  // eslint-disable-next-line
  const { forwardRef } = require('react');
  // eslint-disable-next-line react/prop-types
  return forwardRef(({ open, children }, ref) =>
    open ? (
      <div ref={ref} className="np-panel np-panel--open">
        {children}
      </div>
    ) : null,
  );
});

describe('ResponsivePanel', () => {
  const props = {
    arrow: true,
    children: 'content',
    open: true,
    position: ResponsivePanel.Position.TOP,
    title: 'title',
    triggerRef: jest.fn(),
  };

  let container;
  describe('on desktop', () => {
    it('renders Panel', async () => {
      await waitFor(() => {
        ({ container } = render(
          <ResponsivePanel {...props} intialOpen>
            children
          </ResponsivePanel>,
        ));
      });

      expect(container).toMatchSnapshot();
    });
  });

  describe('on mobile', () => {
    beforeEach(() => {
      global.innerWidth = Breakpoint.SMALL - 1;
    });

    it('renders bottomSheet', async () => {
      await waitFor(() => {
        ({ container } = render(
          <ResponsivePanel {...props} open>
            children
          </ResponsivePanel>,
        ));
      });
      expect(container).toMatchSnapshot();
    });
  });
});
