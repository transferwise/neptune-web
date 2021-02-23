import React from 'react';
import { shallow } from 'enzyme';

import SchemaFormControl from '.';

import FormControl from '../../formControl';

describe('Given a component for rendering a form control based on a schema', () => {
  let component;
  let props;
  let events;
  let sharedProps;

  let onChange;
  let onFocus;
  let onBlur;

  let schema;
  let value;

  let formControlComponent;

  const id = 'id';
  const locale = 'en-GB';
  const translations = {
    translationKey: 'example',
  };

  beforeEach(() => {
    onChange = jest.fn();
    onFocus = jest.fn();
    onBlur = jest.fn();
    events = { onChange, onFocus, onBlur };
    sharedProps = { id, locale, translations };
    schema = { type: 'string' };

    props = { ...events, ...sharedProps, value, schema };

    component = shallow(<SchemaFormControl {...props} />);
    formControlComponent = component.find(FormControl);
  });

  it('should render a FormControl', () => {
    expect(formControlComponent.length).toBe(1);
  });

  it('should pass the id to the FormControl', () => {
    expect(formControlComponent.prop('id')).toBe(id);
  });

  it('should pass the locale to the FormControl', () => {
    expect(formControlComponent.prop('locale')).toBe(locale);
  });

  it('should tell the FormControl to allow autoComplete', () => {
    expect(formControlComponent.prop('autoComplete')).toBe(true);
  });

  // TODO translations need to be broken out to separate props for FormControl
  // it('should pass the translations to the FormControl', () => {
  //   expect(formControlComponent.prop('translations')).toBe(translations);
  // });

  describe('when a string schema is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'string', displayFormat: '**-**-*' } });
    });

    it('should ask the FormControl for a text control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('text');
    });

    it('should pass the displayFormat down', () => {
      expect(component.find(FormControl).prop('displayPattern')).toEqual('**-**-*');
    });
  });

  describe('when a string schema with date format is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'string', format: 'date' } });
    });

    it('should ask the FormControl for a date control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('date');
    });
  });

  describe('when a string schema with phone format is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'string', format: 'phone' } });
    });

    it('should ask the FormControl for a telephone control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('tel');
    });
  });

  describe('when a string schema with base64url format is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'string', format: 'base64url' } });
    });

    it('should ask the FormControl for a file upload control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('file');
    });
  });

  describe('when a number schema is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'number' } });
    });

    it('should ask the FormControl for a number control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('number');
    });
  });

  describe('when an integer schema is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'integer' } });
    });

    it('should ask the FormControl for a number control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('number');
    });
  });

  describe('when a boolean schema is supplied', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'boolean' } });
    });

    it('should ask the FormControl for a checkbox control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('checkbox');
    });
  });

  describe('when a schema with two enums is supplied', () => {
    beforeEach(() => {
      component.setProps({
        schema: {
          values: [
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
          ],
          enum: [1, 2],
        },
      });
    });

    it('should ask the FormControl for a radio control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('radio');
    });

    it('should pass the FormControl options in the correct format', () => {
      expect(component.find(FormControl).prop('options')).toEqual([
        { value: 1, label: 'One' },
        { value: 2, label: 'Two' },
      ]);
    });
  });

  describe('when a schema with three enums is supplied', () => {
    beforeEach(() => {
      component.setProps({
        schema: {
          enum: ['one', 'two', 'three'],
        },
      });
    });

    it('should ask the FormControl for a select control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('select');
    });

    it('should pass the FormControl options in the correct format', () => {
      expect(component.find(FormControl).prop('options')).toEqual([
        { value: 'one', label: 'one' },
        { value: 'two', label: 'two' },
        { value: 'three', label: 'three' },
      ]);
    });
  });

  describe('when a schema with oneOf one const is supplied', () => {
    beforeEach(() => {
      component.setProps({
        schema: {
          oneOf: [{ const: 1, title: 'One' }],
        },
      });
    });

    it('should ask the FormControl for a select control', () => {
      // Sometimes we want to force a conscious decision for the customer to select an option even when there is only 1
      expect(component.find(FormControl).prop('type')).toEqual('select');
    });
  });

  describe('when a schema with oneOf two consts is supplied', () => {
    beforeEach(() => {
      component.setProps({
        schema: {
          oneOf: [
            { const: 1, title: 'One' },
            { const: 2, title: 'Two' },
          ],
        },
      });
    });

    it('should ask the FormControl for a radio control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('radio');
    });
  });

  describe('when a schema with oneOf three consts is supplied', () => {
    beforeEach(() => {
      component.setProps({
        schema: {
          oneOf: [
            { const: 1, title: 'One' },
            { const: 2, title: 'Two' },
            { const: 3, title: 'Three' },
          ],
        },
      });
    });

    it('should ask the FormControl for a select control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('select');
    });

    it('should pass the FormControl options in the correct format', () => {
      expect(component.find(FormControl).prop('options')).toEqual([
        { value: 1, label: 'One' },
        { value: 2, label: 'Two' },
        { value: 3, label: 'Three' },
      ]);
    });

    describe('when the total length of label and description exceeds predefined length', () => {
      it('should set the secondary field', () => {
        component.setProps({
          schema: {
            oneOf: [
              {
                const: 3,
                title: 'Three',
                description: 'reeeeeeaaallllllllly loooooooooooooooooooooongggggggggggg',
              },
            ],
          },
        });

        expect(component.find(FormControl).prop('options')[0].secondary).toEqual(
          'reeeeeeaaallllllllly loooooooooooooooooooooongggggggggggg',
        );
      });
    });

    describe('when the total length of label and description is less than predefined length', () => {
      it('should set the note field', () => {
        component.setProps({
          schema: {
            oneOf: [{ const: 3, title: 'Three', description: 'short description' }],
          },
        });

        expect(component.find(FormControl).prop('options')[0].note).toEqual('short description');
      });
    });

    describe('when icon name is a supported currency flag', () => {
      it('should set currency field', () => {
        component.setProps({
          schema: {
            oneOf: [
              { const: 1, title: 'One' },
              { const: 2, title: 'Two', icon: { name: 'flag-usd' } },
              { const: 3, title: 'Three', icon: { name: 'flag-gbp' } },
            ],
          },
        });

        expect(component.find(FormControl).prop('options')).toEqual([
          { value: 1, label: 'One' },
          { value: 2, label: 'Two', currency: 'usd' },
          { value: 3, label: 'Three', currency: 'gbp' },
        ]);
      });
    });

    describe("when there's a mix of supported and unsupported icons", () => {
      it('should ignore the unsupported currencies', () => {
        component.setProps({
          schema: {
            oneOf: [
              { const: 1, title: 'One' },
              { const: 2, title: 'Two', icon: { name: 'flag-usd' } },
              { const: 3, title: 'Three', icon: { name: 'usd' } },
            ],
          },
        });

        expect(component.find(FormControl).prop('options')).toEqual([
          { value: 1, label: 'One' },
          { value: 2, label: 'Two', currency: 'usd' },
          { value: 3, label: 'Three' },
        ]);
      });
    });

    describe('when icon name is not a supported currency flag', () => {
      it('should not set currency field', () => {
        component.setProps({
          schema: {
            oneOf: [
              { const: 1, title: 'One' },
              { const: 3, title: 'Three', icon: { name: 'something invalid' } },
            ],
          },
        });

        expect(component.find(FormControl).prop('options')).toEqual([
          { value: 1, label: 'One' },
          { value: 3, label: 'Three' },
        ]);
      });
    });
  });

  describe('when a schema with oneOf objects is supplied with tab control is supplied', () => {
    const getConstSchemaMappedFromObject = (index) => ({
      title: 'some title',
      const: index,
    });

    describe('when the number of oneOf objects is 3 or less', () => {
      it('should use type as dictated', () => {
        const schemaFormControlProps = {
          schema: {
            oneOf: [
              getConstSchemaMappedFromObject(0),
              getConstSchemaMappedFromObject(1),
              getConstSchemaMappedFromObject(2),
            ],
            originalType: 'object',
            control: 'tab',
          },
        };

        component.setProps(schemaFormControlProps);

        expect(component.find(FormControl).prop('type')).toEqual('tab');
      });
    });

    describe('when the number of oneOf objects is greater than 3', () => {
      it('should override with the select type', () => {
        const schemaFormControlProps = {
          schema: {
            oneOf: [
              getConstSchemaMappedFromObject(0),
              getConstSchemaMappedFromObject(1),
              getConstSchemaMappedFromObject(2),
              getConstSchemaMappedFromObject(3),
            ],
            originalType: 'object',
            control: 'tab',
          },
        };

        component.setProps(schemaFormControlProps);

        expect(component.find(FormControl).prop('type')).toEqual('select');
      });
    });
  });

  describe('when a schema has a control value', () => {
    beforeEach(() => {
      component.setProps({
        schema: {
          control: 'select',
          oneOf: [
            { const: 1, title: 'One' },
            { const: 2, title: 'Two' },
          ],
        },
      });
    });

    it('should override the default and ask for the specified control', () => {
      expect(component.find(FormControl).prop('type')).toEqual('select');
    });
  });

  describe('when the schema contains help information ', () => {
    beforeEach(() => {
      component.setProps({ schema: { type: 'string', help: { message: 'help!' } } });
    });

    it('should disable autoComplete', () => {
      expect(component.find(FormControl).prop('autoComplete')).toBe(false);
    });
  });

  describe('when a null value is passed in', () => {
    beforeEach(() => {
      component.setProps({ value: null });
    });

    it('should pass an empty string to the FormControl', () => {
      expect(component.find(FormControl).prop('value')).toEqual('');
    });
  });

  describe('when the FormControl triggers onChange', () => {
    beforeEach(() => {
      component.find(FormControl).simulate('change', 'new');
    });

    it('should trigger the components onChange handler', () => {
      expect(onChange).toHaveBeenCalledWith('new');
    });
  });

  describe('when the FormControl triggers onChange with an invalid value', () => {
    beforeEach(() => {
      component.find(FormControl).simulate('change', 2);
    });

    it('should trigger the components onChange handler with null', () => {
      expect(onChange).toHaveBeenCalledWith(null);
    });
  });

  describe('when the FormControl trigger onFocus', () => {
    beforeEach(() => {
      component.find(FormControl).simulate('focus');
    });

    it('should trigger the components onChange handler', () => {
      expect(onFocus).toHaveBeenCalled();
    });
  });

  describe('when the FormControl trigger onBlur', () => {
    beforeEach(() => {
      component.find(FormControl).simulate('blur');
    });

    it('should trigger the components onBlur handler', () => {
      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe('when props contains disabled property', () => {
    describe('when disabled through component props', () => {
      it('should pass down disabled to the FormControl', () => {
        props = { ...props, disabled: true };

        component = shallow(<SchemaFormControl {...props} />);
        formControlComponent = component.find(FormControl);

        expect(formControlComponent.prop('disabled')).toBe(true);
      });
    });

    describe('when disabled through schema', () => {
      it('should pass down disabled to the FormControl', () => {
        schema = { ...schema, disabled: true };
        props = { ...props, schema };

        component = shallow(<SchemaFormControl {...props} />);
        formControlComponent = component.find(FormControl);

        expect(formControlComponent.prop('disabled')).toBe(true);
      });
    });

    describe('when disabled both through component props and schema', () => {
      it('should pass down disabled to the FormControl', () => {
        schema = { ...schema, disabled: true };
        props = { ...props, disabled: true, schema };

        component = shallow(<SchemaFormControl {...props} />);
        formControlComponent = component.find(FormControl);

        expect(formControlComponent.prop('disabled')).toBe(true);
      });
    });
  });
});
