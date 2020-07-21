import React from 'react';
import { Select } from '@transferwise/components';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WithNormalizer from './';

describe('withNormalizer', () => {
  it('when user types a string it returns string value', () => {
    const onChange = jest.fn();
    render(
      <WithNormalizer>
        <input type="text" data-testid="input" onChange={onChange} />
      </WithNormalizer>,
    );
    const input = screen.getByTestId('input');
    userEvent.type(input, 'username');
    expect(onChange).toHaveBeenCalledWith('username');
  });

  it('when user types a number in a text input it returns a string', () => {
    const onChange = jest.fn();
    render(
      <WithNormalizer>
        <input type="text" data-testid="input" onChange={onChange} />
      </WithNormalizer>,
    );
    const input = screen.getByTestId('input');
    userEvent.type(input, '123');
    expect(onChange).toHaveBeenCalledWith('123');
  });

  it('when user types a number in a numeric input it returns a number', () => {
    const onChange = jest.fn();
    render(
      <WithNormalizer>
        <input type="number" data-testid="input" onChange={onChange} />
      </WithNormalizer>,
    );
    const input = screen.getByTestId('input');
    userEvent.type(input, '123');
    expect(onChange).toHaveBeenCalledWith(123);
  });

  it('when user select an option it returns option value', () => {
    const onChange = jest.fn();
    render(
      <WithNormalizer>
        <Select
          size="md"
          placeholder="placeholder"
          onChange={onChange}
          searchPlaceholder="Search placeholder"
          options={[
            { header: 'Basic' },
            { value: 0, label: 'A thing', note: 'with a note' },
            { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
          ]}
        />
      </WithNormalizer>,
    );

    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText('Another thing').parentElement);
    expect(onChange).toHaveBeenCalledWith(1);
  });
});
