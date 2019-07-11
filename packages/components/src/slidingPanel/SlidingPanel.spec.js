import React from 'react';
import { shallow, mount } from 'enzyme';
import SlidingPanel, { EXIT_ANIMATION } from './SlidingPanel';

describe('SlidingPanel', () => {
  let component;
  const props = {
    open: true,
    position: 'left',
    children: null,
    slidingPanelPositionFixed: false,
    showSlidingPanelBorder: false,
  };

  it('renders with right props', () => {
    component = mount(<SlidingPanel {...props} />);
    expect(component.find(SlidingPanel)).toHaveLength(1);
    expect(component.find(SlidingPanel).props()).toEqual({ ...props });
  });

  it('renders CSSTransition with right props', () => {
    component = shallow(<SlidingPanel {...props} />);

    expect(cssTransition()).toHaveLength(1);

    expect(cssTransition().props()).toEqual({
      in: true,
      appear: true,
      timeout: {
        enter: 0,
        exit: EXIT_ANIMATION,
      },
      classNames: 'sliding-panel--open-left sliding-panel',
      unmountOnExit: true,
      children: <div className="sliding-panel" children={null} />,
    });
  });

  it('adds fixed class', () => {
    component = shallow(<SlidingPanel {...props} slidingPanelPositionFixed />);
    expect(cssTransition().prop('classNames')).toBe(
      'sliding-panel--open-left sliding-panel--fixed sliding-panel',
    );
  });

  it('adds border classes if showSlidingPanelBorder is set to true', () => {
    component = shallow(<SlidingPanel {...props} showSlidingPanelBorder />);
    expect(cssTransition().prop('classNames')).toBe(
      'sliding-panel--open-left sliding-panel--border-left sliding-panel',
    );
    component = shallow(<SlidingPanel {...props} showSlidingPanelBorder={false} position="left" />);
    expect(cssTransition().prop('classNames')).toBe('sliding-panel--open-left sliding-panel');

    component = shallow(<SlidingPanel {...props} showSlidingPanelBorder position="top" />);
    expect(cssTransition().prop('classNames')).toBe(
      'sliding-panel--open-top sliding-panel--border-top sliding-panel',
    );
  });

  const cssTransition = () => component.find('CSSTransition');
});
