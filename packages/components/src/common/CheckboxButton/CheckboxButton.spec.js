import React from 'react';
import { shallow } from 'enzyme';

import CheckboxButton from '.';

describe('Checkbox button', () => {
  let component;
  beforeEach(() => {
    component = shallow(<CheckboxButton onClick={jest.fn()} />);
  });

  describe('by default', () => {
    it('does not have checked class ', () => {
      expect(hasCheckedClass()).toBe(false);
    });

    it('has aria-pressed as false ', () => {
      expect(hasAriaPressedAsTrue()).toBe(false);
    });

    it('is not disabled ', () => {
      expect(isDisabled()).toBe(false);
    });
  });

  describe('when checked', () => {
    beforeEach(() => {
      component.setProps({ checked: true });
    });

    it('has checked class', () => {
      expect(hasCheckedClass()).toBe(true);
    });

    it('has aria-pressed as true', () => {
      expect(hasAriaPressedAsTrue()).toBe(true);
    });
  });

  it('is disabled when disabled flag is passed', () => {
    component.setProps({ disabled: true });
    expect(isDisabled()).toBe(true);
  });

  it('is disabled when readOnly flag is passed', () => {
    component.setProps({ readOnly: true });
    expect(isDisabled()).toBe(true);
  });

  it('calls click handler on click', () => {
    const onClick = jest.fn();
    component.setProps({ onClick });

    expect(onClick).not.toBeCalled();
    component.simulate('click');
    expect(onClick).toBeCalled();
  });

  const hasCheckedClass = () => component.hasClass('checked');
  const hasAriaPressedAsTrue = () => component.prop('aria-pressed');
  const isDisabled = () => component.prop('disabled');
  const isReadOnly = () => component.prop('readOnly');
});
