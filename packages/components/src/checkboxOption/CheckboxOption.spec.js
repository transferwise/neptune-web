import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import CheckboxOption from '.';

describe('Checkbox option', () => {
  let container;
  let getByRole;
  let rerender;

  const defaultProps = {
    id: 'id',
    name: 'name',
    title: 'Title',
    onChange: jest.fn(),
  };

  describe('by default', () => {
    beforeEach(() => {
      ({ container, getByRole } = render(<CheckboxOption {...defaultProps} />));
    });
    it('is not checked', () => {
      getByRole('checkbox', { checked: false });
    });

    it('is not disabled', () => {
      getByRole('checkbox', { disabled: false });
    });
  });

  it('is checked when checked prop is true', () => {
    ({ getByRole } = render(<CheckboxOption {...defaultProps} checked />));
    getByRole('checkbox', { checked: true });
  });

  it('is disabled when disabled prop is true', () => {
    ({ getByRole } = render(<CheckboxOption {...defaultProps} disabled />));
    getByRole('checkbox', { disabled: true });
  });

  describe('onChange', () => {
    it('is called with new checked value when the option is clicked', () => {
      const onChange = jest.fn();
      ({ container, rerender } = render(<CheckboxOption {...defaultProps} onChange={onChange} />));

      const label = container.querySelector('label');

      expect(onChange).not.toBeCalled();
      fireEvent.click(label);
      expect(onChange).toBeCalledWith(true);

      rerender(<CheckboxOption {...defaultProps} onChange={onChange} checked />);
      fireEvent.click(label);
      expect(onChange).toBeCalledWith(false);
    });

    it('is not called if the option is disabled', () => {
      const onChange = jest.fn();
      ({ container } = render(<CheckboxOption {...defaultProps} onChange={onChange} disabled />));

      const label = container.querySelector('label');

      expect(onChange).not.toBeCalled();
      fireEvent.click(label);
      expect(onChange).not.toBeCalled();
    });
  });
});
