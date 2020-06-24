import React from 'react';
import { shallow } from 'enzyme';

import TableLink from '.';

describe('TableLink', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      item: 5,
      type: 'day',
      active: false,
      disabled: false,
      today: false,
      onClick: jest.fn(),
    };
    component = shallow(<TableLink {...props} />);
  });

  it('shows item value', () => {
    expect(button().text()).toBe('5');
  });

  it('shows title when provided (instead of item value)', () => {
    component.setProps({ title: 'five' });
    expect(button().text()).toBe('five');
  });

  it('disables the link', () => {
    component.setProps({ disabled: true });
    expect(button().prop('disabled')).toBe(true);
    expect(props.onClick).not.toBeCalled();
    button().simulate('click', { preventDefault: () => {} });
    expect(props.onClick).not.toBeCalled();
  });

  it('highlights active link', () => {
    expect(button().hasClass('active')).toBe(false);
    component.setProps({ active: true });
    expect(button().hasClass('active')).toBe(true);
  });

  it('highlights today', () => {
    expect(button().hasClass('today')).toBe(false);
    component.setProps({ today: true });
    expect(button().hasClass('today')).toBe(true);
  });

  it('calls click handler on click', () => {
    button().simulate('click', { preventDefault: () => {} });
    expect(props.onClick).toBeCalledWith(5);
  });

  const button = () => component.find('button');
});
