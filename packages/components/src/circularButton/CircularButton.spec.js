import React from 'react';
import '@testing-library/jest-dom';
import { Plus } from '@transferwise/icons';
import { render, screen, userEvent } from '../test-utils';

import CircularButton from './CircularButton';

const { ACCENT, POSITIVE, NEGATIVE } = CircularButton.Type;
const { PRIMARY, SECONDARY } = CircularButton.Priority;

describe('CircularButton', () => {
  const props = {
    children: 'Add money',
    icon: <Plus />,
    onClick: jest.fn(),
  };

  describe('defaults', () => {
    beforeEach(() => {
      render(<CircularButton {...props} />);
    });

    it('renders the text', () => {
      screen.getByText('Add money');
    });

    it('renders the provided icon', () => {
      const icon = document.querySelector('.tw-icon');
      expect(icon).toBeInTheDocument();
    });

    it('is not disabled', () => {
      expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('renders a button of type accent and priority primary', () => {
      expect(render(<CircularButton {...props} />).container).toMatchSnapshot();
    });
  });

  describe('button attributes', () => {
    it('disables the button if disabled', () => {
      render(<CircularButton {...props} disabled />);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('passes through custom classes if set', () => {
      render(<CircularButton {...props} className="have-a-nice-day-:)" />);
      const label = document.querySelector('label');

      expect(label).toHaveClass('have-a-nice-day-:)');
    });
  });

  describe('onClick', () => {
    it('calls onClick when clicked', () => {
      const onClick = jest.fn();
      render(<CircularButton {...props} onClick={onClick} />);
      userEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when clicked if disabled', () => {
      const onClick = jest.fn();
      render(<CircularButton {...props} onClick={onClick} disabled />);
      userEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });

  describe('types', () => {
    it('renders accent buttons', () => {
      expect(render(<CircularButton {...props} type={ACCENT} />).container).toMatchSnapshot();
    });

    it('renders positive buttons', () => {
      expect(render(<CircularButton {...props} type={POSITIVE} />).container).toMatchSnapshot();
    });

    it('renders negative buttons', () => {
      expect(render(<CircularButton {...props} type={NEGATIVE} />).container).toMatchSnapshot();
    });
  });

  describe('priorities', () => {
    it('renders primary buttons', () => {
      [ACCENT, POSITIVE, NEGATIVE].forEach((type) =>
        expect(
          render(<CircularButton {...props} priority={PRIMARY} type={type} />).container,
        ).toMatchSnapshot(),
      );
    });

    it('renders secondary buttons', () => {
      [ACCENT, POSITIVE, NEGATIVE].forEach((type) =>
        expect(
          render(<CircularButton {...props} priority={SECONDARY} type={type} />).container,
        ).toMatchSnapshot(),
      );
    });
  });
});
