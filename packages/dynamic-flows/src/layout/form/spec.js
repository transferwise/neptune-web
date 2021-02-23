import React from 'react';
import { shallow } from 'enzyme';

import JsonSchemaForm from '../../jsonSchemaForm';

import DynamicForm from '.';

describe('Given a component for dynamically rendering forms', () => {
  let component;
  let onModelChange;
  let spec;
  let onPersistAsync;

  const schema = {
    id: '#example',
    type: 'object',
    properties: {
      an: { type: 'string' },
    },
  };

  const model = { an: 'example' };
  const errors = { an: 'error message' };
  const submitted = false;

  beforeEach(() => {
    spec = {
      component: 'form',
      schema,
    };
    onModelChange = jest.fn();
    onPersistAsync = jest.fn();
    component = shallow(
      <DynamicForm
        component={spec}
        onModelChange={onModelChange}
        submitted={submitted}
        errors={errors}
        model={model}
        onPersistAsync={onPersistAsync}
      />,
    );
  });

  it('should pass the schema to the json schema form', () => {
    expect(component.find(JsonSchemaForm).prop('schema')).toEqual(schema);
  });
  it('should pass the model to the json schema form', () => {
    expect(component.find(JsonSchemaForm).prop('model')).toEqual(model);
  });
  it('should pass whether the form is submitted', () => {
    expect(component.find(JsonSchemaForm).prop('submitted')).toEqual(submitted);
  });
  it('should pass the errors to the form ', () => {
    expect(component.find(JsonSchemaForm).prop('errors')).toEqual(errors);
  });

  describe('when the form triggers a model change', () => {
    beforeEach(() => {
      component.find(JsonSchemaForm).simulate('change', model, true, schema.properties.an);
    });
    it('should broadcast onAction', () => {
      expect(onModelChange).toHaveBeenCalledWith(model, true, schema.properties.an, schema);
      component.find(JsonSchemaForm).simulate(
        'change',
        model,
        {
          an: { type: 'string' },
        },
        'example',
      );
    });
    it('should broadcast onAction', () => {
      expect(onModelChange).toHaveBeenCalledWith(model, schema, 'example', {
        an: { type: 'string' },
      });
    });
  });
});
