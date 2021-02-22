import React from 'react';
import { render, fireEvent, waitFor } from '../../test-utils';
import Info from './Info';

jest.mock('../../dimmer', () => {
  // eslint-disable-next-line
  return ({ children }) => <div className="dimmer">{children}</div>;
});

jest.mock('../../common/hooks', () => {
  // eslint-disable-next-line
  return {
    useAttachEvent: () => false,
    useClientWidth: () => [576],
  };
});

describe('Info', () => {
  const props = {
    content: 'content',
    className: 'className',
    title: 'title',
    'aria-label': 'aria-label',
  };

  it('renders small icon', async () => {
    await waitFor(() => {
      render(<Info {...props} />);
    });

    const svgElement = getSvgIcon();
    expect(svgElement.getAttribute('height')).toBe('16');
  });

  it('renders large icon', async () => {
    await waitFor(() => {
      render(<Info {...props} size={Info.Size.LARGE} />);
    });
    const svgElement = getSvgIcon();

    expect(svgElement.getAttribute('height')).toBe('24');
  });

  describe(`when in ${Info.Presentation.POPOVER} mode`, () => {
    it('renders popover component', async () => {
      await waitFor(() => {
        render(<Info {...props} open />);
      });

      expect(getHelpIcon()).toBeInTheDocument();
      expect(getPopover()).toBeInTheDocument();
    });

    it('opens popover onClick', async () => {
      let getByLabelText;

      await waitFor(() => {
        ({ getByLabelText } = render(<Info {...props} />));
      });
      const popOverButton = getByLabelText('aria-label');

      expect(getHelpIcon()).toBeInTheDocument();

      expect(getPopover()).not.toHaveClass('np-panel--open');

      fireEvent.click(popOverButton);

      expect(getPopover()).toHaveClass('np-panel--open');
    });
  });

  describe(`when in ${Info.Presentation.MODAL} mode`, () => {
    it('opens modal onClick', async () => {
      await waitFor(() => {
        render(<Info {...props} presentation={Info.Presentation.MODAL} />);
      });
      const helpIcon = getHelpIcon();

      expect(getHelpIcon()).toBeInTheDocument();

      fireEvent.click(helpIcon);
      expect(document.querySelector('.tw-modal')).toBeInTheDocument();
    });
  });

  const getHelpIcon = () => document.querySelector('.tw-icon-help-circle');
  const getSvgIcon = () => document.querySelector('.tw-icon-help-circle > svg');
  const getPopover = () => document.querySelector('.np-panel');
});
