import React from 'react';
import { shallow } from 'enzyme';

import GenericSchema from '.';

import BasicTypeSchema from '../basicTypeSchema';
import ObjectSchema from '../objectSchema';
import OneOfSchema from '../oneOfSchema';
import AllOfSchema from '../allOfSchema';

describe('Given a component for rendering any generic schema', () => {
  let component;
  let props;
  let sharedProps;
  let onChange;
  let schema;
  let model;
  let errors;

  const locale = 'en-GB';
  const required = true;
  const submitted = false;
  const translations = {
    translationKey: 'example',
  };

  beforeEach(() => {
    onChange = jest.fn();
    sharedProps = { locale, required, onChange, submitted, translations };
  });

  describe('when a string schema is supplied ', () => {
    let stringSchemaComponent;

    beforeEach(() => {
      model = 'foo';
      schema = {
        type: 'string',
      };
      errors = 'bar';
      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      stringSchemaComponent = component.find(BasicTypeSchema);
    });

    it('should render a StringSchema', () => {
      expect(stringSchemaComponent.length).toBe(1);
    });

    it('should pass through the supplied data to the StringSchema', () => {
      expect(stringSchemaComponent.prop('schema')).toEqual(schema);
      expect(stringSchemaComponent.prop('model')).toEqual(model);
      expect(stringSchemaComponent.prop('errors')).toEqual(errors);
      expect(stringSchemaComponent.prop('locale')).toEqual(locale);
      expect(stringSchemaComponent.prop('translations')).toEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        stringSchemaComponent.simulate('change', 'bar', schema);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith('bar', schema);
      });
    });
  });

  describe('when a number schema is supplied ', () => {
    let numberSchemaComponent;

    beforeEach(() => {
      model = 1;
      schema = {
        type: 'number',
      };
      errors = 'bar';
      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      numberSchemaComponent = component.find(BasicTypeSchema);
    });

    it('should render a StringSchema', () => {
      expect(numberSchemaComponent.length).toBe(1);
    });

    it('should pass through the supplied data to the StringSchema', () => {
      expect(numberSchemaComponent.prop('schema')).toEqual(schema);
      expect(numberSchemaComponent.prop('model')).toEqual(model);
      expect(numberSchemaComponent.prop('errors')).toEqual(errors);
      expect(numberSchemaComponent.prop('locale')).toEqual(locale);
      expect(numberSchemaComponent.prop('translations')).toEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        numberSchemaComponent.simulate('change', 2, schema);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith(2, schema);
      });
    });
  });

  describe('when a boolean schema is supplied ', () => {
    let booleanSchemaComponent;

    beforeEach(() => {
      model = true;
      schema = {
        type: 'boolean',
      };
      errors = 'bar';
      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      booleanSchemaComponent = component.find(BasicTypeSchema);
    });

    it('should render a StringSchema', () => {
      expect(booleanSchemaComponent.length).toBe(1);
    });

    it('should pass through the supplied data to the StringSchema', () => {
      expect(booleanSchemaComponent.prop('schema')).toEqual(schema);
      expect(booleanSchemaComponent.prop('model')).toEqual(model);
      expect(booleanSchemaComponent.prop('errors')).toEqual(errors);
      expect(booleanSchemaComponent.prop('locale')).toEqual(locale);
      expect(booleanSchemaComponent.prop('translations')).toEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        booleanSchemaComponent.simulate('change', false, schema);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith(false, schema);
      });
    });
  });

  describe('when an object schema is supplied ', () => {
    let objectSchemaComponent;

    beforeEach(() => {
      model = { foo: 'bar' };
      schema = {
        type: 'object',
        properties: {
          foo: {
            type: 'string',
          },
        },
      };
      errors = { foo: 'barbar' };

      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      objectSchemaComponent = component.find(ObjectSchema);
    });

    it('should render a ObjectSchema', () => {
      expect(objectSchemaComponent.length).toBe(1);
    });

    it('should pass through the supplied data to the ObjectSchema', () => {
      expect(objectSchemaComponent.prop('schema')).toEqual(schema);
      expect(objectSchemaComponent.prop('model')).toEqual(model);
      expect(objectSchemaComponent.prop('errors')).toEqual(errors);
      expect(objectSchemaComponent.prop('locale')).toEqual(locale);
      expect(objectSchemaComponent.prop('translations')).toEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        objectSchemaComponent.simulate('change', { foo: 'barbar' }, schema.properties.foo);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith({ foo: 'barbar' }, schema.properties.foo);
      });
    });
  });

  describe('when a oneOf schema is supplied ', () => {
    let oneOfComponent;

    beforeEach(() => {
      model = 'a';
      schema = {
        oneOf: [
          {
            type: 'string',
          },
        ],
      };
      errors = 'foo';

      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      oneOfComponent = component.find(OneOfSchema);
    });

    it('should render a oneOfSchema', () => {
      expect(oneOfComponent.length).toBe(1);
    });

    it('should pass through the supplied data to the oneOfSchema', () => {
      expect(oneOfComponent.prop('schema')).toEqual(schema);
      expect(oneOfComponent.prop('model')).toEqual(model);
      expect(oneOfComponent.prop('errors')).toEqual(errors);
      expect(oneOfComponent.prop('locale')).toEqual(locale);
      expect(oneOfComponent.prop('translations')).toEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        oneOfComponent.simulate('change', 'b', schema.oneOf[0]);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith('b', schema.oneOf[0]);
      });
    });
  });

  describe('when a oneOf schema also has a type ', () => {
    let oneOfComponent;
    let basicTypeSchemaComponent;

    beforeEach(() => {
      model = 'a';
      schema = {
        type: 'string',
        oneOf: [
          {
            const: 'a',
          },
        ],
      };
      errors = 'foo';

      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      oneOfComponent = component.find(OneOfSchema);
      basicTypeSchemaComponent = component.find(BasicTypeSchema);
    });

    it('should render a oneOfSchema', () => {
      expect(oneOfComponent.length).toBe(1);
    });
    it('should not render a basicTypeSchema', () => {
      expect(basicTypeSchemaComponent.length).toBe(0);
    });
  });

  describe('when an allOf schema is supplied ', () => {
    let allOfComponent;

    beforeEach(() => {
      model = 'a';
      schema = {
        allOf: [
          {
            type: 'string',
          },
        ],
      };
      errors = 'foo';

      props = { ...sharedProps, model, schema, errors };

      component = shallow(<GenericSchema {...props} />);
      allOfComponent = component.find(AllOfSchema);
    });

    it('should render a AllOfSchema', () => {
      expect(allOfComponent.length).toBe(1);
    });

    it('should pass through the supplied data to the AllOfSchema', () => {
      expect(allOfComponent.prop('schema')).toEqual(schema);
      expect(allOfComponent.prop('model')).toEqual(model);
      expect(allOfComponent.prop('errors')).toEqual(errors);
      expect(allOfComponent.prop('locale')).toEqual(locale);
      expect(allOfComponent.prop('translations')).toEqual(translations);
    });

    describe('when the child component triggers onChange', () => {
      beforeEach(() => {
        allOfComponent.simulate('change', 'b', schema.allOf[0]);
      });

      it('should trigger the components onChange with the model', () => {
        expect(onChange).toHaveBeenCalledWith('b', schema.allOf[0]);
      });
    });
  });
});
