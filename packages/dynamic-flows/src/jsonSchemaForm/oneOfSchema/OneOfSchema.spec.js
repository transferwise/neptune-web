import React from 'react';
import { shallow } from 'enzyme';

import OneOfSchema from '.';

import GenericSchema from '../genericSchema/';
import SchemaFormControl from '../schemaFormControl/';
import ControlFeedback from '../controlFeedback';

describe('Given a oneOfSchema component', () => {
  let component;
  let genericSchema;
  let schemaFormControl;
  let controlFeedback;
  let props;
  let onChange;
  let schema;

  let model = { b: 2, c: 3 };
  const errors = { a: 'error' };
  const locale = 'en-GB';
  const submitted = false;

  const translations = {
    translationKey: 'example',
  };

  beforeEach(() => {
    onChange = jest.fn();
  });

  describe('when initialised with multiple schemas', () => {
    beforeEach(() => {
      schema = {
        title: 'Choose schema',
        oneOf: [
          {
            type: 'object',
            title: 'Option A',
            properties: {
              a: {
                type: 'number',
              },
            },
            required: ['a'],
          },
          {
            type: 'object',
            title: 'Option B',
            properties: {
              b: {
                type: 'number',
              },
            },
            required: ['b'],
          },
          {
            type: 'object',
            title: 'Option C',
            properties: {
              c: {
                type: 'number',
              },
            },
            required: ['c'],
          },
        ],
      };

      props = { schema, model, errors, locale, onChange, submitted, translations };
      component = shallow(<OneOfSchema {...props} />);

      genericSchema = component.find(GenericSchema);
      schemaFormControl = component.find(SchemaFormControl);
    });

    it('should render the schema title in a label', () => {
      expect(component.find('.control-label').text()).toContain(schema.title);
    });

    it('should use a SchemaFormControl to choose between schemas', () => {
      expect(schemaFormControl).toHaveLength(1);
    });

    it('should render one generic schema component', () => {
      expect(genericSchema.length).toBe(1);
    });

    it('should pass the first schema with a valid model to the genericSchema', () => {
      expect(genericSchema.prop('schema')).toEqual(schema.oneOf[1]);
    });

    it('should pass the valid part of the model to the genericSchema', () => {
      expect(genericSchema.prop('model')).toEqual({ b: 2 });
    });

    it('should pass errors to the nested generic schema component', () => {
      expect(genericSchema.prop('errors')).toEqual(errors);
    });

    it('should pass locale to the nested generic schema component', () => {
      expect(genericSchema.prop('locale')).toEqual(locale);
    });

    it('should pass translations to the nested generic schema component', () => {
      expect(genericSchema.prop('translations')).toEqual(translations);
    });

    describe('when another schema is selected', () => {
      beforeEach(() => {
        schemaFormControl.simulate('change', 2);
        // As changing the state causes a rerender, need to refetch child component
        genericSchema = component.find(GenericSchema);
      });

      it('should pass that schema to the nested generic schema', () => {
        expect(genericSchema.prop('schema')).toBe(schema.oneOf[2]);
      });

      it('should pass the valid parts of the original model to the nested generic schema', () => {
        expect(genericSchema.prop('model')).toEqual({ c: 3 });
      });

      it('should trigger onChange with only the properties in the new schema', () => {
        expect(onChange).toHaveBeenCalledWith({ c: 3 }, schema.oneOf[2]);
      });
    });

    describe('when the generic schema triggers an onChange event', () => {
      beforeEach(() => {
        genericSchema.simulate('change', { b: 4 }, schema.oneOf[1]);
      });

      it('should trigger the components onChange once', () => {
        expect(onChange).toHaveBeenCalled();
      });

      it('should broadcast the changed model from the child', () => {
        expect(onChange).toHaveBeenCalledWith({ b: 4 }, schema.oneOf[1]);
      });

      it('should not change the input model', () => {
        expect(model).toEqual({ b: 2, c: 3 });
      });

      describe('when the user toggles to another schema, and back again', () => {
        beforeEach(() => {
          schemaFormControl.simulate('change', 2);
          schemaFormControl.simulate('change', 1);
          genericSchema = component.find(GenericSchema);
        });

        it('should remember and pass down the changed value', () => {
          expect(genericSchema.prop('model')).toEqual({ b: 4 });
        });
      });
    });
  });

  describe('when only one schema is supplied', () => {
    beforeEach(() => {
      schema = {
        title: 'Choose schema',
        oneOf: [
          {
            type: 'object',
            title: 'Option A',
            properties: {
              a: {
                type: 'number',
              },
            },
            required: ['a'],
          },
        ],
      };

      props = { schema, model, errors, locale, onChange, submitted, translations };
      component = shallow(<OneOfSchema {...props} />);
    });

    it('should not render a SchemaFormControl to choose between schemas', () => {
      expect(component.find(SchemaFormControl)).toHaveLength(0);
    });

    it('should render the schema using a GenericSchema', () => {
      expect(component.find(GenericSchema)).toHaveLength(1);
    });
  });

  describe('when the choice is from a set of constant values', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      schema = {
        title: 'Choose schema',
        placeholder: 'Please choose',
        oneOf: [
          {
            title: 'One',
            const: 1,
          },
          {
            title: 'Two',
            const: 2,
          },
          {
            title: 'Three',
            const: 3,
          },
        ],
      };

      model = null;

      props = { schema, model, locale, onChange, submitted };
      component = shallow(<OneOfSchema {...props} />);

      genericSchema = component.find(GenericSchema);
      schemaFormControl = component.find(SchemaFormControl);
      controlFeedback = component.find(ControlFeedback);
    });

    it('should not render a generic schema', () => {
      expect(genericSchema.length).toBe(0);
    });

    it('should not set a default for the SchemaFormControl value', () => {
      expect(schemaFormControl.prop('value')).toBe(null);
    });

    it('should not broadcast a model update', () => {
      expect(onChange).not.toHaveBeenCalled();
    });

    it('should pass errors down if present', () => {
      component = shallow(<OneOfSchema {...props} errors="Something is wrong" />);

      controlFeedback = component.find(ControlFeedback);
      expect(controlFeedback.prop('errors')).toBe('Something is wrong');
    });

    it('should not pass down errors if present but wrong type (should never happen)', () => {
      component = shallow(
        <OneOfSchema {...props} errors={{ choice: 'I should not be an object' }} />,
      );

      controlFeedback = component.find(ControlFeedback);
      expect(controlFeedback.prop('errors')).toBe(null);
    });

    describe('when the user changes schema', () => {
      beforeEach(() => {
        // SchemaFormControl broadcasts the INDEX(1) of the schema
        schemaFormControl.simulate('change', 1);
      });

      it('should broadcast the PARENT schema as the trigger, not the const', () => {
        expect(onChange).toHaveBeenCalledWith(2, schema);
      });

      it('should only broadcast one change', () => {
        component = shallow(<OneOfSchema {...props} required model={1} />);

        schemaFormControl = component.find(SchemaFormControl);
        onChange.mockReset();
        schemaFormControl.simulate('change', 2);

        expect(onChange).toHaveBeenCalledTimes(1);
      });
    });

    describe('when the schema is not required', () => {
      describe('when value exists', () => {
        it('should not display validation errors', () => {
          schemaFormControl.simulate('change', 1);

          expect(controlFeedback.prop('validations').length).toBe(0);
        });
      });

      describe('when no value exists', () => {
        it('should not display validation errors', () => {
          expect(controlFeedback.prop('validations').length).toBe(0);
        });
      });
    });

    describe('when the schema is required', () => {
      describe('when no value exists', () => {
        it('should display validation errors', () => {
          component = shallow(<OneOfSchema {...props} required />);
          schemaFormControl = component.find(SchemaFormControl);

          controlFeedback = component.find(ControlFeedback);
          expect(controlFeedback.prop('validations').length).toBe(1);
        });
      });
    });
  });
});
