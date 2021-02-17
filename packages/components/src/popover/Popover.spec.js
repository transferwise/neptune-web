import React from 'react';
import { fireEvent, render, waitFor, screen } from '../test-utils';
import Popover from './Popover';
import { Breakpoint } from '../common';

jest.mock('../common/bottomSheet', () => {
  // eslint-disable-next-line
  const { forwardRef } = require('react');
  return forwardRef((props, ref) => {
    // eslint-disable-next-line react/prop-types
    const { open, children } = props;
    return open ? (
      <div ref={ref} className="np-bottom-sheet">
        {children}
      </div>
    ) : null;
  });
});

describe('Popover', () => {
  const props = {
    arrow: true,
    content: 'content',
    open: false,
    position: Popover.Position.BOTTOM,
    title: 'title',
    clickOutsideCallback: jest.fn(),
  };

  let container;
  let rerender;

  describe('on desktop', () => {
    it('renders correctly when open is true', async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props} open>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(container).toMatchSnapshot();
    });

    it('renders correctly when open is false', async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(container).toMatchSnapshot();
    });

    it('renders Panel based on open', async () => {
      await waitFor(() => {
        ({ container, rerender } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(getPanel()).not.toBeInTheDocument();

      await waitFor(() => {
        ({ container, rerender } = render(
          <Popover {...props} open>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(getPanel()).toBeInTheDocument();
    });
  });

  describe('on mobile', () => {
    beforeEach(() => {
      global.innerWidth = Breakpoint.SMALL - 1;
    });

    it('renders', async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props} initialOpen>
            <button type="button">Open</button>
          </Popover>,
        ));
      });
      expect(container).toMatchSnapshot();
    });

    it('renders BottomSheet based on open', async () => {
      await waitFor(() => {
        ({ container, rerender } = render(
          <Popover {...props} open>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(getBottomSheet()).toBeInTheDocument();

      await waitFor(() => {
        rerender(
          <Popover {...props} open={false}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(getBottomSheet()).not.toBeInTheDocument();
    });

    it('calls clickOutsideCallback withg correct value', async () => {
      await waitFor(() => {
        ({ container, rerender } = render(
          <Popover {...props} open>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      fireEvent.click(screen.getByText('Open'));
      expect(props.clickOutsideCallback).not.toHaveBeenCalled();

      fireEvent.click(document);
      expect(props.clickOutsideCallback).toHaveBeenCalledWith(true);
    });
  });

  const getPanel = () => document.querySelector('.np-panel--open');
  const getBottomSheet = () => document.querySelector('.np-bottom-sheet');
});
