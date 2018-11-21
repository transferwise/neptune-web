import React from 'react';
import { shallow } from 'enzyme';

import RadioOption from '.';
import Option from '../common/Option';

describe('Radio option', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <RadioOption media={<span />} id="" name="" title="" description="" onChange={jest.fn()} />,
    );
  });

  it('passes shared props to option', () => {
    const Icon = () => <svg />;
    const sharedProps = {
      media: <Icon />,
      title: 'A title',
      description: 'A description',
      name: 'a-name',
      complex: true,
      disabled: true,
    };
    component.setProps(sharedProps);

    expect(option().props()).toEqual(expect.objectContaining(sharedProps));
  });

  it('passes id to radio button passed as button', () => {
    component.setProps({ id: 'some-id' });
    expect(buttonProp('id')).toBe('some-id');
  });

  it('passes id to radio button passed as button', () => {
    component.setProps({ name: 'a-name' });
    expect(buttonProp('name')).toBe('a-name');
  });

  it('passes checked to radio button passed as button', () => {
    expect(buttonProp('checked')).toBe(false);
    component.setProps({ checked: true });
    expect(buttonProp('checked')).toBe(true);
  });

  it('passes change handler to radio button passed as button', () => {
    const onChange = jest.fn();
    component.setProps({ onChange });
    expect(buttonProp('onChange')).toBe(onChange);
  });

  it('passes disabled to radio button passed as button', () => {
    expect(buttonProp('disabled')).toBe(false);
    component.setProps({ disabled: true });
    expect(buttonProp('disabled')).toBe(true);
  });

  const option = () => component.find(Option);
  const buttonProp = name => option().prop('button').props[name];
});
