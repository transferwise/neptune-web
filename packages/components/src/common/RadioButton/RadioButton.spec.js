import React from 'react';
import { shallow } from 'enzyme';

import RadioButton from '.';

describe('Radio button', () => {
  let component;
  beforeEach(() => {
    component = shallow(<RadioButton name="a-name" />);
  });

  describe('by default', () => {
    it('has aria-pressed as false', () => {
      expect(buttonAriaPressed()).toBe(false);
    });

    it('has checked as false', () => {
      expect(checked()).toBe(false);
    });

    it('does not have checked class on button', () => {
      expect(buttonHasCheckedClass()).toBe(false);
    });

    it('does not have disabled input', () => {
      expect(inputIsDisabled()).toBe(false);
    });

    it('does not have disabled button', () => {
      expect(buttonIsDisabled()).toBe(false);
    });
  });

  describe('when checked', () => {
    beforeEach(() => {
      component.setProps({ checked: true });
    });

    it('has checked as true', () => {
      expect(checked()).toBe(true);
    });

    it('has aria-pressed as true', () => {
      expect(buttonAriaPressed()).toBe(true);
    });

    it('has checked class on button', () => {
      expect(buttonHasCheckedClass()).toBe(true);
    });
  });

  describe('when disabled', () => {
    beforeEach(() => {
      component.setProps({ disabled: true });
    });

    it('has disabled input', () => {
      expect(inputIsDisabled()).toBe(true);
    });

    it('has disabled button', () => {
      expect(buttonIsDisabled()).toBe(true);
    });
  });

  it('has id when passed', () => {
    component.setProps({ id: 'some-id' });
    expect(id()).toBe('some-id');
  });

  it('has passed name', () => {
    component.setProps({ name: 'a-name' });
    expect(name()).toBe('a-name');
  });

  it('has value of passed value', () => {
    component.setProps({ value: 'some-value' });
    expect(value()).toBe('some-value');
  });

  it('calls change handler with new checked on change', () => {
    const onChange = jest.fn();
    component.setProps({ onChange, value: 'some-value', checked: true });
    expect(onChange).not.toBeCalled();

    changeInput();
    expect(onChange).not.toBeCalled();

    component.setProps({ checked: false });
    changeInput();
    expect(onChange).toBeCalledWith('some-value');
  });

  const id = () => input().prop('id');
  const input = () => component.find('input');
  const name = () => input().prop('name');
  const value = () => input().prop('value');
  const inputIsDisabled = () => input().prop('disabled');
  const checked = () => input().prop('checked');
  const buttonHasCheckedClass = () => button().hasClass('checked');
  const button = () => component.find('button');
  const buttonIsDisabled = () => button().prop('disabled');
  const buttonAriaPressed = () => button().prop('aria-pressed');

  function changeInput() {
    input().simulate('change');
  }
});
