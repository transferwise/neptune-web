import React from 'react';
import { mount } from 'enzyme';

import JsonSchemaForm from '.';

import { Alert } from '@transferwise/components';

describe('E2E: Given a component for rendering a JSON schema form', () => {
  let component;
  let schema;
  let errors;
  let controlSchema;
  let onChange;

  beforeEach(() => {
    schema = {
      allOf: [
        {
          oneOf: [
            {
              title: 'Title',
              type: 'object',
              properties: {
                string: {
                  title: 'Label',
                  type: 'string',
                  minLength: 2,
                },
                const: {
                  enum: ['abcd'],
                },
              },
            },
          ],
        },
      ],
    };

    controlSchema = schema.allOf[0].oneOf[0].properties.string;
    onChange = jest.fn();
    errors = {
      string: 'Error',
    };

    const model = { string: 'foo' };
    const locale = 'en-GB';
    const submitted = false;
    const props = { schema, model, errors, onChange, submitted, locale };
    component = mount(<JsonSchemaForm {...props} />);
  });

  describe('when initialised', () => {
    it('should render an input for the schema control', () => {
      expect(component.find('input').length).toEqual(1);
    });

    it('should render a label for the schema control', () => {
      expect(component.find('label').first().text()).toEqual(controlSchema.title);
    });

    it('should render the model value in the relevant control', () => {
      expect(component.find('input').props().value).toEqual('foo');
    });

    it('should render an error', () => {
      expect(component.find(Alert).contains(errors.string)).toBe(true);
    });

    it('should broadcast a change for the const', () => {
      expect(onChange).toHaveBeenCalledWith({ string: 'foo', const: 'abcd' }, true);
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the input value changes', () => {
    beforeEach(() => {
      component.find('input').simulate('change', { target: { value: 'new' } });
    });

    it('should trigger the component onChange', () => {
      expect(onChange).toHaveBeenCalledWith({ string: 'new', const: 'abcd' }, true);
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });

  describe('when the input value changes to something invalid', () => {
    beforeEach(() => {
      component.find('input').simulate('change', { target: { value: 'x' } });
    });

    it('should remove the value from the model', () => {
      expect(onChange).toHaveBeenCalledWith({ const: 'abcd' }, true);
    });

    describe('and then to something else invalid', () => {
      beforeEach(() => {
        component.find('input').simulate('change', { target: { value: 'y' } });
      });

      it('should not call onChange again', () => {
        expect(onChange).toHaveBeenCalledTimes(2);
      });
    });

    describe('and then to something valid', () => {
      beforeEach(() => {
        component.find('input').simulate('change', { target: { value: 'bar' } });
      });

      it('should call onChange with the new value', () => {
        expect(onChange).toHaveBeenCalledWith({ string: 'bar', const: 'abcd' }, true);
      });

      it('should have called onChange again', () => {
        expect(onChange).toHaveBeenCalledTimes(3);
      });
    });
  });
});
