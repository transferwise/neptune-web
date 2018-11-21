import React from 'react';
import { shallow } from 'enzyme';

import Option from '.';

describe('Option', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Option title="" description="" media={<span />} button={<span />} />);
  });

  it('has complex class when the flag is passed', () => {
    expect(hasComplexClass()).toBe(false);
    component.setProps({ complex: true });
    expect(hasComplexClass()).toBe(true);
  });

  it('has disabled class when the flag is passed', () => {
    expect(hasDisabledClass()).toBe(false);
    component.setProps({ disabled: true });
    expect(hasDisabledClass()).toBe(true);
  });

  it('calls click handler on click and prevents default when click handler is passed', () => {
    const onClick = jest.fn();
    const preventDefault = jest.fn();
    component.setProps({ onClick });

    expect(onClick).not.toBeCalled();
    expect(preventDefault).not.toBeCalled();
    component.simulate('click', { preventDefault });
    expect(onClick).toBeCalled();
    expect(preventDefault).toBeCalled();
  });

  it('does not prevent default when no click handler is passed', () => {
    const preventDefault = jest.fn();

    component.simulate('click', { preventDefault });
    expect(preventDefault).not.toBeCalled();
  });

  it('has for attribute to label when prop is passed', () => {
    expect(htmlFor()).toBe(null);
    component.setProps({ htmlFor: 'some-id' });
    expect(htmlFor()).toBe('some-id');
  });

  it('has passed media in the circle on the left', () => {
    const Icon = () => <svg />;
    component.setProps({ media: <Icon /> });

    expect(circleContentIsElement(<Icon />)).toBe(true);
  });

  it('has passed title', () => {
    component.setProps({ title: 'A title' });
    expect(title()).toBe('A title');
  });

  it('has passed description', () => {
    component.setProps({ description: 'A description' });
    expect(description()).toBe('A description');
  });

  const hasComplexClass = () => component.hasClass('decision-complex');
  const hasDisabledClass = () => component.hasClass('disabled');
  const htmlFor = () => component.prop('htmlFor');
  const circleContentIsElement = element =>
    component
      .find('.media-left .circle')
      .childAt(0)
      .matchesElement(element);
  const title = () => component.find('h5').text();
  const description = () => component.find('p').text();
});
