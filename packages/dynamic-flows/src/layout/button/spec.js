import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '@transferwise/components';

import DynamicButton from '.';

describe('Given a component for dynamically rendering buttons', () => {
  let component;
  let onAction;
  let spec;

  beforeEach(() => {
    spec = {
      component: 'button',
      action: {
        label: 'Submit',
        url: '/example',
        method: 'GET',
      },
      size: 'md',
      align: 'center',
      context: 'primary',
      margin: 'md',
    };
    onAction = jest.fn();
    component = shallow(<DynamicButton component={spec} onAction={onAction} />);
  });

  it('should use the action label for the button', () => {
    expect(component.find(Button).contains(spec.action.label)).toBe(true);
  });

  describe('when the button is clicked', () => {
    beforeEach(() => {
      component.find(Button).simulate('click');
    });
    it('should broadcast onAction', () => {
      expect(onAction).toHaveBeenCalledWith(spec.action);
    });
  });
});
