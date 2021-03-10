/* eslint-disable no-console */
import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup, screen, userEvent } from '../test-utils';

import Button from '.';

const { ACCENT, POSITIVE, NEGATIVE } = Button.Type;
const { PRIMARY, SECONDARY, TERTIARY } = Button.Priority;
const { SMALL, MEDIUM, LARGE } = Button.Size;

describe('Button', () => {
  const props = {
    onClick: jest.fn(),
    children: 'Send money',
  };

  const origWarn = console.warn;
  let mockedWarn;

  beforeAll(() => {
    mockedWarn = jest.fn();
    console.warn = mockedWarn;
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  afterAll(() => {
    console.warn = origWarn;
  });

  describe('by default', () => {
    beforeEach(() => {
      render(<Button {...props} />);
    });

    it('renders the text', () => {
      screen.getByText('Send money');
    });

    it('is not disabled', () => {
      expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('renders a medium button of type accent and priority primary', () => {
      expect(render(<Button {...props} />).container).toMatchSnapshot();
    });
  });

  describe('button attributes', () => {
    it('disables the button if disabled', () => {
      render(<Button {...props} disabled />);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('sets the htmlType if set', () => {
      render(<Button {...props} htmlType="submit" />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('passes through custom classes if set', () => {
      render(<Button {...props} className="catsarethebest" />);
      expect(screen.getByRole('button')).toHaveClass('catsarethebest');
    });
  });

  describe('onClick', () => {
    it('calls onClick when clicked', () => {
      const onClick = jest.fn();
      render(<Button {...props} onClick={onClick} />);
      userEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when clicked if disabled', () => {
      const onClick = jest.fn();
      render(<Button {...props} onClick={onClick} disabled />);
      userEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });

  describe('sizes', () => {
    it('renders small buttons', () => {
      expect(render(<Button {...props} size={SMALL} />).container).toMatchSnapshot();
    });

    it('renders medium buttons', () => {
      expect(render(<Button {...props} size={MEDIUM} />).container).toMatchSnapshot();
    });

    it('renders large buttons', () => {
      expect(render(<Button {...props} size={LARGE} />).container).toMatchSnapshot();
    });
  });

  describe('types', () => {
    it('renders accent buttons', () => {
      expect(render(<Button {...props} type={ACCENT} />).container).toMatchSnapshot();
    });

    it('renders positive buttons', () => {
      expect(render(<Button {...props} type={POSITIVE} />).container).toMatchSnapshot();
    });

    it('renders negative buttons', () => {
      expect(render(<Button {...props} type={NEGATIVE} />).container).toMatchSnapshot();
    });
  });

  describe('priorities', () => {
    it('renders primary buttons', () => {
      [ACCENT, POSITIVE, NEGATIVE].forEach((type) =>
        expect(
          render(<Button {...props} priority={PRIMARY} type={type} />).container,
        ).toMatchSnapshot(),
      );
    });

    it('renders secondary buttons', () => {
      [ACCENT, POSITIVE, NEGATIVE].forEach((type) =>
        expect(
          render(<Button {...props} priority={SECONDARY} type={type} />).container,
        ).toMatchSnapshot(),
      );
    });

    it('renders tertiary buttons', () => {
      expect(
        render(<Button {...props} priority={TERTIARY} type={ACCENT} />).container,
      ).toMatchSnapshot();
    });

    it('defaults tertiary buttons to secondary for positive buttons', () => {
      [POSITIVE, NEGATIVE].forEach((type) =>
        expect(
          render(<Button {...props} priority={TERTIARY} type={type} />).container,
        ).toMatchSnapshot(),
      );
    });
  });

  describe('alternative states', () => {
    it('renders as loading if loading is true', () => {
      const { container } = render(<Button {...props} loading />);
      expect(container).toMatchSnapshot();

      expect(container.querySelector('.btn-loader')).toBeInTheDocument();
    });

    it('renders as block if block is true', () => {
      expect(render(<Button {...props} block />).container).toMatchSnapshot();
    });
  });

  describe('deprecated types', () => {
    it('renders primary as accent buttons and logs a warning ', () => {
      expect(render(<Button {...props} type={Button.Type.PRIMARY} />).container).toMatchSnapshot();
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('renders pay as positive buttons and logs a warning', () => {
      expect(render(<Button {...props} type={Button.Type.PAY} />).container).toMatchSnapshot();
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('renders danger as negative buttons with priority secondary and logs a warning', () => {
      expect(render(<Button {...props} type={Button.Type.DANGER} />).container).toMatchSnapshot();
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('renders link as accent buttons with priority tertiary and logs a warning', () => {
      expect(render(<Button {...props} type={Button.Type.LINK} />).container).toMatchSnapshot();
    });
  });
});
