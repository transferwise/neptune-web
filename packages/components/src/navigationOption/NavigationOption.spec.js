import React from 'react';
import { shallow } from 'enzyme';

import NavigationOption from '.';
import Option from '../common/Option';

describe('Navigation option', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <NavigationOption media={<span />} title="" description="" onClick={jest.fn()} />,
    );
  });

  it('passes shared props to option', () => {
    const Icon = () => <svg />;
    const sharedProps = {
      media: <Icon />,
      title: 'A title',
      description: 'A description',
      complex: true,
      disabled: true,
    };
    component.setProps(sharedProps);

    expect(option().props()).toEqual(expect.objectContaining(sharedProps));
  });

  it('calls click handler on option click when not disabled', () => {
    const onClick = jest.fn();
    component.setProps({ onClick });

    expect(onClick).not.toBeCalled();
    option().simulate('click');
    expect(onClick).toBeCalled();
  });

  it('does not call click handler when disabled', () => {
    const onClick = jest.fn();
    component.setProps({ onClick, disabled: true });

    expect(onClick).not.toBeCalled();
    option().simulate('click');
    expect(onClick).not.toBeCalled();
  });

  it('passes disabled to chevron button', () => {
    expect(buttonProp('disabled')).toBe(false);
    component.setProps({ disabled: true });
    expect(buttonProp('disabled')).toBe(true);
  });

  const option = () => component.find(Option);
  const buttonProp = name => option().prop('button').props[name];
});
