import React from 'react';
import { shallow, mount } from 'enzyme';

import Popover from '.';
import { getPlacement, getPopoverPosition } from './positioning';

jest.mock('./positioning');

describe('Popover', () => {
  let component;
  beforeEach(() => {
    getPlacement.mockReturnValue('');
    getPopoverPosition.mockReturnValue({});

    component = shallow(
      <Popover content="Some content.">
        <button id="trigger">Trigger</button>
      </Popover>,
    );
  });

  it('has passed trigger as a child', () => {
    expect(trigger().exists()).toBe(true);
  });

  it('decorates passed trigger with accessibility props', () => {
    expect(trigger().prop('data-toggle')).toBe('popover');
    expect(trigger().prop('role')).toBe('button');
    expect(trigger().prop('tabIndex')).toBe(0);
  });

  it('wraps passed child in a span with accessibility props when child is a string', () => {
    component = shallow(<Popover content="Some content.">Just a simple string</Popover>);

    const createdTrigger = component.find('span');

    expect(createdTrigger.text()).toBe('Just a simple string');
    expect(createdTrigger.prop('data-toggle')).toBe('popover');
    expect(createdTrigger.prop('role')).toBe('button');
    expect(createdTrigger.prop('tabIndex')).toBe(0);
  });

  it('has content', () => {
    component.setProps({ content: 'A content.' });
    expect(content().text()).toBe('A content.');
  });

  it('has title if passed', () => {
    expect(title().exists()).toBe(false);

    component.setProps({ title: 'A title' });

    expect(title().exists()).toBe(true);
    expect(title().text()).toBe('A title');
  });

  it('is closed by default', () => {
    expect(popoverIsOpen()).toBe(false);
  });

  it('opens on click', () => {
    expect(popoverIsOpen()).toBe(false);
    clickPopoverTrigger();
    expect(popoverIsOpen()).toBe(true);
  });

  it('closes on outside click when open', () => {
    component = mount(
      <Popover content="Some content.">
        <button id="trigger">Trigger</button>
      </Popover>,
    );
    clickPopoverTrigger();
    expect(popoverIsOpen()).toBe(true);

    clickOutsideOfPopover();
    expect(popoverIsOpen()).toBe(false);
  });

  it('does not have document listener when closed', () => {
    component = mount(
      <Popover content="Some content.">
        <button id="trigger">Trigger</button>
      </Popover>,
    );
    jest.spyOn(component.instance(), 'closePopoverOnOutsideClick');
    const listener = component.instance().closePopoverOnOutsideClick;

    clickPopoverTrigger();
    expect(listener).not.toBeCalled();

    clickOutsideOfPopover();
    expect(listener).toBeCalled();

    listener.mockClear();
    clickOutsideOfPopover();
    expect(listener).not.toBeCalled();
  });

  it('removes document listener when unmounted', () => {
    component = mount(
      <Popover content="Some content.">
        <button id="trigger">Trigger</button>
      </Popover>,
    );
    jest.spyOn(component.instance(), 'closePopoverOnOutsideClick');
    const listener = component.instance().closePopoverOnOutsideClick;

    clickPopoverTrigger();
    component.unmount();
    clickOutsideOfPopover();
    expect(listener).not.toBeCalled();
  });

  it('gets placement for popover element and preferred placement', () => {
    component = mount(
      <Popover content="Some content.">
        <button id="trigger">Trigger</button>
      </Popover>,
    );
    component.setProps({ preferredPlacement: Popover.Placement.BOTTOM });

    expect(getPlacement).toBeCalledWith(popover().getDOMNode(), Popover.Placement.BOTTOM);
  });

  it('has placement class', () => {
    getPlacement.mockReturnValue('left-top');
    component.rerender();
    expect(popover().hasClass('left-top')).toBe(true);
  });

  it('gets position for popover element and corrected placement', () => {
    getPlacement.mockReturnValue(Popover.Placement.RIGHT_TOP);
    component = mount(
      <Popover content="Some content.">
        <button id="trigger">Trigger</button>
      </Popover>,
    );
    component.setProps({ preferredPlacement: Popover.Placement.LEFT_TOP });

    expect(getPopoverPosition).toBeCalledWith(popover().getDOMNode(), Popover.Placement.RIGHT_TOP);
  });

  it('has position', () => {
    getPopoverPosition.mockReturnValue({ top: 50, left: 100 });
    component.rerender();
    expect(popover().prop('style')).toEqual({ top: 50, left: 100 });
  });

  function popover() {
    return component.find('.popover');
  }

  function title() {
    return component.find('.popover-title');
  }

  function content() {
    return component.find('.popover-content');
  }

  function popoverIsOpen() {
    return !popover().hasClass('scale-down');
  }

  function trigger() {
    return component.find('#trigger');
  }

  function clickPopoverTrigger() {
    trigger().simulate('click');
  }

  function clickOutsideOfPopover() {
    document.querySelector('body').click();
    component.update();
  }
});
