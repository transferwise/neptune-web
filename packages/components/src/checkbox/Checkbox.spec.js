import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './';

describe('Checkbox', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      label: 'hello',
      onChange: jest.fn(),
    };
    component = shallow(<Checkbox {...props} />);
  });

  function click() {
    component.find('button').simulate('click');
  }

  it('renders the given label', () => {
    expect(component.text()).toEqual(props.label);
  });

  it('switches the given checked value when clicked', () => {
    component.setProps({ checked: true });
    expect(props.onChange).not.toBeCalled();
    click();
    expect(props.onChange).toBeCalledWith(false);

    component.setProps({ checked: false });
    click();
    expect(props.onChange).toBeCalledWith(true);
  });

  it('sets the button as checked when the component is checked', () => {
    const buttonChecked = () => component.find('button').hasClass('checked');
    expect(buttonChecked()).toBe(false);

    component.setProps({ checked: true });
    expect(buttonChecked()).toBe(true);
  });

  it('disables the button and div if the component is disabled', () => {
    const isDisabled = () => (
      component.find('div.checkbox').hasClass('disabled') &&
      !!component.find('button').prop('disabled')
    );
    expect(isDisabled()).toBe(false);

    component.setProps({ disabled: true });
    expect(isDisabled()).toBe(true);
  });

  it('can not be clicked when it is disabled', () => {
    component.setProps({ disabled: true });
    click();
    expect(props.onChange).not.toBeCalled();
  });

  it('shows an error if it is required and not disabled', () => {
    const hasError = () => (
      component.find('div.checkbox').hasClass('has-error') &&
      component.find('button').hasClass('has-error')
    );
    expect(hasError()).toBe(false);
    component.setProps({ disabled: true, required: true });
    expect(hasError()).toBe(false);
    component.setProps({ disabled: false, required: true, checked: true });
    expect(hasError()).toBe(false);

    component.setProps({ disabled: false, required: true, checked: false });
    expect(hasError()).toBe(true);
  });

  it('adds an asterisk to the label if it is disabled', () => {
    component.setProps({ required: true });
    expect(component.text()).toEqual(props.label + '*');
  });
});
