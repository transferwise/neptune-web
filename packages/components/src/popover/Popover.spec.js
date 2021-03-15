import React from 'react';
import { fireEvent, render, waitFor, screen } from '../test-utils';
import Popover from './Popover';
import { Breakpoint } from '../common';

jest.mock('../common/bottomSheet', () => {
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

describe('Popover', () => {
  const props = {
    arrow: true,
    content: 'content',
    position: Popover.Placement.BOTTOM,
    title: 'title',
  };

  let container;
  let rerender;

  describe('on desktop', () => {
    it('renders correctly when open is true', async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      fireEvent.click(getTrigger());

      expect(container).toMatchSnapshot();
    });

    it('renders title correctly', async () => {
      await waitFor(() => {
        ({ container, rerender } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      expect(screen.queryByText('title')).toBeInTheDocument();

      await waitFor(() => {
        rerender(
          <Popover {...props} title={undefined}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(screen.queryByText('title')).not.toBeInTheDocument();
    });

    it('renders Panel onClick', async () => {
      await waitFor(() => {
        render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(getPanel()).not.toBeInTheDocument();

      fireEvent.click(getTrigger());

      expect(getPanel()).toBeInTheDocument();
    });

    it('closes Panel on document click', async () => {
      await waitFor(() => {
        render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(getPanel()).not.toBeInTheDocument();

      fireEvent.click(getTrigger());

      expect(getPanel()).toBeInTheDocument();

      fireEvent.click(document);

      expect(getPanel()).not.toBeInTheDocument();
    });

    it('renders role status for assistive technologies readers', async () => {
      await waitFor(() => {
        render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(screen.queryByRole('status')).toBeNull();

      fireEvent.click(getTrigger());

      expect(screen.getByRole('status')).toBeInTheDocument();
      expect(screen.getByRole('status').innerHTML).toBe(`${props.title}${props.content}`);
      expect(screen.getByRole('status')).toHaveClass('sr-only');
    });
  });

  describe('on mobile', () => {
    beforeEach(() => {
      global.innerWidth = Breakpoint.SMALL - 1;
    });

    it('renders', async () => {
      await waitFor(() => {
        ({ container } = render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        ));
      });

      fireEvent.click(getTrigger());

      expect(container).toMatchSnapshot();
    });

    it('renders BottomSheet onClick', async () => {
      await waitFor(() => {
        render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(getBottomSheet()).not.toBeInTheDocument();

      fireEvent.click(getTrigger());

      expect(getBottomSheet()).toBeInTheDocument();
    });

    it('close BottomSheet on document click', async () => {
      await waitFor(() => {
        render(
          <Popover {...props}>
            <button type="button">Open</button>
          </Popover>,
        );
      });

      expect(getBottomSheet()).not.toBeInTheDocument();

      fireEvent.click(getTrigger());

      expect(getBottomSheet()).toBeInTheDocument();

      fireEvent.click(document);

      expect(getBottomSheet()).not.toBeInTheDocument();
    });
  });

  const getPanel = () => document.querySelector('.np-panel--open');
  const getBottomSheet = () => document.querySelector('.np-bottom-sheet');
  const getTrigger = () => screen.queryByText('Open');
});
