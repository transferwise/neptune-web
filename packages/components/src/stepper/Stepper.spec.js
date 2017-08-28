import React from 'react';
import { shallow } from 'enzyme';

import Stepper from './';

describe('Stepper', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      activeStep: 0,
      steps: ['one', 'two', 'three'].map(label => ({ label })),
    };
    component = shallow(<Stepper {...props} />);
  });

  const activeStep = step => component.setProps({ activeStep: step });
  const steps = howMany =>
    component.setProps({
      steps: Array(...Array(howMany)).map((_, index) => `${index}`).map(label => ({ label })),
    });

  describe('progress bar', () => {
    const progressBarFillerWidth = () => component.find('.progress-bar-filler').prop('style').width;
    const progressBarEndingWidth = () => component.find('.progress-bar-ending').prop('style').width;
    const totalWidth = () =>
      `${parseFloat(progressBarFillerWidth().slice(0, -1)) +
        parseFloat(progressBarEndingWidth().slice(0, -1))}%`;

    it('renders an ending bit for the step from last to current step', () => {
      expect(progressBarEndingWidth()).toEqual('0%');
      activeStep(1);
      expect(progressBarEndingWidth()).toEqual('50%');
      steps(5);
      expect(progressBarEndingWidth()).toEqual('25%');
    });

    it('renders a filler bit up to the step where the ending bit begins', () => {
      expect(progressBarFillerWidth()).toEqual('0%');
      activeStep(1);
      expect(progressBarFillerWidth()).toEqual('0%');
      activeStep(2);
      expect(progressBarFillerWidth()).toEqual('50%');
      steps(5);
      expect(progressBarFillerWidth()).toEqual('25%');
      activeStep(3);
      expect(progressBarFillerWidth()).toEqual('50%');
    });

    it('sets the widths of the filler and end bits to match where you are in the flow', () => {
      expect(totalWidth()).toEqual('0%');
      activeStep(2);
      expect(totalWidth()).toEqual('100%');
      steps(5);
      expect(totalWidth()).toEqual('50%');
      activeStep(10000);
      expect(totalWidth()).toEqual('100%');
      activeStep(-10);
      expect(totalWidth()).toEqual('0%');
    });
  });
});
