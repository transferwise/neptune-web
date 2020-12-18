import React from 'react';
import { render, fireEvent } from '../../test-utils';
import Info from './Info';

jest.mock('../../dimmer', () => {
  // eslint-disable-next-line
  return ({ children }) => <div className="dimmer">{children}</div>;
});

describe('Info', () => {
  const props = {
    content: 'content',
    className: 'className',
    title: 'title',
    'aria-label': 'aria-label',
  };

  it('renders small icon', () => {
    const { container } = render(<Info {...props} />);

    const svgElement = getSvgIcon({ container });
    expect(svgElement.getAttribute('height')).toBe('16');
  });

  it('renders large icon', () => {
    const { container } = render(<Info {...props} size={Info.Size.LARGE} />);
    const svgElement = getSvgIcon({ container });

    expect(svgElement.getAttribute('height')).toBe('24');
  });

  describe(`when in ${Info.Presentation.POPOVER} mode`, () => {
    it('renders popover component', () => {
      const { container, getByLabelText } = render(<Info {...props} />);
      const helpIcon = getHelpIcon({ container });

      expect(helpIcon).toBeInTheDocument();
      expect(getByLabelText('aria-label').getAttribute('data-toggle')).toEqual('popover');
    });

    it('opens popover onClick', () => {
      const { container, getByLabelText } = render(<Info {...props} />);
      const popOverButton = getByLabelText('aria-label');
      const helpIcon = getHelpIcon({ container });

      expect(helpIcon).toBeInTheDocument();
      expect(popOverButton.getAttribute('aria-expanded')).toEqual('false');

      fireEvent.click(popOverButton);
      expect(popOverButton.getAttribute('aria-expanded')).toEqual('true');
    });
  });

  describe(`when in ${Info.Presentation.MODAL} mode`, () => {
    it('opens modal onClick', () => {
      const { container } = render(<Info {...props} presentation={Info.Presentation.MODAL} />);
      const helpIcon = getHelpIcon({ container });

      expect(helpIcon).toBeInTheDocument();

      fireEvent.click(helpIcon);
      expect(container.querySelector('.tw-modal')).toBeInTheDocument();
    });
  });

  const getHelpIcon = ({ container }) => container.querySelector('.tw-icon-help-circle');
  const getSvgIcon = ({ container }) => container.querySelector('.tw-icon-help-circle > svg');
});
