import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '../test-utils';

import CheckboxButton from '.';

describe('Checkbox button', () => {
  let getByRole;

  describe('by default', () => {
    beforeEach(() => {
      ({ getByRole } = render(<CheckboxButton onChange={jest.fn()} />));
    });
    it('is not checked', () => {
      getByRole('checkbox', { checked: false });
    });

    it('is not disabled', () => {
      getByRole('checkbox', { disabled: false });
    });
  });

  it('applies aria-label if provided', () => {
    ({ getByRole } = render(<CheckboxButton onChange={jest.fn()} aria-label="An aria label" />));
    getByRole('checkbox', { name: 'An aria label' });
  });

  it('is checked when checked prop is true', () => {
    ({ getByRole } = render(<CheckboxButton checked onChange={jest.fn()} />));
    getByRole('checkbox', { checked: true });
  });

  it('is disabled when disabled prop is true', () => {
    ({ getByRole } = render(<CheckboxButton disabled onChange={jest.fn()} />));
    getByRole('checkbox', { disabled: true });
  });

  it('calls onChange handler on change', () => {
    const onChange = jest.fn();
    ({ getByRole } = render(<CheckboxButton onChange={onChange} />));

    const input = getByRole('checkbox');

    expect(onChange).not.toBeCalled();
    fireEvent(input, new MouseEvent('click', { bubbles: true }));
    expect(onChange).toBeCalled();
  });
});
