import React from 'react';
import UploadImageStep from './';
import { shallow } from 'enzyme';
import Upload from '@transferwise/icons/react/upload';

describe('uploadImageStep', () => {
  const UPLOADIMAGE_STEP_PROPS = {
    fileDropped: jest.fn(),
    isComplete: false,
    usAccept: 'usAccept',
    usButtonText: '',
    usDisabled: false,
    usLabel: '',
    usHelpImage: '',
    usPlaceholder: '',
  };
  let component;
  beforeEach(() => {
    component = shallow(<UploadImageStep {...UPLOADIMAGE_STEP_PROPS} />);
  });

  it('renders container', () => {
    expect(component.find('.droppable-default-card')).toHaveLength(1);
  });

  it('renders helpImage or Upload icon', () => {
    expect(component.find(Upload)).toHaveLength(1);
    component.setProps({ usHelpImage: 'usHelpImage' });
    expect(component.find('img.thumbnail')).toHaveLength(1);
  });

  it('renders label', () => {
    expect(component.find('h4')).toHaveLength(0);
    component.setProps({ usLabel: 'usLabel' });
    expect(component.find('h4').text()).toBe('usLabel');
  });

  it('renders placeholder', () => {
    expect(component.find('p')).toHaveLength(0);
    component.setProps({ usPlaceholder: 'usPlaceholder' });
    expect(component.find('p').text()).toBe('usPlaceholder');
  });

  it('renders buttonText or Icon', () => {
    expect(component.find('.btn-primary')).toHaveLength(1);
    expect(component.find('.btn-primary span.icon')).toHaveLength(1);
    component.setProps({ usButtonText: 'usButtonText' });
    expect(component.find('.btn-primary span').text()).toBe('usButtonText');
    expect(component.find('.btn-primary span.icon')).toHaveLength(0);
  });

  it('renders input file', () => {
    expect(component.find('input[type="file"]')).toHaveLength(1);
  });
});
