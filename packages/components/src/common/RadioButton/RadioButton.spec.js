import React from 'react';
import { screen, render, userEvent } from '../../test-utils';

import RadioButton from '.';

describe('Radio button', () => {
  it('renders correctly', () => {
    const { container } = render(<RadioButton id="an-id" name="a-name" value="a-value" />);

    expect(container).toMatchSnapshot();
  });

  it('renders checked state correctly', () => {
    const { container } = render(<RadioButton name="radio-name" checked />);

    expect(container).toMatchSnapshot();
  });

  it('renders disabled state correctly', () => {
    const { container } = render(<RadioButton name="radio-name" disabled />);

    expect(container).toMatchSnapshot();
  });

  it('responds to user input', () => {
    const onChange = jest.fn();
    render(
      <label htmlFor="an-id">
        <RadioButton onChange={onChange} id="an-id" name="a-name" value="a-value" />A radio
      </label>,
    );

    userEvent.click(screen.getByLabelText('A radio'));

    expect(onChange).toHaveBeenCalledWith('a-value');
  });
});
