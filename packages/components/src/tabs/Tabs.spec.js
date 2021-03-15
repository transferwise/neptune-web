import React from 'react';
import { mount } from 'enzyme';
import { Spring } from 'react-spring/renderprops.cjs';
import { getElasticDragDifference } from './utils';

import Tabs from './Tabs';
import Tab from './Tab';
import TabPanel from './TabPanel';

jest.useFakeTimers();

jest.mock('react-spring/renderprops.cjs', () => ({
  Spring: jest.fn((props) => {
    const { children, to, onRest, config } = props;

    // Queue this behind a timer so we can control when it runs
    setTimeout(onRest, 0);

    return children({
      config,
      onRest,
      ...to, // Assuming Spring is doing the right stuff and just pass in the end result as props
    });
  }),
}));

describe('Tabs', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      animatePanelsOnClick: true,
      tabs: generateTabs(),
      changeTabOnSwipe: true,
      name: 'test',
      headerWidth: 'block',
      selected: 0,
      transitionSpacing: 'default',
      onTabSelect: jest.fn(),
      className: 'custom-class-name',
    };

    jest.spyOn(HTMLLIElement.prototype, 'getBoundingClientRect').mockReturnValue({ width: 60 });
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

  it('applies resistence when transitioning toward disabled tabs when the selected tab is the last enabled one', () => {
    component = mount(<Tabs {...props} tabs={generateTabs([true, false, false])} selected={1} />);

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
    component.find(Tab).at(2).simulate('click');
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

  it('does not animate when a tab before the selected tab goes from disabled to enabled', () => {
    component.setProps({ selected: 2 });
    expect(component.state('isAnimating')).toBe(true);

    triggerSpringOnRest();
    expect(component.state('isAnimating')).toBe(false);

    component.setProps({ tabs: generateTabs([false, false, false]) });
    expect(component.state('isAnimating')).toBe(false);
  });

  it('does not animate when animatePanels is false', () => {
    component.setProps({ animatePanelsOnClick: false, selected: 2 });
    expect(component.state('isAnimating')).toBe(false);
  });

  describe('spacing between panels when animating', () => {
    it('doesnt render a spacer when no transitionSpacing is provided', () => {
      component.setState({ isAnimating: true });
      expect(leftSpacer(component).children()).toHaveLength(0);
      expect(leftSpacer(component).children()).toHaveLength(0);

      component.setProps({ transitionSpacing: Tabs.SpacerSizes.LARGE });

      expect(leftSpacer(component).children()).toHaveLength(1);
      expect(rightSpacer(component).children()).toHaveLength(1);
    });

    it('adds the spacers on either side of the selected panel', () => {
      expect(component.find('.tabs__slider').childAt(0).is('[id="left-spacer"]')).toBe(true);

      expect(component.find('.tabs__slider').childAt(2).is('[id="right-spacer"]')).toBe(true);
    });

    it('sets the width of the spacer based on the transitionSpacing provided', () => {
      const spacerWidth = () => getComputedStyle(leftSpacer(component).getDOMNode()).width;

      component.setState({ isAnimating: true });

      component.setProps({ transitionSpacing: Tabs.SpacerSizes.EXTRA_SMALL });
      expect(spacerWidth()).toBe('8px');

      component.setProps({ transitionSpacing: Tabs.SpacerSizes.SMALL });
      expect(spacerWidth()).toBe('16px');

      component.setProps({ transitionSpacing: Tabs.SpacerSizes.MEDIUM });
      expect(spacerWidth()).toBe('24px');

      component.setProps({ transitionSpacing: Tabs.SpacerSizes.LARGE });
      expect(spacerWidth()).toBe('32px');
    });
  });

  describe('updating the translate values', () => {
    beforeEach(() => {
      props = {
        ...props,
        tabs: generateTabs([false, true, false, false, false]),
      };
      component = mount(<Tabs {...props} />);
    });

    test.each`
      selected | headerWidth               | lineTranslateX | sliderTranslateX
      ${1}     | ${Tabs.HeaderWidth.BLOCK} | ${'100%'}      | ${'-300px'}
      ${99}    | ${Tabs.HeaderWidth.BLOCK} | ${'400%'}      | ${'-900px'}
      ${3}     | ${Tabs.HeaderWidth.BLOCK} | ${'300%'}      | ${'-600px'}
      ${4}     | ${Tabs.HeaderWidth.BLOCK} | ${'400%'}      | ${'-900px'}
      ${5}     | ${Tabs.HeaderWidth.BLOCK} | ${'400%'}      | ${'-900px'}
      ${1}     | ${Tabs.HeaderWidth.AUTO}  | ${'60px'}      | ${'-300px'}
      ${99}    | ${Tabs.HeaderWidth.AUTO}  | ${'240px'}     | ${'-900px'}
      ${3}     | ${Tabs.HeaderWidth.AUTO}  | ${'180px'}     | ${'-600px'}
      ${4}     | ${Tabs.HeaderWidth.AUTO}  | ${'240px'}     | ${'-900px'}
      ${5}     | ${Tabs.HeaderWidth.AUTO}  | ${'240px'}     | ${'-900px'}
    `(
      'when selecting tab number %selected when headerWidth is set to %headerWidth',
      ({ selected, headerWidth, lineTranslateX, sliderTranslateX }) => {
        component.setProps({ headerWidth });

        const getLineStyles = () => getComputedStyle(component.find('.tabs__line').getDOMNode());
        const getSliderStyles = () =>
          getComputedStyle(component.find('.tabs__slider').getDOMNode());

        component.setProps({ selected });

        expect(component.state('isAnimating')).toBe(true);
        expect(getLineStyles().getPropertyValue('transform')).toBe(`translateX(${lineTranslateX})`);
        expect(getSliderStyles().getPropertyValue('transform')).toBe(
          `translateX(${sliderTranslateX})`,
        );

        triggerSpringOnRest();

        expect(component.state('isAnimating')).toBe(false);
        expect(getLineStyles().getPropertyValue('transform')).toBe(`translateX(${lineTranslateX})`);
        expect(getSliderStyles().getPropertyValue('transform')).toBe('translateX(0px)');
      },
    );

    it('changes to full width tabs and updates translation value when width is larger than container', () => {
      component.setProps({ headerWidth: Tabs.HeaderWidth.AUTO, selected: 1 });

      const getLineStyles = () => getComputedStyle(component.find('.tabs__line').getDOMNode());

      triggerSpringOnRest();

      expect(getLineStyles().getPropertyValue('transform')).toBe(`translateX(60px)`);
      expect(component.state('fullWidthTabs')).toBeFalsy();

      component.setProps({ tabs: generateTabs([false, true, false, false, false, false, false]) });

      triggerSpringOnRest();

      expect(getLineStyles().getPropertyValue('transform')).toBe(`translateX(100%)`);
      expect(component.state('fullWidthTabs')).toBeTruthy();
    });

    it('starts the transition offset by the spacer when one is provided', () => {
      const getSliderStyles = () => getComputedStyle(component.find('.tabs__slider').getDOMNode());

      component.setProps({ transitionSpacing: Tabs.SpacerSizes.NONE, selected: 3 });
      component.setState({ isAnimating: true });

      expect(getSliderStyles().getPropertyValue('transform')).toBe('translateX(-600px)');

      component.setProps({ transitionSpacing: Tabs.SpacerSizes.LARGE });

      expect(getSliderStyles().getPropertyValue('transform')).toBe('translateX(-632px)');
    });
  });

  describe('handling overflow', () => {
    it('only displays the selected tab when not animating or swiping', () => {
      const selected = component.prop('selected');

      expect(component.state('isAnimating')).toBe(false);
      expect(component.state('isSwiping')).toBe(false);

      component.find(TabPanel).forEach((tab, index) => {
        if (selected === index) {
          expect(tab.prop('style').display).toBe('block');
        } else {
          expect(tab.prop('style').display).toBe('none');
        }
      });
    });

    it('displays all tabs when animating', () => {
      component.setState({ isAnimating: true });

      component.find(TabPanel).forEach((tab) => {
        expect(tab.prop('style').display).toBe('block');
      });
    });

    it('displays all tabs when swiping', () => {
      component.setState({ isSwiping: true });

      component.find(TabPanel).forEach((tab) => {
        expect(tab.prop('style').display).toBe('block');
      });
    });

    it('has `overflow: hidden` on the parent when animating/swiping', () => {
      component.setState({ isSwiping: false, isAnimating: false });
      expect(getPanelContainerOverflow(component)).toBe('visible');

      component.setState({ isSwiping: true });
      expect(getPanelContainerOverflow(component)).toBe('hidden');

      component.setState({ isSwiping: false, isAnimating: true });
      expect(getPanelContainerOverflow(component)).toBe('hidden');
    });

    it('sets the panel width according to if animating/swiping', () => {
      component.setState({ isSwiping: false, isAnimating: false });
      expect(getPanelWidth(component)).toBe('100%');

      component.setState({ isSwiping: true });
      expect(getPanelWidth(component)).toBe('300px');

      component.setState({ isSwiping: false, isAnimating: true });
      expect(getPanelWidth(component)).toBe('300px');
    });
  });

  describe('handling prop updates', () => {
    it(`when updating tabs prop to an empty array`, () => {
      const newProps = { ...props, tabs: [] };
      component.setProps({ ...newProps });
    });
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

function triggerSpringOnRest() {
  jest.runAllTimers();
}

function getPanelContainerOverflow(component) {
  return component.find('.tabs__panel-container').prop('style').overflow;
}

function getPanelWidth(component) {
  return component.find(TabPanel).at(0).prop('style').width;
}

function leftSpacer(component) {
  return component.find('[id="left-spacer"]');
}

function rightSpacer(component) {
  return component.find('[id="right-spacer"]');
}

export function createStartTouchEventObject({ x = 0, y = 0 }) {
  return { nativeEvent: { touches: [createClientXY(x, y)] } };
}

export function createMoveTouchEventObject({ x = 0, y = 0 }) {
  return {
    nativeEvent: { changedTouches: [createClientXY(x, y)] },
  };
}
