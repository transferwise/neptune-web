import React from 'react';
import { shallow } from 'enzyme';

import CheckboxOption from '.';
import Option from '../common/Option';

describe('Checkbox option', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <CheckboxOption media={<span />} id="" name="" title="" content="" onChange={jest.fn()} />,
    );
  });

  it('passes shared props to option', () => {
    const Icon = () => <svg />;
    const sharedProps = {
      media: <Icon />,
      title: 'A title',
      content: 'A content',
      name: 'a-name',
      complex: true,
      disabled: true,
    };
    component.setProps(sharedProps);

    expect(option().props()).toEqual(expect.objectContaining(sharedProps));
  });

  it('calls change handler with new checked value on option click when not disabled', () => {
    const event = { preventDefault: jest.fn() };
    const onChange = jest.fn();
    component.setProps({ onChange });

    expect(onChange).not.toBeCalled();
    option().simulate('click', event);
    expect(onChange).toBeCalledWith(true);

    component.setProps({ checked: true });
    option().simulate('click', event);
    expect(onChange).toBeCalledWith(false);
  });

  it('prevents default on the click event', () => {
    const event = { preventDefault: jest.fn() };
    expect(event.preventDefault).not.toHaveBeenCalled();
    option().simulate('click', event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('does not call change handler when disabled', () => {
    const event = { preventDefault: jest.fn() };
    const onChange = jest.fn();
    component.setProps({ onChange, disabled: true });

    expect(onChange).not.toBeCalled();
    option().simulate('click', event);
    expect(onChange).not.toBeCalled();
  });

  it('passes checked to checkbox button passed as button', () => {
    expect(buttonProp('checked')).toBe(false);
    component.setProps({ checked: true });
    expect(buttonProp('checked')).toBe(true);
  });

  it('passes disabled to checkbox button passed as button', () => {
    expect(buttonProp('disabled')).toBe(false);
    component.setProps({ disabled: true });
    expect(buttonProp('disabled')).toBe(true);
  });

  const option = () => component.find(Option);
  const buttonProp = (name) => option().prop('button').props[name];
});
