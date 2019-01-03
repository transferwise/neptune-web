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
    expect(link().text()).toBe('5');
  });

  it('shows title when provided (instead of item value)', () => {
    component.setProps({ title: 'five' });
    expect(link().text()).toBe('five');
  });

  it('sets longTitle as link title attribute', () => {
    expect(link().prop('title')).toBeNull();
    component.setProps({ longTitle: '27/12/1990' });
    expect(link().prop('title')).toBe('27/12/1990');
  });

  it('disables the link', () => {
    component.setProps({ disabled: true });
    expect(link().prop('disabled')).toBe(true);
    expect(props.onClick).not.toBeCalled();
    link().simulate('click', { preventDefault: () => {} });
    expect(props.onClick).not.toBeCalled();
  });

  it('highlights active link', () => {
    expect(link().hasClass('active')).toBe(false);
    component.setProps({ active: true });
    expect(link().hasClass('active')).toBe(true);
  });

  it('highlights today', () => {
    expect(link().hasClass('today')).toBe(false);
    component.setProps({ today: true });
    expect(link().hasClass('today')).toBe(true);
  });

  it('calls click handler on click', () => {
    link().simulate('click', { preventDefault: () => {} });
    expect(props.onClick).toBeCalledWith(5);
  });

  const link = () => component.find('a');
});
