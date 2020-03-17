import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import clamp from 'lodash.clamp';
import { Spring } from 'react-spring/renderprops.cjs';

import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import KeyCodes from '../common/keyCodes';
import {
  getElasticDragDifference,
  getSwipeDifference,
  swipedLeftToRight,
  swipedRightToLeft,
  swipeShouldChangeTab,
  getVelocity,
} from './utils';

import './Tabs.css';

const MIN_INDEX = 0;

const enabledTabsFilter = tab => !tab.disabled;

class Tabs extends React.Component {
  state = {
    start: null,
    translateX: 0,
    translateFrom: '0px',
    translateTo: '0px',
    translateLineX: null,
    isAnimating: false,
    isSwiping: false,
    isScrolling: false,
    lastSwipeVelocity: 0,
  };
  container = null;
  containerWidth = 0;

  get filteredTabsLength() {
    return this.props.tabs.filter(enabledTabsFilter).length;
  }

  get MAX_INDEX() {
    return this.props.tabs.length - 1;
  }

  componentDidMount() {
    const { selected } = this.props;

    this.switchTab(clamp(selected, MIN_INDEX, this.MAX_INDEX));
    this.animateToTab(clamp(selected, MIN_INDEX, this.MAX_INDEX), true);
    document.body.addEventListener('touchmove', this.disableScroll, { passive: false });
    document.body.addEventListener('touchforcechange', this.disableScroll, { passive: false });
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps) {
    const currentSelected = this.props.selected;
    const prevSelected = prevProps.selected;
    const currentSelectedTab = this.props.tabs[currentSelected];
    const currentSelectedTabIsDisabled = currentSelectedTab && currentSelectedTab.disabled;
    const prevSelectedTab = prevProps.tabs[prevSelected];
    const prevSelectedTabIsDisabled = prevSelectedTab && prevSelectedTab.disabled;
    const currentDisabledTabsLength = this.props.tabs.filter(enabledTabsFilter).length;
    const prevDisabledTabsLength = prevProps.tabs.filter(enabledTabsFilter).length;

    if (
      currentSelected !== prevSelected ||
      currentDisabledTabsLength !== prevDisabledTabsLength ||
      currentSelectedTabIsDisabled !== prevSelectedTabIsDisabled
    ) {
      this.animateToTab(
        clamp(currentSelected, MIN_INDEX, this.MAX_INDEX),
        currentSelected === prevSelected,
      );
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('touchmove', this.disableScroll);
    document.body.removeEventListener('touchforcechange', this.disableScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setContainerWidth(this.container);

    this.setState(({ selectedTabIndex }) => ({
      translateTo: `${-(this.containerWidth * selectedTabIndex)}px`,
    }));
  };

  setContainerRefAndWidth = node => {
    this.container = node;
    this.setContainerWidth(node);
  };

  setContainerWidth = node => {
    if (!node) {
      return;
    }

    const { width } = node.getBoundingClientRect();

    this.containerWidth = width;
  };

  isTabDisabled = index => {
    const { tabs } = this.props;

    return tabs[index] && tabs[index].disabled;
  };

  /*
   * Gets the next tab that should be selected based on the swipe direction
   * and the current selected tab (is called recursively to account for disabled tabs).
   */
  getTabToSelect = (selected, start, end) => {
    let nextSelected = selected;

    if (swipedLeftToRight(start, end)) {
      nextSelected -= 1;

      if (nextSelected > MIN_INDEX && this.isTabDisabled(nextSelected)) {
        return this.getTabToSelect(nextSelected, start, end);
      }
    } else if (swipedRightToLeft(start, end)) {
      nextSelected += 1;

      if (nextSelected < this.MAX_INDEX && this.isTabDisabled(nextSelected)) {
        return this.getTabToSelect(nextSelected, start, end);
      }
    }

    nextSelected = clamp(
      nextSelected,
      Math.max(selected - 1, MIN_INDEX),
      Math.min(selected + 1, this.MAX_INDEX),
    );

    return nextSelected;
  };

  swipedOverHalfOfContainer = difference => difference / this.containerWidth >= 0.5;

  calculateApplicableDragDifference = (currentSelected, start, end) => {
    const difference = getSwipeDifference(start, end);
    const elasticDrag = getElasticDragDifference(difference);

    if (swipedLeftToRight(start, end)) {
      if (currentSelected > MIN_INDEX) {
        return Math.min(difference, this.containerWidth);
      } else {
        return elasticDrag;
      }
    } else if (swipedRightToLeft(start, end)) {
      if (currentSelected < this.MAX_INDEX) {
        return -Math.min(difference, this.containerWidth);
      } else {
        return -elasticDrag;
      }
    }

    return false;
  };

  switchTab = index => {
    const { onTabSelect } = this.props;
    onTabSelect(index);
  };

  getTabIndexWithoutDisabledTabs(index) {
    return index - this.props.tabs.slice(0, index).filter(tab => !enabledTabsFilter(tab)).length;
  }

  animateToTab = (index, instant) => {
    this.animateLine(index);

    this.animatePanel(this.getTabIndexWithoutDisabledTabs(index), instant);
  };

  animateLine = index => {
    this.setState({ translateLineX: `${index * 100}%` });
  };

  // Pass `instant` to set the `translateX` to the new panel with no transition
  animatePanel = (index, instant = false) => {
    const { translateTo: currentTranslateTo } = this.state;

    const translateFrom = currentTranslateTo;
    const translateTo = `${-(this.containerWidth * index)}px`;

    this.setState({
      selectedTabIndex: index,
      isAnimating: !instant && translateFrom !== translateTo,
      translateFrom,
      translateTo,
    });
  };

  disableScroll = e => {
    const { isSwiping } = this.state;

    if (isSwiping) {
      e.preventDefault();
    }
  };

  handleTabClick = index => () => {
    this.switchTab(index);
  };

  onKeyDown = index => event => {
    if (event && event.keyCode === KeyCodes.ENTER) {
      this.switchTab(index);
    }
  };

  handleTouchStart = event => {
    const start = {
      x: event.nativeEvent.touches[0].clientX,
      y: event.nativeEvent.touches[0].clientY,
      time: Date.now(),
    };
    this.setState({
      start,
      currentSwipe: [start],
    });

    event.persist();
  };

  handleTouchMove = event => {
    const { start } = this.state;
    const { selected: currentSelectedFromProps } = this.props;
    const selected = this.getTabIndexWithoutDisabledTabs(currentSelectedFromProps);
    const end = {
      x: event.nativeEvent.changedTouches[0].clientX,
      y: event.nativeEvent.changedTouches[0].clientY,
      time: Date.now(),
    };
    const difference = getSwipeDifference(start, end);
    const yAxisDifference = getSwipeDifference(start, end, 'y');
    let { isScrolling, isSwiping } = this.state;

    event.persist();

    if (!isScrolling && !isSwiping) {
      if (difference > yAxisDifference) {
        isSwiping = true;
      } else {
        isScrolling = true;
      }
    }

    this.setState({ isScrolling, isSwiping });

    if (isSwiping) {
      let nextSelected = currentSelectedFromProps;

      if (this.swipedOverHalfOfContainer(difference)) {
        nextSelected = this.getTabToSelect(nextSelected, start, end);
      }

      this.animateLine(nextSelected);

      const dragDifference = this.calculateApplicableDragDifference(selected, start, end);
      const translateX = dragDifference
        ? `${-(this.containerWidth * selected) + dragDifference}px`
        : false;

      this.setState(state => ({
        currentSwipe: [...state.currentSwipe, end],
        translateFrom: translateX || state.translateFrom,
        translateTo: translateX || state.translateTo,
      }));
    }
  };

  handleTouchEnd = event => {
    const { start, isSwiping } = this.state;
    const { selected } = this.props;
    const end = {
      x: event.nativeEvent.changedTouches[0].clientX,
      y: event.nativeEvent.changedTouches[0].clientY,
      time: Date.now(),
    };
    const difference = getSwipeDifference(start, end);
    const velocity = getVelocity([...this.state.currentSwipe, end]);

    this.setState({
      currentSwipe: [],
    });

    let nextSelected = selected;

    event.persist();

    if (isSwiping) {
      if (swipeShouldChangeTab(start, end) || this.swipedOverHalfOfContainer(difference)) {
        nextSelected = this.getTabToSelect(nextSelected, start, end);
      }

      if (nextSelected !== selected) {
        this.switchTab(nextSelected);

        this.setState({
          lastSwipeVelocity: velocity,
        });
      } else {
        this.animateToTab(nextSelected);
      }
    }

    this.setState({ isSwiping: false, isScrolling: false });
  };

  render() {
    const { tabs, changeTabOnSwipe, name, selected, className } = this.props;
    const {
      isSwiping,
      translateLineX,
      isAnimating,
      translateFrom,
      translateTo,
      lastSwipeVelocity,
    } = this.state;

    const distanceSwiped = Math.abs(-parseInt(translateFrom, 10) - this.containerWidth * selected);

    const remainingContainerToTravel = isSwiping
      ? 1 - distanceSwiped / this.containerWidth
      : 1 - Math.abs(distanceSwiped / this.containerWidth - 1);

    const restrictedVelocity =
      (Number.isNaN(remainingContainerToTravel) ? 0 : remainingContainerToTravel) *
      Math.min(10 * Math.E, lastSwipeVelocity * 10 * Math.E);

    const hidePanelOverflow = isAnimating || isSwiping;

    return (
      <div
        onTouchStart={changeTabOnSwipe && this.handleTouchStart}
        onTouchEnd={changeTabOnSwipe && this.handleTouchEnd}
        onTouchMove={changeTabOnSwipe && this.handleTouchMove}
        className={classNames('tabs', className)}
      >
        <TabList>
          {tabs.map(({ title, disabled }, index) => {
            return (
              <Tab
                key={title}
                id={`${name}-tab-${index}`}
                panelId={`${name}-panel-${index}`}
                selected={selected === index}
                disabled={disabled}
                onClick={disabled ? null : this.handleTabClick(index)}
                onKeyDown={this.onKeyDown(index)}
                style={{
                  width: `${(1 / tabs.length) * 100}%`,
                }}
              >
                {title}
              </Tab>
            );
          })}
          {translateLineX ? (
            <div
              className={classNames('tabs__line')}
              style={{
                width: `${(1 / tabs.length) * 100}%`,
                transform: `translateX(${translateLineX})`,
              }}
            />
          ) : null}
        </TabList>
        <div
          className="tabs__panel-container"
          ref={this.setContainerRefAndWidth}
          style={{
            overflow: hidePanelOverflow ? 'hidden' : 'visible',
          }}
        >
          <Spring
            from={{
              transform: `translateX(${translateFrom})`,
            }}
            to={{
              transform: `translateX(${translateTo})`,
            }}
            config={{
              precision: isSwiping ? 1 : 0.01,
              velocity: !isSwiping ? restrictedVelocity : 0,
              clamp: true,
            }}
            onRest={() => {
              if (isAnimating) {
                this.setState({
                  isAnimating: false,
                  lastSwipeVelocity: 0,
                });
              }
            }}
          >
            {props => (
              <div
                className="tabs__slider"
                style={{
                  width: hidePanelOverflow ? `${this.filteredTabsLength * 100}%` : '100%',
                  transform: hidePanelOverflow ? props.transform : 'translateX(0px)',
                }}
              >
                {tabs.map(({ content, disabled }, index) =>
                  !disabled ? (
                    <TabPanel
                      key={tabs[index].title}
                      tabId={`${name}-tab-${index}`}
                      id={`${name}-panel-${index}`}
                      style={{
                        width: hidePanelOverflow
                          ? `${(1 / this.filteredTabsLength) * 100}%`
                          : '100%',
                        display: hidePanelOverflow || index === selected ? 'block' : 'none',
                      }}
                    >
                      {content}
                    </TabPanel>
                  ) : null,
                )}
              </div>
            )}
          </Spring>
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      disabled: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  selected: PropTypes.number.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  changeTabOnSwipe: PropTypes.bool,
  className: PropTypes.string,
};

Tabs.defaultProps = {
  changeTabOnSwipe: true,
  className: '',
};

export default Tabs;
