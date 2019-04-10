import React from 'react';
import { shallow } from 'enzyme';
import ProcessingStep from './';
import ProcessIndicator from '../../../processIndicator';

describe('ProcessingStep', () => {
  const PROCESSING_STEP_PROPS = {
    isComplete: false,
    isError: false,
    isProcessing: true,
    isSuccess: false,
    onAnimationCompleted: jest.fn(),
    onClear: jest.fn(),
    psButtonText: 'psButtonText',
    psFailureText: 'psFailureText',
    psProcessingText: 'psProcessingText',
    psSuccessText: 'psSuccessText',
  };
  let component;
  beforeEach(() => {
    component = shallow(<ProcessingStep {...PROCESSING_STEP_PROPS} />);
  });

  it('renders container', () => {
    expect(component.find('.droppable-processing-card')).toHaveLength(1);
  });

  it('renders ProcessIndicator with default status', () => {
    expect(component.find(ProcessIndicator)).toHaveLength(1);
    expect(component.find(ProcessIndicator).props().status).toBe('processing');
  });

  it('renders ProcessIndicator with success status', () => {
    component = shallow(<ProcessingStep {...PROCESSING_STEP_PROPS} isSuccess />);
    expect(component.find(ProcessIndicator).props().status).toBe('succeeded');
  });

  it('renders ProcessIndicator with error status', () => {
    component = shallow(<ProcessingStep {...PROCESSING_STEP_PROPS} isError />);
    expect(component.find(ProcessIndicator).props().status).toBe('failed');
  });

  it('renders psProcessingText', () => {
    expect(component.find('h4').text()).toBe(PROCESSING_STEP_PROPS.psProcessingText);
  });

  it('renders psSuccessText if isSuccess is true', () => {
    component = shallow(<ProcessingStep {...PROCESSING_STEP_PROPS} isSuccess />);
    expect(component.find('h4').text()).toBe(PROCESSING_STEP_PROPS.psSuccessText);
  });

  it('renders psFailureText if isError is true', () => {
    component = shallow(<ProcessingStep {...PROCESSING_STEP_PROPS} isError />);
    expect(component.find('h4').text()).toBe(PROCESSING_STEP_PROPS.psFailureText);
  });

  it('renders button when psButtonText is set up', () => {
    expect(component.find('button.btn-default')).toHaveLength(1);
  });

  it('calls onClear when button is clicked', () => {
    component.find('button.btn-default').simulate('click', {});
    expect(PROCESSING_STEP_PROPS.onClear).toHaveBeenCalled();
  });
});
