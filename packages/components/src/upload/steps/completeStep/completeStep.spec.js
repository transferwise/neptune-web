import React from 'react';
import { shallow } from 'enzyme';
import CompleteStep from './';
import AlertCircleIcon from '@transferwise/icons/react/alert-circle';
import DocumentIcon from '@transferwise/icons/react/document';

describe('CompleteStep', () => {
  const COMPLETED_STEP_PROPS = {
    isComplete: true,
    uploadedImage: '',
    fileName: 'fileName',
    isError: false,
    isImage: true,
    csSuccessText: 'csSuccessText',
    csFailureText: 'csFailureText',
    csButtonText: 'csButtonText',
    onClear: jest.fn(),
    usLabel: 'usLabel',
  };
  let component;
  beforeEach(() => {
    component = shallow(<CompleteStep {...COMPLETED_STEP_PROPS} />);
  });

  it('renders container', () => {
    expect(component.find('.droppable-complete-card')).toHaveLength(1);
  });

  describe('when error is false', () => {
    it('renders isImage or Upload icon', () => {
      expect(component.find(DocumentIcon)).toHaveLength(1);
      component.setProps({ uploadedImage: 'uploadedImage' });
      expect(component.find('img.thumbnail')).toHaveLength(1);
    });

    it('renders filename when error is false', () => {
      expect(component.find('small').text()).toBe(COMPLETED_STEP_PROPS.fileName);
    });
  });

  describe('when error is true', () => {
    it('renders errorMessage and icon when error is true', () => {
      component = shallow(<CompleteStep {...COMPLETED_STEP_PROPS} isError />);
      expect(component.find('p').text()).toBe(COMPLETED_STEP_PROPS.csFailureText);
      expect(component.find(AlertCircleIcon)).toHaveLength(1);
    });
  });

  it('renders button when csButtonText is set up', () => {
    expect(component.find('button.btn-default')).toHaveLength(1);
  });

  it('calls onClear when button is clicked', () => {
    component.find('button.btn-default').simulate('click', {});
    expect(COMPLETED_STEP_PROPS.onClear).toHaveBeenCalled();
  });
});
