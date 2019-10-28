import React from 'react';
import { mount } from 'enzyme';
import { Spring } from 'react-spring/renderprops.cjs';
import { getElasticDragDifference } from './utils';

import Tabs from './Tabs';
import Tab from './Tab';
import TabPanel from './TabPanel';

jest.useFakeTimers();

jest.mock('react-spring/renderprops.cjs', () => ({
  Spring: jest.fn(props => {
    const { children, to, onRest, config } = props;

    return children({
      config,
      onRest,
      ...to, // Assuming Spring is doing the right stuff and just pass in the end result as props
    });
  }),
}));

jest.useFakeTimers();

describe('Tabs', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      tabs: generateTabs(),
      changeTabOnSwipe: true,
      name: 'test',
      selected: 0,
      onTabSelect: jest.fn(),
      className: 'custom-class-name',
    };

    jest.spyOn(HTMLDivElement.prototype, 'getBoundingClientRect').mockReturnValue({ width: 300 });

    component = mount(<Tabs {...props} />);

    jest.clearAllMocks();
  });

  it('renders with right props', () => {
    expect(component.find(Tabs)).toHaveLength(1);
    expect(component.find(Tabs).props()).toEqual({ ...props });
  });

  it('uses a ref to get the components width', () => {
    expect(component.instance().containerWidth).toBe(300);
  });

  it('passes the x position to translate to Spring', () => {
    component.setProps({ selected: 1 });

    component.update();

    expect(component.find(Spring).props()).toEqual(
      expect.objectContaining({
        config: { clamp: true, precision: 0.01, velocity: expect.any(Number) },
        from: { transform: 'translateX(0px)' },
        to: { transform: 'translateX(-300px)' },
      }),
    );
  });

  it('calls spring with precise transforms when dragging', () => {
    component.simulate('touchstart', createStartTouchEventObject({ x: 0, y: 0 }));
    component.simulate('touchmove', createMoveTouchEventObject({ x: -10, y: 0 }));

    expect(component.find(Spring).props()).toEqual(
      expect.objectContaining({
        config: { clamp: true, precision: 1, velocity: expect.any(Number) },
        to: { transform: 'translateX(-10px)' },
      }),
    );
  });

  it('resets back to the current selected tab if not dragged beyond half the container width', () => {
    component.simulate('touchstart', createStartTouchEventObject({ x: 0, y: 0 }));
    component.simulate('touchmove', createMoveTouchEventObject({ x: -10, y: 0 }));

    expect(component.find(Spring).props()).toEqual(
      expect.objectContaining({
        to: { transform: 'translateX(-10px)' },
      }),
    );

    component.simulate('touchend', createMoveTouchEventObject({ x: -10, y: 0 }));

    expect(component.find(Spring).props()).toEqual(
      expect.objectContaining({
        from: { transform: 'translateX(-10px)' },
        to: { transform: 'translateX(0px)' },
      }),
    );
  });

  it('applies resistence to the touchmove when on the first/last tab', () => {
    component.simulate('touchstart', createStartTouchEventObject({ x: 0, y: 0 }));
    component.simulate('touchmove', createMoveTouchEventObject({ x: 10, y: 0 }));

    expect(component.find(Spring).props()).toEqual(
      expect.objectContaining({
        to: { transform: `translateX(${getElasticDragDifference(10)}px)` },
      }),
    );
  });

  it('disables vertical movement after swiping', () => {
    expect(component.state().isSwiping).toBe(false);
    component.simulate('touchstart', createStartTouchEventObject({ x: 0, y: 0 }));
    component.simulate('touchmove', createMoveTouchEventObject({ x: 10, y: 0 }));
    expect(component.state().isSwiping).toBe(true);
    component.simulate('touchend', createMoveTouchEventObject({ x: 10, y: 0 }));
    expect(component.state().isSwiping).toBe(false);
  });

  it('disables horizontal movement after scrolling', () => {
    expect(component.state().isScrolling).toBe(false);
    component.simulate('touchstart', createStartTouchEventObject({ x: 0, y: 0 }));
    component.simulate('touchmove', createMoveTouchEventObject({ x: 0, y: 10 }));
    expect(component.state().isScrolling).toBe(true);
    component.simulate('touchend', createMoveTouchEventObject({ x: 0, y: 10 }));
    expect(component.state().isScrolling).toBe(false);
  });

  it('calls onTabSelect when switching tabs', () => {
    component
      .find(Tab)
      .at(2)
      .simulate('click');
    expect(props.onTabSelect).toHaveBeenCalledTimes(1);

    component.simulate('touchstart', createStartTouchEventObject({ x: 0, y: 0 }));
    component.simulate('touchmove', createMoveTouchEventObject({ x: -160, y: 0 }));
    component.simulate('touchend', createMoveTouchEventObject({ x: -175, y: 0 }));

    expect(props.onTabSelect).toHaveBeenCalledTimes(2);
  });

  it('renders the correct amount of tab titles and panels', () => {
    const enabledTabsLength = props.tabs.filter(({ disabled }) => !disabled).length;

    expect(component.find(TabPanel).length).toBe(enabledTabsLength);
    expect(component.find(Tab).length).toBe(props.tabs.length);
  });

  it('updates transforms properly when changing tabs', () => {
    const getLineStyles = () => getComputedStyle(component.find('.tabs__line').getDOMNode());
    const getSliderStyles = () => getComputedStyle(component.find('.tabs__slider').getDOMNode());
    props = {
      ...props,
      tabs: generateTabs([false, true, false, false, false]),
    };
    component = mount(<Tabs {...props} />);

    expect(getLineStyles().getPropertyValue('transform')).toBe('translateX(0)');
    expect(getSliderStyles().getPropertyValue('transform')).toBe('translateX(0px)');

    component.setProps({ selected: 1 });
    expect(getLineStyles().getPropertyValue('transform')).toBe('translateX(200%)');
    expect(getSliderStyles().getPropertyValue('transform')).toBe('translateX(-300px)');

    component.setProps({ selected: 99 });
    expect(getLineStyles().getPropertyValue('transform')).toBe('translateX(400%)');
    expect(getSliderStyles().getPropertyValue('transform')).toBe('translateX(-900px)');

    component.setProps({ selected: 2 });
    expect(getLineStyles().getPropertyValue('transform')).toBe('translateX(300%)');
    expect(getSliderStyles().getPropertyValue('transform')).toBe('translateX(-600px)');

    component.setProps({ selected: 3 });
    expect(getLineStyles().getPropertyValue('transform')).toBe('translateX(400%)');
    expect(getSliderStyles().getPropertyValue('transform')).toBe('translateX(-900px)');

    component.setProps({ selected: 4 });
    expect(getLineStyles().getPropertyValue('transform')).toBe('translateX(400%)');
    expect(getSliderStyles().getPropertyValue('transform')).toBe('translateX(-900px)');
  });
});

const defaultDisableds = [false, true, false];

function generateTabs(disableds = defaultDisableds) {
  return disableds.map((disabled, index) => ({
    disabled,
    title: `Title ${index}`,
    content: <p>Content {index}</p>,
  }));
}

function createClientXY(x, y) {
  return { clientX: x, clientY: y };
}

export function createStartTouchEventObject({ x = 0, y = 0 }) {
  return { nativeEvent: { touches: [createClientXY(x, y)] } };
}

export function createMoveTouchEventObject({ x = 0, y = 0 }) {
  return {
    nativeEvent: { changedTouches: [createClientXY(x, y)] },
  };
}
