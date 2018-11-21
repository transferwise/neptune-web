import React from 'react';
import { shallow } from 'enzyme';

import Radio from './';
import RadioButton from '../common/RadioButton';

describe('Radio', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      label: 'hello, i am a radio',
      name: 'radio name',
      onChange: jest.fn(),
      checked: false,
      disabled: false,
    };
    component = shallow(<Radio {...props} />);
  });

  it('displays the given label', () => {
    expect(component.text()).toContain(props.label);
  });

  it('has id as label for prop', () => {
    component.setProps({ id: 'some-id' });
    expect(component.find('label').prop('htmlFor')).toBe('some-id');
  });

  it('passes radio button id', () => {
    component.setProps({ id: 'some-id' });
    expect(radioButton().prop('id')).toBe('some-id');
  });

  it('passes radio button name', () => {
    component.setProps({ name: 'a-name' });
    expect(radioButton().prop('name')).toBe('a-name');
  });

  it('passes radio button checked', () => {
    expect(radioButton().prop('checked')).toBe(false);
    component.setProps({ checked: true });
    expect(radioButton().prop('checked')).toBe(true);
  });

  it('passes radio button change handler', () => {
    const onChange = jest.fn();
    component.setProps({ onChange });
    expect(radioButton().prop('onChange')).toBe(onChange);
  });

  it('passes radio button disabled', () => {
    expect(radioButton().prop('disabled')).toBe(false);
    component.setProps({ disabled: true });
    expect(radioButton().prop('disabled')).toBe(true);
  });

  function radioButton() {
    return component.find(RadioButton);
  }
});
