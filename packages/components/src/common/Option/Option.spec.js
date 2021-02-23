import React from 'react';
import { shallow } from 'enzyme';
import { render } from '../../test-utils';

import Option from '.';

describe('Option', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Option title="" content="" media={<span />} button={<span />} />);
  });

  it('does not have decision class when the flag is set to false', () => {
    expect(hasDecisonClass()).toBe(true);
    component.setProps({ decision: false });
    expect(hasDecisonClass()).toBe(false);
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

  it('has disabled attibute when the flag is passed for a button', () => {
    expect(hasDisabledAttribute()).toBe(false);
    component.setProps({ disabled: true });
    expect(hasDisabledAttribute()).toBe(false);
    component.setProps({ disabled: false, as: 'button' });
    expect(hasDisabledAttribute()).toBe(false);
    component.setProps({ disabled: true, as: 'button' });
    expect(hasDisabledAttribute()).toBe(true);
  });

  it('passes the className it is given to the element it renders', () => {
    expect(component.hasClass('some-class')).toBe(false);
    component.setProps({ className: 'some-class' });
    expect(component.hasClass('some-class')).toBe(true);
  });

  it('calls click handler on click', () => {
    const onClick = jest.fn();
    const event = { iAmAnEvent: true };
    component.setProps({ onClick });

    expect(onClick).not.toBeCalled();
    component.simulate('click', event);
    expect(onClick).toBeCalledWith(event);
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

  it('does not render the circle content with circle-inverse class when inverseMediaCircle is set to false', () => {
    expect(circleContentHasInverseClass()).toBe(true);
    component.setProps({ inverseMediaCircle: false });
    expect(circleContentHasInverseClass()).toBe(false);
  });

  it('renders the title', () => {
    const { getByText } = render(
      <Option title="Option title" content="" media={<span />} button={<span />} />,
    );

    expect(() => getByText('Option title')).not.toThrow();
  });

  it('has passed content', () => {
    component.setProps({ content: <p>A content</p> });
    expect(bodyHasElement(<p>A content</p>)).toBe(true);
  });

  it('renders as a label by default', () => {
    expect(mainComponentTag()).toBe('label');
  });

  it('renders as the tag that you pass it', () => {
    component.setProps({ as: 'a', href: 'https://example.com' });
    expect(mainComponentTag()).toBe('a');
  });

  it('does not render the circle if media not passed', () => {
    expect(circle().exists()).toBe(true);
    component.setProps({ media: null });
    expect(circle().exists()).toBe(false);
  });

  it('passes href to the underlying component if passed', () => {
    expect(component.prop('href')).toBeFalsy();
    component.setProps({ href: 'https://example.com' });
    expect(component.prop('href')).toBe('https://example.com');
  });

  const hasDecisonClass = () => component.hasClass('decision');
  const hasComplexClass = () => component.hasClass('decision-complex');
  const hasDisabledClass = () => component.hasClass('disabled');
  const hasDisabledAttribute = () => component.prop('disabled');
  const htmlFor = () => component.prop('htmlFor');
  const circle = () => component.find('.media-left');
  const circleContent = () => component.find('.media-left .circle');
  const circleContentHasInverseClass = () => circleContent().hasClass('circle-inverse');
  const circleContentIsElement = (element) => circleContent().childAt(0).matchesElement(element);
  const mainComponentTag = () => component.name();
  const bodyHasElement = (element) =>
    component.find('.media-body').containsMatchingElement(element);
});
