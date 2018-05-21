import React from 'react';
import { shallow } from 'enzyme';
import { CSSTransition } from 'react-transition-group';

import BackButton from '.';

describe('Back button', () => {
  let button;
  beforeEach(() => {
    button = shallow(
      <BackButton
        steps={[{ label: '1' }, { label: '2' }, { label: '3' }]}
        activeStep={2}
        onGoBack={jest.fn()}
      />,
    );
  });

  it('is visible when can go back', () => {
    expect(buttonVisible()).toBe(true);
  });

  it('is hidden when cannot go back', () => {
    button.setProps({ onGoBack: undefined });
    expect(buttonVisible()).toBe(false);
  });

  it('goes back on click', () => {
    const onGoBack = jest.fn();
    button.setProps({ onGoBack });
    clickGoBack();

    expect(onGoBack).toBeCalled();
  });

  it('has a label with a transition wrapper for every step', () => {
    expect(transitionWrappers().length).toBe(3);
  });

  it('shows the step label for the previous step', () => {
    const isLabelShownForStep = step =>
      transitionWrappers()
        .at(step)
        .prop('in');

    expect(isLabelShownForStep(0)).toBe(false);
    expect(isLabelShownForStep(1)).toBe(true);
    expect(isLabelShownForStep(2)).toBe(false);
  });

  it('hides all step labels other than the previous step from screenreaders', () => {
    const isStepHidden = step =>
      labels()
        .at(step)
        .prop('aria-hidden');

    expect(isStepHidden(0)).toBe(true);
    expect(isStepHidden(1)).toBe(false);
    expect(isStepHidden(2)).toBe(true);
  });

  it('adds and removes moving backward class depending on the direction active step changes', () => {
    const MOVING_BACKWARD_CLASS = '.tw-flow-navigation__back-text--moving-backward';
    const everyLabelHasMovingBackwardClass = () => labels().every(MOVING_BACKWARD_CLASS);
    const noLabelHasMovingBackwardClass = () => !labels().some(MOVING_BACKWARD_CLASS);

    button.setProps({ activeStep: 0 });
    button.setProps({ activeStep: 1 });
    expect(noLabelHasMovingBackwardClass()).toBe(true);
    button.setProps({ activeStep: 0 });
    expect(everyLabelHasMovingBackwardClass()).toBe(true);
    button.setProps({ activeStep: 1 });
    expect(noLabelHasMovingBackwardClass()).toBe(true);
  });

  function buttonVisible() {
    return !button.hasClass('tw-flow-navigation__back-button--hidden');
  }

  function clickGoBack() {
    button.simulate('click');
  }

  function transitionWrappers() {
    return button.find(CSSTransition);
  }

  function labels() {
    return button.find('.tw-flow-navigation__back-text');
  }
});
