import React from 'react';
import { shallow, mount } from 'enzyme';

import Popover from '.';
import { getPlacement, getPositionRelativeToParent } from './positioning';
import { wrapInDOMElementIfNecessary } from './DOMWrapping';
import { fakeKeyDownEventForKey } from '../common/fakeEvents';
import KEY_CODES from '../common/keyCodes';

jest.mock('./positioning');
jest.mock('./DOMWrapping');

describe('Popover', () => {
  let component;
  beforeEach(() => {
    getPlacement.mockReturnValue('');
    getPositionRelativeToParent.mockReturnValue({});
    wrapInDOMElementIfNecessary.mockImplementation((node) => node);

    component = shallow(
      <Popover content="Some content.">
        <button id="trigger">Trigger</button>
      </Popover>,
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('has passed trigger as a child', () => {
    expect(trigger().exists()).toBe(true);
  });

  it('decorates passed trigger with accessibility props', () => {
    expect(trigger().prop('data-toggle')).toBe('popover');
    expect(trigger().prop('role')).toBe('button');
    expect(trigger().prop('tabIndex')).toBe(0);
    expect(trigger().prop('aria-expanded')).toBe(false);
  });

  it('decorates passed trigger with custom tabIndex if passed', () => {
    component.setProps({ containsFocusableElement: true });

    expect(trigger().prop('role')).toBeUndefined();
    expect(trigger().prop('tabIndex')).toBeUndefined();
    expect(trigger().prop('aria-expanded')).toBeUndefined();
  });

  it('wraps passed child in dom element if necessary', () => {
    wrapInDOMElementIfNecessary.mockImplementation((node) => (
      <span className="wrapped">{node}</span>
    ));

    component = shallow(<Popover content="Some content.">Just a string</Popover>);

    expect(trigger().matchesElement(<span className="wrapped">Just a string</span>)).toBe(true);
  });

  it('has content', () => {
    component.setProps({ content: 'A content.' });
    expect(content().text()).toBe('A content.');
  });

  it('calls content with close and isOpen props if it is a function', () => {
    const contentMock = jest.fn();

    component.setProps({ content: contentMock });
    expect(contentMock).toHaveBeenCalledWith({ close: expect.any(Function), isOpen: false });
  });

  it('closes when close is called from content', () => {
    const contentMock = jest.fn();

    component.setProps({ content: contentMock });
    expect(popoverIsOpen()).toBe(false);
    clickPopoverTrigger();
    expect(popoverIsOpen()).toBe(true);
    contentMock.mock.calls[0][0].close();
    expect(popoverIsOpen()).toBe(false);
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

  it('toggles on click', () => {
    component = mount(
      <Popover content="Some content.">
        <button id="trigger">Trigger</button>
      </Popover>,
    );
    expect(popoverIsOpen()).toBe(false);
    clickPopoverTrigger();
    expect(popoverIsOpen()).toBe(true);
    clickPopoverTrigger();
    expect(popoverIsOpen()).toBe(false);
  });

  it('opens when Enter is pressed while active on a non-button', () => {
    component = mount(
      <Popover content="Some content.">
        <span id="trigger">Trigger</span>
      </Popover>,
    );

    expect(popoverIsOpen()).toBe(false);
    trigger().simulate('keyUp', fakeKeyDownEventForKey(KEY_CODES.ENTER));
    expect(popoverIsOpen()).toBe(true);
  });

  it('ignores keyUp event on a button', () => {
    component = mount(
      <Popover content="Some content.">
        <button id="trigger">Trigger</button>
      </Popover>,
    );

    expect(popoverIsOpen()).toBe(false);
    trigger().simulate('keyUp', fakeKeyDownEventForKey(KEY_CODES.ENTER));
    expect(popoverIsOpen()).toBe(false);
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

    expect(getPositionRelativeToParent).toBeCalledWith(
      popover().getDOMNode(),
      Popover.Placement.RIGHT_TOP,
    );
  });

  it('has position', () => {
    getPositionRelativeToParent.mockReturnValue({ top: 50, left: 100 });
    component.rerender();
    expect(popover().prop('style')).toEqual({ top: 50, left: 100 });
  });

  it('ensures namespaced classNames can be provided and used ', () => {
    const styles = { popover: 'popover_TWISAWESOME125' };
    expect(component.find('.popover').exists()).toBe(true);

    component.setProps({ classNames: styles });
    expect(component.find('.popover').exists()).toBe(false);
    expect(component.find('.popover_TWISAWESOME125').exists()).toBe(true);
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
    return component.childAt(0);
  }

  function clickPopoverTrigger() {
    trigger().simulate('click');
  }

  function clickOutsideOfPopover() {
    document.querySelector('body').click();
    component.update();
  }
});
