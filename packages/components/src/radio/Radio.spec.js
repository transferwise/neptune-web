import React from 'react';
import { shallow } from 'enzyme';

import Radio from './';

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
    expect(component.text()).toEqual(props.label);
  });

  it('keeps a hidden input with the given name', () => {
    const radioInput = () => component.find('input[type="radio"]');
    expect(radioInput().hasClass('sr-only')).toBe(true);
    expect(radioInput().prop('name')).toEqual(props.name);
    expect(radioInput().prop('value')).toEqual(props.checked);
    expect(radioInput().prop('disabled')).toEqual(props.disabled);
  });
});
