import React from 'react';
import { shallow } from 'enzyme';

import { fakeEvent } from '../common/fakeEvents';
import Chip from './Chip';

describe('option', () => {
  let component;
  let props;

  const removeButton = () => component.find('.chip-remove');

  beforeEach(() => {
    props = {
      onRemove: jest.fn(),
      label: 'Test',
      hasError: false,
    };
    component = shallow(<Chip {...props} />);
  });

  it('renders label', () => {
    expect(component.childAt(0).text()).toEqual(props.label);
  });

  it('calls onRemove when remove button clicked', () => {
    removeButton().simulate('click', fakeEvent());
    expect(props.onRemove).toBeCalled();
  });

  it('renders invalid chip correctly', () => {
    expect(component.hasClass('has-error')).toBe(false);
    component.setProps({
      hasError: true,
    });
    expect(component.hasClass('has-error')).toBe(true);
  });

  it('render with correct className', () => {
    expect(component.hasClass('test-class')).toBe(false);
    component.setProps({
      className: 'test-class',
    });
    expect(component.hasClass('test-class')).toBe(true);
  });
});
