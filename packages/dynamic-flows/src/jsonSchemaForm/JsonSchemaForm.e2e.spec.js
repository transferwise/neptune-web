import React from 'react';
import { mount } from 'enzyme';

import { Alert, Checkbox, Radio, Select } from '@transferwise/components';

import JsonSchemaForm from '.';

describe('E2E: Given a component for rendering a JSON schema form', () => {
  let component;
  let schema;
  let errors;
  let onChange;

  const stringSchema = {
    title: 'Label',
    type: 'string',
    minLength: 2,
  };

  const constSchema = {
    enum: ['abcd'],
  };

  const enumSchema = {
    title: 'Favourite number',
    oneOf: [
      { const: 1, title: 'One' },
      { const: 2, title: 'Two' },
    ],
  };

  const largeEnumSchema = {
    title: 'Favourite number',
    oneOf: [
      { const: 1, title: 'One' },
      { const: 2, title: 'Two' },
      { const: 3, title: 'Three' },
    ],
  };

  const booleanSchema = {
    title: 'Check',
    type: 'boolean',
  };

  const numberSchema = {
    type: 'number',
  };

  beforeEach(() => {
    schema = {
      allOf: [
        {
          oneOf: [
            {
              title: 'Title',
              type: 'object',
              properties: {
                string: stringSchema,
                const: constSchema,
                enum: enumSchema,
                boolean: booleanSchema,
                number: numberSchema,
                largeEnum: largeEnumSchema,
              },
            },
          ],
        },
      ],
    };

    onChange = jest.fn();
    errors = {
      string: 'Error',
    };

    const model = { string: 'foo' };
    const locale = 'en-GB';
    const submitted = false;
    const disabled = false;
    const props = { schema, model, errors, onChange, submitted, locale, disabled };
    component = mount(<JsonSchemaForm {...props} />);
  });

  describe('when initialised', () => {
    it('should render a text input for the string schema', () => {
      expect(component.find('input[type="text"]').length).toEqual(1);
    });

    it('should render a number input for the number schema', () => {
      expect(component.find('input[type="number"]').length).toEqual(1);
    });

    it('should render a checkbox for the boolean schema', () => {
      expect(component.find(Checkbox).length).toEqual(1);
    });

    it('should render radio buttons for the enum schema', () => {
      expect(component.find(Radio).length).toEqual(2);
    });

    it('should render a select for the large enum schema', () => {
      expect(component.find(Select).length).toEqual(1);
    });

    it('should render a label for the text input control', () => {
      expect(component.find('label').first().text()).toEqual(stringSchema.title);
    });

    it('should render the model value in the relevant control', () => {
      expect(component.find('input[type="text"]').props().value).toEqual('foo');
    });

    it('should render an error', () => {
      expect(component.find(Alert).contains(errors.string)).toBe(true);
    });

    it('should broadcast a change for the const', () => {
      expect(onChange).toHaveBeenCalledWith({ string: 'foo', const: 'abcd' }, true, constSchema);
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the text input value changes', () => {
    beforeEach(() => {
      component.find('input[type="text"]').simulate('change', { target: { value: 'new' } });
    });

    it('should trigger the component onChange', () => {
      expect(onChange).toHaveBeenCalledWith({ string: 'new', const: 'abcd' }, true, stringSchema);
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });

  describe('when the text input value changes to something invalid', () => {
    beforeEach(() => {
      component.find('input[type="text"]').simulate('change', { target: { value: 'x' } });
    });

    it('should remove the value from the model', () => {
      expect(onChange).toHaveBeenCalledWith({ const: 'abcd' }, true, stringSchema);
    });

    describe('and then to something else invalid', () => {
      beforeEach(() => {
        component.find('input[type="text"]').simulate('change', { target: { value: 'y' } });
      });

      it('should not call onChange again', () => {
        expect(onChange).toHaveBeenCalledTimes(2);
      });
    });

    describe('and then to something valid', () => {
      beforeEach(() => {
        component.find('input[type="text"]').simulate('change', { target: { value: 'bar' } });
      });

      it('should call onChange with the new value', () => {
        expect(onChange).toHaveBeenCalledWith({ string: 'bar', const: 'abcd' }, true, stringSchema);
      });

      it('should have called onChange again', () => {
        expect(onChange).toHaveBeenCalledTimes(3);
      });
    });
  });

  describe('when disabled', () => {
    beforeEach(() => {
      component.setProps({ disabled: true });
    });

    it('should disable the controls', () => {
      expect(component.find('input[type="text"]').props().disabled).toBe(true);
      expect(component.find('input[type="number"]').props().disabled).toBe(true);
      expect(component.find(Checkbox).props().disabled).toBe(true);
      expect(component.find(Radio).first().props().disabled).toBe(true);
      expect(component.find(Select).props().disabled).toBe(true);
    });
  });
});
