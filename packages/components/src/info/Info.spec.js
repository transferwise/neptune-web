import React from 'react';
import { render, fireEvent, waitFor, screen } from '../test-utils';
import Info from './Info';

jest.mock('../dimmer', () => {
  // eslint-disable-next-line
  return ({ children, open }) => (open ? <div className="dimmer">{children}</div> : null);
});

describe('Info', () => {
  const props = {
    content: 'content',
    className: 'className',
    title: 'title',
    'aria-label': 'aria-label',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders small icon', async () => {
    await waitFor(() => {
      render(<Info {...props} />);
    });

    expect(getSvgIcon().getAttribute('height')).toBe('16');
  });

  it('renders large icon', async () => {
    await waitFor(() => {
      render(<Info {...props} size={Info.Size.LARGE} />);
    });

    expect(getSvgIcon().getAttribute('height')).toBe('24');
  });

  describe(`when in ${Info.Presentation.POPOVER} mode`, () => {
    it('renders help button trigger', async () => {
      await waitFor(() => {
        render(<Info {...props} open />);
      });

      expect(getTriggerButton()).toBeInTheDocument();
    });

    it('opens popover onClick', async () => {
      await waitFor(() => {
        render(<Info {...props} />);
      });

      expect(getPopover()).not.toBeInTheDocument();

      fireEvent.click(getTriggerButton());

      expect(getPopover()).toBeInTheDocument();
    });
  });

  describe(`when in ${Info.Presentation.MODAL} mode`, () => {
    it('renders help button trigger', async () => {
      await waitFor(() => {
        render(<Info {...props} open />);
      });

      expect(getTriggerButton()).toBeInTheDocument();
    });
    it('opens modal onClick', () => {
      render(<Info {...props} presentation={Info.Presentation.MODAL} />);

      expect(getModal()).not.toBeInTheDocument();

      fireEvent.click(getTriggerButton());

      expect(getModal()).toBeInTheDocument();
    });
  });

  const getTriggerButton = () => screen.queryByLabelText('aria-label');
  const getSvgIcon = () => document.querySelector('.tw-icon-help-circle > svg');
  const getPopover = () => screen.queryByRole('tooltip');
  const getModal = () => screen.queryByRole('dialog');
});
