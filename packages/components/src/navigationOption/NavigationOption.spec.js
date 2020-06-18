import React from 'react';
import { shallow } from 'enzyme';

import NavigationOption from '.';
import Option from '../common/Option';

describe('Navigation option', () => {
  let component;
  beforeEach(() => {
    component = shallow(<NavigationOption title="" onClick={jest.fn()} />);
  });

  it('passes shared props to option', () => {
    const Icon = () => <svg />;
    const sharedProps = {
      media: <Icon />,
      title: 'A title',
      content: 'A content',
      complex: true,
      disabled: true,
      href: 'https://example.com',
    };
    component.setProps(sharedProps);

    expect(option().props()).toEqual(expect.objectContaining(sharedProps));
  });

  it('calls click handler on option click when not disabled', () => {
    const onClick = jest.fn();
    component.setProps({ onClick });

    expect(onClick).not.toBeCalled();
    option().simulate('click', { event: true });
    expect(onClick).toBeCalledWith({ event: true });
  });

  it('tells option to render as an anchor when a href is passed', () => {
    expect(option().prop('as')).not.toBe('a');
    component.setProps({ href: 'https://example.com' });
    expect(option().prop('as')).toBe('a');
  });

  it('does not call click handler when disabled', () => {
    const onClick = jest.fn();
    component.setProps({ onClick, disabled: true });

    expect(onClick).not.toBeCalled();
    option().simulate('click');
    expect(onClick).not.toBeCalled();
  });

  const option = () => component.find(Option);
});
