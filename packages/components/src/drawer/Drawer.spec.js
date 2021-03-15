import React from 'react';
import { shallow, mount } from 'enzyme';
import Drawer from '.';

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
  });

  it('renders slidingPanel with right props', () => {
    const slidingPanel = component.find('ForwardRef');
    expect(slidingPanel).toHaveLength(1);
    expect(slidingPanel.prop('open')).toBe(props.open);
    expect(slidingPanel.prop('position')).toBe(props.position);
  });

  it('renders dimmer  with right props', () => {
    // For some reasons Dimmer is rendered as Component
    const dimmer = component.find('ForwardRef').parent();
    expect(dimmer).toHaveLength(1);
    expect(dimmer.prop('open')).toBe(props.open);
    expect(dimmer.prop('fadeContentOnExit')).toBe(props.fadeContentOnExit);
    expect(dimmer.prop('onClose')).toBe(props.onClose);
  });

  it('renders drawer header if title is provided', () => {
    expect(component.find('.np-drawer-header--title')).toHaveLength(0);
    component.setProps({ headerTitle: 'A title' });
    expect(component.find('.np-drawer-header--title')).toHaveLength(1);
    expect(component.find('.np-drawer-header--title').text()).toBe('A title');
  });

  it('renders header with or without borders', () => {
    expect(component.find('.np-drawer-header--withborder')).toHaveLength(0);
    component.setProps({ headerTitle: 'A title' });
    expect(component.find('.np-drawer-header--withborder')).toHaveLength(1);
  });

  it('renders content if children are provided', () => {
    expect(component.find('.np-drawer-content')).toHaveLength(0);
    component.setProps({ children: 'SomeChildren' });
    expect(component.find('.np-drawer-content')).toHaveLength(1);
  });

  it('renders drawer footer if footerContent is provided', () => {
    expect(component.find('.np-drawer-footer')).toHaveLength(0);
    component.setProps({ footerContent: 'SomeContent' });
    expect(component.find('.np-drawer-footer')).toHaveLength(1);
  });

  it('adds padding ', () => {
    component.setProps({ children: 'content', footerContent: 'content' });
    expect(component.find('.np-drawer-p-x')).toHaveLength(3);
    expect(component.find('.np-drawer-p-y')).toHaveLength(1);
  });

  it('renders close button', () => {
    expect(component.find(`.np-drawer-header .close`)).toHaveLength(1);
  });

  it('calls onClose when user clicks close button', () => {
    expect(props.onClose).not.toBeCalled();
    component.find(`.np-drawer-header .close`).simulate('click');
    expect(props.onClose).toBeCalled();
  });

  it('calls onClose when user press right key on close button', () => {
    expect(props.onClose).not.toBeCalled();
    const closeButton = component.find(`.np-drawer-header .close`);
    closeButton.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN));
    expect(props.onClose).not.toBeCalled();
    closeButton.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.ESCAPE));
    expect(props.onClose).toBeCalled();
  });
});
