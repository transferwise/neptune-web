import React from 'react';

import { render, cleanup } from '../test-utils';

import InputWithDisplayFormat from '.';

describe('InputWithDisplayFormat', () => {
  function renderInput(props) {
    return render(<InputWithDisplayFormat displayPattern="*" onChange={jest.fn()} {...props} />);
  }

  afterEach(() => {
    cleanup();
  });

  describe('default state', () => {
    it('should render input with value prop', () => {
      const value = 'test';
      const { container } = renderInput({ value });
      const input = container.querySelector('input');

      expect(input).not.toBe(null);
      expect(input.value).toBe(value);
    });

    it('has inputMode prop when specified', () => {
      const inputMode = 'numeric';
      const { container } = renderInput({ inputMode });
      const input = container.querySelector('input');

      expect(input).not.toBe(null);
      expect(input).toHaveAttribute('inputmode');
      expect(input.inputMode).toBe(inputMode);
    });
  });
});
