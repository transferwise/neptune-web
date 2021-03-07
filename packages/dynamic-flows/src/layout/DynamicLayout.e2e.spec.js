import React from 'react';
import { mount } from 'enzyme';

import { Alert } from '@transferwise/components';
import DynamicLayout from '.';

describe('E2E: Given a component for rendering a dynamic layout', () => {
  let component;
  let onModelChange;
  let onAction;

  const action = {
    url: '/exampe',
    method: 'GET',
    label: 'example',
  };

  const model = { an: 'example' };
  const isValid = true;
  const schema = {
    type: 'object',
    properties: {
      an: { type: 'string' },
    },
  };
  const errors = { an: 'example error' };

  const form = { type: 'form', schema, model };
  const button = { type: 'button', action };
  const box = { type: 'box', components: [form, button] };

  beforeEach(() => {
    onAction = jest.fn();
    onModelChange = jest.fn();
    component = mount(
      <DynamicLayout
        components={[box]}
        onAction={onAction}
        onModelChange={onModelChange}
        submitted
        errors={errors}
      />,
    );
  });

  it('should render the form', () => {
    expect(component.find('input')).toBeTruthy();
  });

  it('should render the button', () => {
    expect(component.find('button')).toBeTruthy();
  });

  it('should show the supplied error message ', () => {
    expect(component.find(Alert).contains(errors.an)).toBe(true);
  });

  describe('when a form element is changed', () => {
    beforeEach(() => {
      component.find('input').simulate('change', { target: { value: 'other example' } });
    });
    it('should broadcast onModelChange', () => {
      expect(onModelChange).toHaveBeenCalledWith(
        { an: 'other example' },
        isValid,
        schema.properties.an,
      );
    });
  });

  describe('when a button element is clicked', () => {
    beforeEach(() => {
      component.find('button').simulate('click');
    });
    it('should broadcast onAction', () => {
      expect(onAction).toHaveBeenCalledWith(button.action);
    });
  });
});
