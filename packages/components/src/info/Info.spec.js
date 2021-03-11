import React from 'react';
import { render, fireEvent, screen } from '../test-utils';
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

  it('renders small icon', () => {
    render(<Info {...props} />);

    const svgElement = getSvgIcon();
    expect(svgElement.getAttribute('height')).toBe('16');
  });

  it('renders large icon', () => {
    render(<Info {...props} size={Info.Size.LARGE} />);
    const svgElement = getSvgIcon();

    expect(svgElement.getAttribute('height')).toBe('24');
  });

  describe(`when in ${Info.Presentation.POPOVER} mode`, () => {
    it('renders popover component', () => {
      render(<Info {...props} />);
      const helpIcon = getHelpIcon();

      expect(helpIcon).toBeInTheDocument();
      expect(helpIcon.getAttribute('data-toggle')).toEqual('popover');
    });

    it('opens popover onClick', () => {
      render(<Info {...props} />);

      const helpIcon = getHelpIcon();

      expect(helpIcon).toBeInTheDocument();
      expect(helpIcon.getAttribute('aria-expanded')).toEqual('false');

      fireEvent.click(helpIcon);
      expect(helpIcon.getAttribute('aria-expanded')).toEqual('true');
    });
  });

  describe(`when in ${Info.Presentation.MODAL} mode`, () => {
    it('opens modal onClick', () => {
      render(<Info {...props} presentation={Info.Presentation.MODAL} />);
      const helpIcon = getHelpIcon();

      expect(helpIcon).toBeInTheDocument();

      fireEvent.click(helpIcon);
      expect(document.querySelector('.tw-modal')).toBeInTheDocument();
    });
  });

  const getHelpIcon = () => screen.getByLabelText('aria-label');
  const getSvgIcon = () => document.querySelector('.tw-icon-help-circle > svg');
});
