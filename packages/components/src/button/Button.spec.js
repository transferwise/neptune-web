import React from 'react';
import { shallow } from 'enzyme';

import Button from './';

describe('Button', () => {
  const props = {
    buttonState: 'default',
    type: 'pay',
    size: 'md',
    onClick: jest.fn(),
    label: 'Send money',
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the given string provided as the label prop', () => {
    expect(wrapper.text()).toContain(props.label);
  });

  it('has the right classes when rendered', () => {
    const button = wrapper.find('button');
    expect(button.hasClass('btn')).toBe(true);
    expect(button.hasClass('btn-md')).toBe(true);
    expect(button.hasClass('btn-success')).toBe(true);
  });

  it('is disabled if buttonState prop is disabled', () => {
    expect(wrapper.find('[disabled=true]')).toHaveLength(0);
    wrapper.setProps({ buttonState: 'disabled' });
    expect(wrapper.find('[disabled=true]')).toHaveLength(1);
  });

  it('has loading indicator when buttonState prop is loading', () => {
    expect(wrapper.find('.btn-loader')).toHaveLength(0);
    wrapper.setProps({ buttonState: 'loading' });
    expect(wrapper.find('.btn-loader')).toHaveLength(1);
  });

  it('has btn-block class when block prop set to true', () => {
    expect(wrapper.find('button').hasClass('btn-block')).toBe(false);
    wrapper.setProps({ block: true });
    expect(wrapper.find('button').hasClass('btn-block')).toBe(true);
  });

  it('calls click handler on button click if not disabled', () => {
    expect(props.onClick).not.toBeCalled();
    wrapper.simulate('click');
    expect(props.onClick).toBeCalled();
  });
});
