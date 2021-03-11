import React from 'react';
import { shallow } from 'enzyme';
import { RadioGroup } from '@transferwise/components';

import PromotedOneOfSchema from './PromotedOneOfSchema';
import ObjectSchema from '../objectSchema';
import OneOfSchema from '../oneOfSchema';
import GenericSchema from '../genericSchema';
import DynamicAlert from '../../layout/alert';

describe('Given a PromotedOneOfSchema component', () => {
  let component;
  let onChange;
  let onPersistAsync;
  let props;
  let schema;

  const model = {};
  const errors = {};
  const locale = 'en-GB';
  const submitted = false;
  const translations = {};

  const promotedSchema = {
    type: 'object',
    title: 'Option A',
    properties: {
      a: {
        type: 'number',
      },
    },
    required: ['a'],
    promoted: true,
  };

  const oneOtherOption = [
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
  ];

  const twoOtherOptions = [
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
  ];

  const promotion = {
    other: {
      title: 'Other title',
      icon: {
        name: 'bank',
        type: 'icon',
      },
      heading: {
        text: 'Other group heading',
        type: 'heading',
      },
    },
  };

  beforeEach(() => {
    onChange = jest.fn();
    onPersistAsync = jest.fn();
  });

  describe('when initialised with a schema', () => {
    beforeEach(() => {
      schema = {
        title: 'Choose schema',
        oneOf: [promotedSchema, ...twoOtherOptions],
        alert: {
          context: 'success',
          markdown: 'some alert',
          type: 'alert',
        },
        promotion,
        control: 'tab',
      };

      props = {
        schema,
        model,
        errors,
        locale,
        onChange,
        submitted,
        translations,
        onPersistAsync,
      };

      component = shallow(<PromotedOneOfSchema {...props} />);
    });

    it('should display a radio selection with the promoted option and other options', () => {
      expect(component.find(RadioGroup)).toHaveLength(1);
    });

    it('should default to the promoted option', () => {
      const radio = component.find(RadioGroup);
      expect(radio.props().selectedValue).toBe('promoted');
    });

    it('should display the promoted option', () => {
      const promoted = component.find(ObjectSchema);

      expect(promoted).toHaveLength(1);
    });

    it('should display alert when present', () => {
      expect(component.find(DynamicAlert)).toHaveLength(1);
    });

    it("should remove title, description and alert from the promoted option as it's already displayed", () => {
      const promoted = component.find(ObjectSchema);

      expect(promoted.props().schema).toMatchObject({
        ...schema.oneOf[0],
        title: undefined,
        description: undefined,
      });
    });

    it('should pass down all props to the promoted option', () => {
      const promoted = component.find(ObjectSchema);

      expectPropsToBeEqual(promoted, props);
    });

    describe('when the other option is selected', () => {
      describe('when there is one other option', () => {
        let objectSchema;

        beforeEach(() => {
          schema = {
            title: 'Choose schema',
            oneOf: [promotedSchema, ...oneOtherOption],
            promotion,
          };

          props = { ...props, schema };

          component = shallow(<PromotedOneOfSchema {...props} />);

          component.find(RadioGroup).simulate('change', 'other');
          objectSchema = component.find(GenericSchema).dive().find(ObjectSchema);
        });

        it('should render an object schema', () => {
          expect(objectSchema).toHaveLength(1);
        });

        it('should pass down the correct schema', () => {
          expect(objectSchema.props().schema).toMatchObject({
            ...schema.oneOf[1],
            title: 'Other group heading',
          });
        });

        it('should pass down all props to the other option', () => {
          expectPropsToBeEqual(objectSchema, props);
        });
      });

      describe('when there are more than one other option', () => {
        let oneOfSchema;

        beforeEach(() => {
          component.find(RadioGroup).simulate('change', 'other');
          oneOfSchema = component.find(GenericSchema).dive().find(OneOfSchema);
        });

        it('should render an oneOf schema', () => {
          expect(oneOfSchema).toHaveLength(1);
        });

        it('should pass down the correct schema', () => {
          expect(oneOfSchema.props().schema).toMatchObject({
            title: 'Other group heading',
            control: 'tab',
            oneOf: twoOtherOptions,
          });
        });

        it('should pass down all props to the other option', () => {
          expectPropsToBeEqual(oneOfSchema, props);
        });
      });
    });
  });
});

const expectPropsToBeEqual = (wrapper, props) => {
  expect(wrapper.props().locale).toBe(props.locale);
  expect(wrapper.props().model).toBe(props.model);
  expect(wrapper.props().onChange).toBe(props.onChange);
  expect(wrapper.props().submitted).toBe(props.submitted);
  expect(wrapper.props().errors).toBe(props.errors);
  expect(wrapper.props().translations).toBe(props.translations);
  expect(wrapper.props().onPersistAsync).toBe(props.onPersistAsync);
};
