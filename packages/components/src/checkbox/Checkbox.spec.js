import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import Checkbox from '.';

describe('Checkbox', () => {
  let props;

  beforeEach(() => {
    props = {
      label: <b>hello</b>,
      onChange: jest.fn(),
    };
  });

  it('renders the given label', () => {
    const { container } = render(<Checkbox {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('is enabled by default', () => {
    render(<Checkbox {...props} />);
    expect(getCheckboxContainer()).not.toHaveClass('disabled');
  });

  it('does not render secondary text', () => {
    const { container } = render(<Checkbox {...props} />);
    expect(container.querySelector('small')).not.toBeInTheDocument();
  });

  it('calls change handler with new checked value when checkbox button is clicked', () => {
    const onChange = jest.fn();

    const { rerender } = render(<Checkbox {...props} onChange={onChange} />);

    expect(onChange).not.toBeCalled();
    fireEvent.click(getLabel());
    expect(onChange).toHaveBeenCalledWith(true);

    rerender(<Checkbox {...props} onChange={onChange} checked />);

    fireEvent.click(getLabel());
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('does not call change handler on checkbox button click when disabled', () => {
    const onChange = jest.fn();

    render(<Checkbox {...props} onChange={onChange} disabled />);

    fireEvent.click(getLabel());
    expect(onChange).not.toBeCalled();
  });

  it('does not call change handler on checkbox button click when readOnly', () => {
    const onChange = jest.fn();

    render(<Checkbox {...props} onChange={onChange} readOnly />);

    fireEvent.click(getLabel());
    expect(onChange).not.toBeCalled();
  });

  it('has disabled class when the disabled prop is true', () => {
    render(<Checkbox {...props} disabled />);
    expect(getCheckboxContainer()).toHaveClass('disabled');
  });

  it('has error class and passes it to checkbox button when required and not checked', () => {
    const { rerender } = render(<Checkbox {...props} required checked />);
    expect(getCheckboxContainer()).not.toHaveClass('has-error');

    rerender(<Checkbox {...props} required />);

    expect(getCheckboxContainer()).toHaveClass('has-error');
  });

  it('ignores required if disabled or readOnly', () => {
    const { rerender } = render(<Checkbox {...props} required disabled />);
    expect(getCheckboxContainer()).not.toHaveClass('has-error');

    rerender(<Checkbox {...props} required readOnly />);
    expect(getCheckboxContainer()).not.toHaveClass('has-error');
  });

  it('has an asterisk after the label when required', () => {
    render(<Checkbox {...props} required />);

    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByText('*').tagName).toBe('LABEL');
  });

  it(`doesn't passes checked to checkbox button`, () => {
    render(<Checkbox {...props} />);
    expect(getCheckbox()).not.toHaveAttribute('checked');
  });

  it('passes checked to checkbox button', () => {
    render(<Checkbox {...props} checked />);
    expect(getCheckbox()).toHaveAttribute('checked');
  });

  it('passes disabled to checkbox button', () => {
    const { rerender } = render(<Checkbox {...props} />);
    expect(getCheckbox()).not.toHaveAttribute('disabled');

    rerender(<Checkbox {...props} disabled />);
    expect(getCheckbox()).toHaveAttribute('disabled');
  });

  it('disables checkbox button if readOnly', () => {
    const { rerender } = render(<Checkbox {...props} />);

    expect(getCheckbox()).not.toHaveAttribute('disabled');

    rerender(<Checkbox {...props} readOnly />);
    expect(getCheckbox()).toHaveAttribute('disabled');
  });

  it('displays secondary text when supplied', () => {
    render(<Checkbox {...props} secondary="secondary text" />);
    expect(screen.getByText('secondary text')).toBeInTheDocument();
    expect(getCheckboxContainer()).toHaveClass('checkbox-lg');
  });

  const getCheckboxContainer = () => screen.getByText('hello').parentElement.parentElement;
  const getLabel = () => screen.getByText('hello').parentElement;
  const getCheckbox = () => screen.getByRole('checkbox');
});
