import React from 'react';
import { shallow } from 'enzyme';

import FlowNavigation from './';
import Avatar from './avatar';
import Stepper from '../stepper';

describe('Avatar', () => {
  let component;
  let props;

  function flagHidden() {
    return component.find('.flag').hasClass('flag--hidden');
  }

  function stepper() {
    return component.find(Stepper);
  }

  function avatar() {
    return component.find(Avatar);
  }

  function closeButton() {
    return component.find('.icon-close');
  }

  function backButton() {
    return component.find('.tw-flow-navigation__back-button');
  }

  function backButtonHidden() {
    return backButton().hasClass('tw-flow-navigation__back-button--hidden');
  }

  beforeEach(() => {
    props = {
      avatarUrl: '',
      profileType: 'BUSINESS',
      steps: [],
      activeStep: 0,
      onClose: jest.fn(),
      onGoBack: jest.fn(),
    };

    component = shallow(<FlowNavigation {...props} />);
  });

  it('passes steps and active step to stepper', () => {
    props.steps = [{ label: '1', something: true }, { label: '2', another: 'yes' }];
    props.activeStep = 1337;
    component.setProps(props);
    expect(stepper().length).toBe(1);
    expect(stepper().props()).toEqual({
      steps: props.steps,
      activeStep: props.activeStep,
    });
  });

  it('passes avatar url and profile type to avatar', () => {
    props.avatarUrl = 'https://example.com/avatar';
    props.profileType = 'BUSINESS';
    component.setProps(props);
    expect(avatar().length).toBe(1);
    expect(avatar().props()).toEqual({
      url: props.avatarUrl,
      profileType: props.profileType,
    });
  });

  it('calls onClose callback when close button clicked', () => {
    expect(props.onClose).not.toHaveBeenCalled();
    closeButton().simulate('click');
    expect(props.onClose).toHaveBeenCalled();
  });

  it('shows the back button on mobile when user can go back', () => {
    component.setProps({ onGoBack: jest.fn() });
    expect(backButtonHidden()).toBe(false);
    component.setProps({ onGoBack: null });
    expect(backButtonHidden()).toBe(true);
  });

  it('hides the flag when user can go back', () => {
    component.setProps({ onGoBack: jest.fn() });
    expect(flagHidden()).toBe(true);
    component.setProps({ onGoBack: null });
    expect(flagHidden()).toBe(false);
  });

  it('calls onGoBack callback when back button clicked', () => {
    expect(props.onGoBack).not.toHaveBeenCalled();
    backButton().simulate('click');
    expect(props.onGoBack).toHaveBeenCalled();
  });
});
