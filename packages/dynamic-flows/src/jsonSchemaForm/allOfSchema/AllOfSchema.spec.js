import React from 'react';
import { shallow } from 'enzyme';

import AllOfSchema from '.';
import GenericSchema from '../genericSchema';

describe('Given a component from rendering allOf schemas', () => {
  let component;
  let genericSchemaComponents;
  let props;
  let onChange;

  const stringSchema = {
    type: 'string',
  };

  const numberSchema = {
    type: 'number',
  };

  const schema = {
    title: 'Complete all sections',
    description: 'Description',
    allOf: [
      {
        type: 'object',
        properties: {
          string: stringSchema,
        },
        width: 'md',
      },
      {
        type: 'object',
        properties: {
          number: numberSchema,
        },
        width: 'sm',
      },
    ],
  };

  const model = { string: 'a', number: 1, notInSchema: 1 };
  const errors = { string: 'error' };
  const locale = 'en-GB';
  const submitted = false;

  const translations = {
    translationKey: 'example',
  };

  let stringSchemaComponent;
  let numberSchemaComponent;

  beforeEach(() => {
    onChange = jest.fn();

    props = { schema, model, errors, locale, onChange, submitted, translations };
    component = shallow(<AllOfSchema {...props} />);

    genericSchemaComponents = component.find(GenericSchema);
    stringSchemaComponent = genericSchemaComponents.at(0);
    numberSchemaComponent = genericSchemaComponents.at(1);
  });

  it('should render the schema title in a label', () => {
    expect(component.find('h3').text()).toContain(schema.title);
  });

  it('should render the schema description in a paragraph', () => {
    expect(component.find('p').text()).toContain(schema.description);
  });

  it('should display one generic-schema component for each allOf', () => {
    expect(genericSchemaComponents).toHaveLength(2);
  });

  it('should pass the relevant allOf schemas to the generic schema components', () => {
    expect(stringSchemaComponent.prop('schema')).toBe(schema.allOf[0]);
    expect(numberSchemaComponent.prop('schema')).toBe(schema.allOf[1]);
  });

  it('should pass the relevant part of the model to the generic schema components', () => {
    expect(stringSchemaComponent.prop('model')).toStrictEqual({ string: 'a' });
    expect(numberSchemaComponent.prop('model')).toStrictEqual({ number: 1 });
  });

  it('should pass the the errors to the generic schema components', () => {
    expect(stringSchemaComponent.prop('errors')).toBe(errors);
    expect(numberSchemaComponent.prop('errors')).toBe(errors);
  });

  it('should pass the locale to the generic-schema components', () => {
    expect(stringSchemaComponent.prop('locale')).toBe(locale);
    expect(numberSchemaComponent.prop('locale')).toBe(locale);
  });

  it('should pass the translations to the generic-schema components', () => {
    expect(stringSchemaComponent.prop('translations')).toBe(translations);
    expect(numberSchemaComponent.prop('translations')).toBe(translations);
  });

  it('should render the generic schemas inside appropriate width containers', () => {
    const rows = component.find('.col-xs-12');
    // TODO would prefer to use classList
    expect(rows.at(0).hasClass('col-sm-6')).toBe(true);
    expect(rows.at(1).hasClass('col-sm-4')).toBe(true);
  });

  describe('when a child schema triggers onChange', () => {
    beforeEach(() => {
      numberSchemaComponent.simulate('change', { number: 2 }, numberSchema);
    });

    it('should trigger the components onChange once', () => {
      expect(onChange).toHaveBeenCalled();
    });

    it('should combine the changed model with the other (valid) parts of the model', () => {
      expect(onChange).toHaveBeenCalledWith({ string: 'a', number: 2 }, numberSchema);
    });
  });
});
