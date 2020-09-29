import React from 'react';
import { shallow, mount } from 'enzyme';
import Drawer from '.';

import { addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';
import { fakeKeyDownEventForKey } from '../common/fakeEvents';
import KEY_CODES from '../common/keyCodes';

jest.mock('../common');
jest.useFakeTimers();

describe('Drawer', () => {
  let component;
  const props = {
    open: true,
    position: 'left',
    onClose: jest.fn(),
    children: null,
    headerTitle: null,
    footerContent: null,
  };

  beforeEach(() => {
    component = shallow(<Drawer {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('updating the body class', () => {
    beforeEach(() => {
      component = mount(<Drawer {...props} open={false} />);
    });

    it('removes no-scroll class upon removal if the drawer was sopen', () => {
      expect(removeNoScrollBodyClass).not.toHaveBeenCalled();
      component.unmount();
      expect(removeNoScrollBodyClass).not.toHaveBeenCalled();

      component = mount(<Drawer {...props} open />);

      component.unmount();
      expect(removeNoScrollBodyClass).toHaveBeenCalled();
    });

    it('adds and removes the no-scroll class upon enter and exit', () => {
      expect(addNoScrollBodyClass).not.toBeCalled();

      component.setProps({ open: true });
      jest.runAllTimers();

      expect(addNoScrollBodyClass).toBeCalled();
      expect(removeNoScrollBodyClass).not.toBeCalled();

      component.setProps({ open: false });
      jest.runAllTimers();

      expect(removeNoScrollBodyClass).toBeCalled();
    });
  });

  it('renders slidingPanel with right props', () => {
    const slidingPanel = component.find('SlidingPanel');
    expect(slidingPanel).toHaveLength(1);
    expect(slidingPanel.prop('open')).toBe(props.open);
    expect(slidingPanel.prop('position')).toBe(props.position);
  });

  it('renders dimmer  with right props', () => {
    // For some reasons Dimmer is rendered as Component
    const dimmer = component.find('SlidingPanel').parent();
    expect(dimmer).toHaveLength(1);
    expect(dimmer.prop('open')).toBe(props.open);
    expect(dimmer.prop('fadeContentOnExit')).toBe(props.fadeContentOnExit);
    expect(dimmer.prop('onClose')).toBe(props.onClose);
  });

  it('renders drawer header if title is provided', () => {
    expect(component.find('.drawer-header--title')).toHaveLength(0);
    component.setProps({ headerTitle: 'A title' });
    expect(component.find('.drawer-header--title')).toHaveLength(1);
    expect(component.find('.drawer-header--title').text()).toBe('A title');
  });

  it('renders header with or without borders', () => {
    expect(component.find('.drawer-header--withborder')).toHaveLength(0);
    component.setProps({ headerTitle: 'A title' });
    expect(component.find('.drawer-header--withborder')).toHaveLength(1);
  });

  it('renders content if children are provided', () => {
    expect(component.find('.drawer-content')).toHaveLength(0);
    component.setProps({ children: 'SomeChildren' });
    expect(component.find('.drawer-content')).toHaveLength(1);
  });

  it('renders drawer footer if footerContent is provided', () => {
    expect(component.find('.drawer-footer')).toHaveLength(0);
    component.setProps({ footerContent: 'SomeContent' });
    expect(component.find('.drawer-footer')).toHaveLength(1);
  });

  it('adds padding ', () => {
    component.setProps({ children: 'content', footerContent: 'content' });
    expect(component.find('.drawer-p-x')).toHaveLength(3);
    expect(component.find('.drawer-p-y')).toHaveLength(1);
  });

  it('renders close button', () => {
    expect(component.find(`.drawer-header .close`)).toHaveLength(1);
  });

  it('calls onClose when user clicks close button', () => {
    expect(props.onClose).not.toBeCalled();
    component.find(`.drawer-header .close`).simulate('click');
    expect(props.onClose).toBeCalled();
  });

  it('calls onClose when user press right key on close button', () => {
    expect(props.onClose).not.toBeCalled();
    const closeButton = component.find(`.drawer-header .close`);
    closeButton.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN));
    expect(props.onClose).not.toBeCalled();
    closeButton.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.ESCAPE));
    expect(props.onClose).toBeCalled();
  });
});
