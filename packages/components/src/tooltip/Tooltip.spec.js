import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from './';

describe('Tooltip', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      children: <button>hello</button>,
      label: <span id="label">label</span>,
    };
    component = shallow(<Tooltip {...props} />);
  });

  function hover() {
    component.simulate('mouseEnter');
  }

  function stopHover() {
    component.simulate('mouseLeave');
  }

  function focus() {
    component.simulate('focus');
  }

  function blur() {
    component.simulate('blur');
  }

  function labelVisible() {
    return component.find('.tooltip').hasClass('in');
  }

  it('renders the children given to it', () => {
    expect(component.find('button').length).toBe(1);
  });

  it('renders a label when hovered on', () => {
    expect(labelVisible()).toBe(false);
    hover();
    expect(labelVisible()).toBe(true);
    expect(component.find('#label').length).toBe(1);
    stopHover();
    expect(labelVisible()).toBe(false);
  });

  it('renders a label when focused', () => {
    expect(labelVisible()).toBe(false);
    focus();
    expect(labelVisible()).toBe(true);
    expect(component.find('#label').length).toBe(1);
    blur();
    expect(labelVisible()).toBe(false);
  });

  it('does not show the label when hovering on it instead of the element', () => {
    expect(labelVisible()).toBe(false);
    component.find('#label').simulate('mouseEnter');
    expect(labelVisible()).toBe(false);
  });

  it('is accessible', () => {
    expect(component.prop('aria-describedby')).toBeTruthy();
    expect(component.prop('aria-describedby')).toEqual(component.find('.tooltip').prop('id'));
  });
});
