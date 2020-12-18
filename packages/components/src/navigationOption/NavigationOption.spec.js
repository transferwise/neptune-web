import React from 'react';
import { shallow } from 'enzyme';
import { render } from '../test-utils';

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

    expect(option().props()).toMatchObject(sharedProps);
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

  it('tells option to render as the `as` prop when it is passed', () => {
    expect(option().prop('as')).not.toBe('label');
    component.setProps({ as: 'label' });
    expect(option().prop('as')).toBe('label');
  });

  it('does not call click handler when disabled', () => {
    const onClick = jest.fn();
    component.setProps({ onClick, disabled: true });

    expect(onClick).not.toBeCalled();
    option().simulate('click');
    expect(onClick).not.toBeCalled();
  });

  it('renders the circle when enabled', () => {
    const { container, rerender } = render(<NavigationOption title="" />);

    expect(container.querySelector('.circle')).toBeDefined();

    rerender(<NavigationOption title="" showMediaCircle={false} />);

    expect(container.querySelector('.circle')).toBeNull();
  });

  it('should pass correct class names to Option', () => {
    expect(option().props().className).toBe('tw-navigation-option');
    component.setProps({ className: 'test-class-name' });

    expect(option().props().className).toBe('tw-navigation-option test-class-name');
  });

  const option = () => component.find(Option);
});
