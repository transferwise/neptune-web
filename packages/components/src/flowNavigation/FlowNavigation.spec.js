import React from 'react';
import { shallow } from 'enzyme';

import FlowNavigation from './';
import Avatar from './avatar';
import Stepper from '../stepper';
import BackButton from './backButton';

describe('Flow navigation', () => {
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
    return component.find(BackButton);
  }

  function closeButtonWithAvatar() {
    return closeButton().hasClass('close-button-with-avatar');
  }

  function bottomBorderHidden() {
    return component.hasClass('tw-flow-navigation--done');
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
    expect(closeButtonWithAvatar()).toBe(true);
  });

  it('calls onClose callback when close button clicked', () => {
    expect(props.onClose).not.toHaveBeenCalled();
    closeButton().simulate('click');
    expect(props.onClose).toHaveBeenCalled();
  });

  it('passes steps to back button', () => {
    component.setProps({ steps: [{ label: '1' }, { label: '2' }] });
    expect(backButton().prop('steps')).toEqual([{ label: '1' }, { label: '2' }]);
  });

  it('passes active step to back button', () => {
    component.setProps({ activeStep: 2 });
    expect(backButton().prop('activeStep')).toBe(2);
  });

  it('passes onGoBack callback to back button', () => {
    const onGoBack = jest.fn();
    component.setProps({ onGoBack });
    expect(backButton().prop('onGoBack')).toBe(onGoBack);
  });

  it('hides the flag when user can go back', () => {
    component.setProps({ onGoBack: jest.fn() });
    expect(flagHidden()).toBe(true);
    component.setProps({ onGoBack: null });
    expect(flagHidden()).toBe(false);
  });

  it('hides the avatar if done is true', () => {
    component.setProps({ done: true });
    expect(avatar().length).toBe(0);
    expect(closeButtonWithAvatar()).toBe(false);
  });

  it('hides the stepper if done is true', () => {
    component.setProps({ done: true });
    expect(stepper().length).toBe(0);
  });

  it('hides the bottom border if done is true', () => {
    component.setProps({ done: true });
    expect(bottomBorderHidden()).toBe(true);
  });
});
