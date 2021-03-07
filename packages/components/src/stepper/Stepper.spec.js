import React from 'react';
import { shallow } from 'enzyme';

import Stepper from '.';
import Tooltip from '../tooltip';

jest.mock('./deviceDetection', () => ({
  isTouchDevice: jest.fn(() => false),
}));

describe('Stepper', () => {
  let props;
  let component;
  let fakeDeviceDetection;

  beforeEach(() => {
    // eslint-disable-next-line global-require
    fakeDeviceDetection = require('./deviceDetection');
    props = {
      activeStep: 0,
      steps: ['one', 'two', 'three'].map((label) => ({ label })),
    };
    component = shallow(<Stepper {...props} />);
  });

  const activeStep = (step) => component.setProps({ activeStep: step });
  const steps = (howMany) =>
    component.setProps({
      steps: Array(...Array(howMany)).map((_, index) => ({ label: index.toString() })),
    });

  describe('progress bar', () => {
    const progressBarFillerWidth = () => component.find('.progress-bar-filler').prop('style').width;
    const progressBarEndingWidth = () => component.find('.progress-bar-ending').prop('style').width;
    const totalWidth = () =>
      `${
        parseFloat(progressBarFillerWidth().slice(0, -1)) +
        parseFloat(progressBarEndingWidth().slice(0, -1))
      }%`;

    describe('when no steps are passed in', () => {
      it('renders nothing', () => {
        component.setProps({ steps: [] });

        expect(component.isEmptyRender()).toBe(true);
      });
    });

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

  describe('steps', () => {
    it('have rendered labels', () => {
      steps(5);
      [0, 1, 2, 3, 4].forEach((label, index) => {
        expect(component.find('.tw-stepper__step').at(index).text()).toEqual(`${label}`);
      });
    });

    it('are active when clickable and completed', () => {
      const stepActive = (index) =>
        component.find('.tw-stepper__step').at(index).hasClass('tw-stepper__step--clickable');

      component.setProps({
        steps: [
          { label: '0' },
          { label: '1', onClick: () => null },
          { label: '2', onClick: () => null },
        ],
        activeStep: 0,
      });

      expect(stepActive(0)).toBe(false);
      activeStep(1);
      expect(stepActive(0)).toBe(false);
      expect(stepActive(1)).toBe(false);
      activeStep(2);
      expect(stepActive(0)).toBe(false);
      expect(stepActive(1)).toBe(true);
      expect(stepActive(2)).toBe(false);
    });

    it('are not clickable when active', () => {
      const clickOnStep = (index) =>
        component.find('.tw-stepper__step button').at(index).simulate('click');
      const buttonDisabled = (index) =>
        component.find('.tw-stepper__step button').at(index).prop('disabled');
      const clickedOnFirstStep = jest.fn();
      const clickedOnSecondStep = jest.fn();
      component.setProps({
        steps: [
          { label: '0', onClick: clickedOnFirstStep },
          { label: '1', onClick: clickedOnSecondStep },
        ],
        activeStep: 0,
      });
      clickOnStep(0);
      expect(buttonDisabled(0)).toBe(true);
      expect(clickedOnFirstStep).not.toHaveBeenCalled();
      activeStep(1);
      expect(buttonDisabled(0)).toBe(false);
      clickOnStep(0);
      expect(clickedOnFirstStep).toHaveBeenCalledTimes(1);
      clickOnStep(1);
      expect(clickedOnSecondStep).not.toHaveBeenCalled();
    });

    it('are active when they are the currently active step', () => {
      const stepActive = (index) =>
        component.find('.tw-stepper__step').at(index).hasClass('tw-stepper__step--active');
      steps(4);
      activeStep(1);
      expect(stepActive(0)).toBe(false);
      expect(stepActive(1)).toBe(true);
      expect(stepActive(2)).toBe(false);
      expect(stepActive(3)).toBe(false);
      activeStep(2);
      expect(stepActive(0)).toBe(false);
      expect(stepActive(1)).toBe(false);
      expect(stepActive(2)).toBe(true);
      expect(stepActive(3)).toBe(false);
    });

    it('are marked as visited when active index is less than or equals to current index', () => {
      const step = (index) => {
        const btnStates = ['tw-stepper__step--active', 'tw-stepper__step--clickable'];
        const stepEl = component.find('.tw-stepper__step').at(index);
        return {
          active: stepEl.hasClass(btnStates[0]),
          clickable: stepEl.hasClass(btnStates[1]),
          clickableAndActive: btnStates.every((c) => stepEl.hasClass(c)),
          disabled: stepEl.find('button').prop('disabled'),
        };
      };

      component.setProps({
        steps: [
          { label: '0', onClick: () => {} },
          { label: '1', onClick: () => {} },
          { label: '2', onClick: () => {} },
        ],
        activeStep: 0,
      });

      expect(step(0).active).toBe(true);
      expect(step(0).disabled).toBe(true);
      expect(step(1).clickableAndActive).toBe(false);
      expect(step(2).clickableAndActive).toBe(false);

      activeStep(2);
      activeStep(0);

      expect(step(1).clickable).toBe(true);
      expect(step(2).clickable).toBe(true);
    });
  });

  describe('hover labels', () => {
    const step = (index) => component.find('.tw-stepper__step').at(index);
    it('will be rendered when provided', () => {
      component.setProps({
        steps: [{ hoverLabel: 'hover', label: 'label' }, { label: 'label 2' }],
      });
      const firstStepHoverLabel = step(0).children();
      expect(firstStepHoverLabel.type()).toBe(Tooltip);
      expect(firstStepHoverLabel.children().render().text()).toEqual('label');
      expect(step(1).text()).toEqual('label 2');
    });

    it('renders jsx', () => {
      component.setProps({
        steps: [
          {
            hoverLabel: (
              <>
                hover <p>label</p>
              </>
            ),
            label: '1',
          },
        ],
      });

      expect(step(0).children().prop('label')).toEqual(
        <>
          hover <p>label</p>
        </>,
      );
    });

    it('will not be rendered if the user is on a touch device', () => {
      fakeDeviceDetection.isTouchDevice = jest.fn(() => true);
      component.setProps({
        steps: [{ hoverLabel: 'hover', label: 'label' }, { label: 'label 2' }],
      });
      const firstStepHoverLabel = step(0).children();
      expect(firstStepHoverLabel.type()).toBe('button');
      expect(firstStepHoverLabel.text()).toEqual('label');
      expect(step(1).text()).toEqual('label 2');
    });
  });
});
