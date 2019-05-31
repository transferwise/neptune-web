import React from 'react';
import { shallow } from 'enzyme';
import Chevron from '.';
import { Orientation, Size } from './Chevron';

describe('Option', () => {
  const props = {
    orientation: Orientation.RIGHT,
    size: Size.SMALL,
    flip: false,
    animate: false,
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Chevron {...props} />);
  });

  it('has right classes when rendered with props', () => {
    expect(wrapper.find('.chevron-container').hasClass('right')).toEqual(true);
    expect(wrapper.find('.chevron-container').hasClass('sm')).toEqual(true);

    expect(wrapper.find('.chevron-container').hasClass('animate')).toEqual(false);
    expect(wrapper.find('.chevron-container').hasClass('flip')).toEqual(false);
  });

  it('has animate class when animate prop is true', () => {
    expect(wrapper.find('.chevron-container').hasClass('animate')).toEqual(false);
    wrapper.setProps({ animate: true });
    expect(wrapper.find('.chevron-container').hasClass('animate')).toEqual(true);
  });

  it('has flip class when flip prop is true', () => {
    expect(wrapper.find('.chevron-container').hasClass('flip')).toEqual(false);
    wrapper.setProps({ flip: true });
    expect(wrapper.find('.chevron-container').hasClass('flip')).toEqual(true);
  });
});
