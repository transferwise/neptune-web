import React from 'react';
import { shallow } from 'enzyme';

import DynamicBox from '.';
import DynamicLayout from '../DynamicLayout';

describe('Given a component for dynamically rendering a box of other components', () => {
  let component;
  let onAction;
  let onModelChange;
  let box;

  const button = {
    type: 'button',
    action: {
      label: 'Edit',
      url: '/example',
      method: 'GET',
    },
  };

  const model = 'example';
  const isValid = true;
  const schema = { type: 'string' };

  beforeEach(() => {
    box = {
      type: 'box',
      components: [button],
      margin: 'md',
      border: true,
    };

    onAction = jest.fn();
    onModelChange = jest.fn();
    component = shallow(
      <DynamicBox
        component={box}
        onAction={onAction}
        onModelChange={onModelChange}
        submitted={false}
        errors={{}}
        model={model}
      />,
    );
  });

  it('should use a DynamicLayout to render the child components', () => {
    expect(component.find(DynamicLayout).prop('components')).toBe(box.components);
  });

  it('should the child component the model', () => {
    expect(component.find(DynamicLayout).prop('model')).toBe(model);
  });

  describe('when the child layout triggers an action', () => {
    beforeEach(() => {
      component.find(DynamicLayout).simulate('action', button.action);
    });
    it('should broadcast onAction', () => {
      expect(onAction).toHaveBeenCalledWith(button.action);
    });
  });

  describe('when the child layout triggers a model change', () => {
    beforeEach(() => {
      component.find(DynamicLayout).simulate('modelChange', model, isValid, schema);
    });
    it('should broadcast onModelChange', () => {
      expect(onModelChange).toHaveBeenCalledWith(model, isValid, schema);
    });
  });
});
