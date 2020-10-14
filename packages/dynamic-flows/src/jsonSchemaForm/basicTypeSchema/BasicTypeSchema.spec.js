import React from 'react';
import { shallow, mount } from 'enzyme';

import BasicTypeSchema from '.';

import SchemaFormControl from '../schemaFormControl';
import ControlFeedback from '../controlFeedback';
import DynamicAlert from '../../layout/alert';

describe('Given a component for rendering basic type schemas', () => {
  let component;
  let props;
  let onChange;
  let formControl;
  let feedbackComponent;

  const schema = {
    type: 'string',
    minLength: 2,
    title: 'Complete all sections',
    default: 'bar',
  };

  let model;
  const errors = 'error';
  const required = true;
  const submitted = false;

  const translations = {
    translationKey: 'example',
  };

  beforeEach(() => {
    onChange = jest.fn();
  });

  describe('when initialised with a model', () => {
    beforeEach(() => {
      model = 'foo';

      props = { schema, model, errors, required, onChange, submitted, translations };
      component = shallow(<BasicTypeSchema {...props} />);

      formControl = component.find(SchemaFormControl);
      feedbackComponent = component.find(ControlFeedback);
    });

    it('should display one SchemaFormControl', () => {
      expect(formControl).toHaveLength(1);
    });

    it('should pass the model to the value of the SchemaFormControl', () => {
      expect(formControl.prop('value')).toEqual(model);
    });

    it('should pass the errors to the ControlFeedback', () => {
      expect(feedbackComponent.prop('errors')).toEqual(errors);
    });

    it('should initially tell the ControlFeedback it is unchanged', () => {
      expect(feedbackComponent.prop('changed')).toBe(false);
    });

    it('should initially tell the ControlFeedback it is unblurred', () => {
      expect(feedbackComponent.prop('blurred')).toBe(false);
    });

    it('should pass the schema to ControlFeedback', () => {
      expect(feedbackComponent.prop('schema')).toBe(schema);
    });

    describe('when alert exists', () => {
      it('should render the alert', () => {
        const alert = {
          context: 'info',
          markdown: 'some text',
        };
        const schemaWithAlert = { ...schema, alert };
        component = shallow(<BasicTypeSchema {...props} schema={schemaWithAlert} />);

        const alertComponent = component.find(DynamicAlert);

        expect(alertComponent).toHaveLength(1);
        expect(alertComponent.prop('component').context).toBe('info');
        expect(alertComponent.prop('component').markdown).toBe('some text');
      });
    });

    describe('when alert does not exist', () => {
      it('should not render alert', () => {
        component = shallow(<BasicTypeSchema {...props} />);
        const alertComponent = component.find(DynamicAlert);

        expect(alertComponent).toHaveLength(0);
      });
    });

    describe('when control is focused', () => {
      beforeEach(() => {
        formControl.simulate('focus');
        feedbackComponent = component.find(ControlFeedback);
      });

      it('should tell the ControlFeedback it has focus', () => {
        expect(feedbackComponent.prop('focused')).toEqual(true);
      });

      it('should not tell the ControlFeedback it has been blurred', () => {
        expect(feedbackComponent.prop('blurred')).toEqual(false);
      });

      describe('and then blurred', () => {
        beforeEach(() => {
          formControl.simulate('blur');
          feedbackComponent = component.find(ControlFeedback);
        });

        it('should tell the ControlFeedback it has been blurred', () => {
          expect(feedbackComponent.prop('blurred')).toEqual(true);
        });

        it('should not tell the ControlFeedback it has focus', () => {
          expect(feedbackComponent.prop('focused')).toEqual(false);
        });
      });
    });

    describe('when control triggers onChange with a valid value', () => {
      beforeEach(() => {
        formControl.simulate('change', 'barbar');
        feedbackComponent = component.find(ControlFeedback);
      });

      it('should trigger the components onChange with the new value', () => {
        expect(onChange).toHaveBeenCalledWith('barbar', schema);
      });

      it('should tell the ControlFeedback it has been changed', () => {
        expect(feedbackComponent.prop('changed')).toEqual(true);
      });

      it('should broadcast null value for optional field when valid input changes to empty string', () => {
        model = 'foo';
        const isRequired = false;
        props = { schema, model, errors, isRequired, onChange, submitted, translations };
        component = shallow(<BasicTypeSchema {...props} />);

        formControl = component.find(SchemaFormControl);
        feedbackComponent = component.find(ControlFeedback);

        // valid non null value
        formControl.simulate('change', 'barbar');
        expect(onChange).toHaveBeenCalledWith('barbar', schema);

        // empty value but is still valid
        formControl.simulate('change', '');
        expect(onChange).toHaveBeenCalledWith(null, schema);
        expect(feedbackComponent.prop('validations').length).toEqual(0);
      });
    });

    describe('when control triggers onChange with an invalid value', () => {
      beforeEach(() => {
        formControl.simulate('change', 'f');
        feedbackComponent = component.find(ControlFeedback);
        formControl = component.find(SchemaFormControl);
      });

      it('should trigger the components onChange with null', () => {
        expect(onChange).toHaveBeenCalledWith(null, schema);
      });

      it('should pass the correct validation to ControlFeedback component', () => {
        expect(feedbackComponent.prop('validations')).toEqual(['minLength']);
      });

      it('should not reset the form control to the default', () => {
        expect(formControl.prop('value')).not.toEqual(schema.default);
      });

      it('should pass the new value to the form control', () => {
        expect(formControl.prop('value')).toBe('f');
      });
    });

    describe('when control changes to a value that resolves to false', () => {
      beforeEach(() => {
        formControl.simulate('change', '');
        feedbackComponent = component.find(ControlFeedback);
        formControl = component.find(SchemaFormControl);
      });

      it('should not reset the form control to the default', () => {
        expect(formControl.prop('value')).not.toEqual(schema.default);
      });

      it('should pass null value to the form control', () => {
        expect(formControl.prop('value')).toBe(null);
      });
    });
  });

  describe('when initialised without a model and there is a default', () => {
    beforeEach(() => {
      model = null;
      props = { schema, model, errors, required, onChange, submitted, translations };
      // useEffect is not currently called when using shallow
      // https://github.com/airbnb/enzyme/issues/2086
      component = mount(<BasicTypeSchema {...props} />);
    });

    it('should call the onChange handler with the default ', () => {
      expect(onChange).toHaveBeenCalledWith(schema.default, schema);
    });
  });

  describe('when initialised without a model and schema is a const', () => {
    const constSchema = { const: 'abcd' };

    beforeEach(() => {
      model = null;

      props = { schema: constSchema, model, errors, required, onChange, submitted, translations };
      // useEffect is not currently called when using shallow
      // https://github.com/airbnb/enzyme/issues/2086
      component = mount(<BasicTypeSchema {...props} />);
    });

    it('should call the onChange handler with the const ', () => {
      expect(onChange).toHaveBeenCalledWith(constSchema.const, constSchema);
    });

    it('should not show any label or control ', () => {
      expect(component.find('label').length).toBe(0);
      expect(component.find(SchemaFormControl).length).toBe(0);
    });
  });

  describe('when initialised without a model and schema is a single enum', () => {
    const enumSchema = { enum: ['abcd'] };

    beforeEach(() => {
      model = null;

      props = { schema: enumSchema, model, errors, required, onChange, submitted, translations };
      // useEffect is not currently called when using shallow
      // https://github.com/airbnb/enzyme/issues/2086
      component = mount(<BasicTypeSchema {...props} />);
    });

    it('should call the onChange handler with the const ', () => {
      expect(onChange).toHaveBeenCalledWith(enumSchema.enum[0], enumSchema);
    });

    it('should not show any label or control ', () => {
      expect(component.find('label').length).toBe(0);
      expect(component.find(SchemaFormControl).length).toBe(0);
    });
  });
});
