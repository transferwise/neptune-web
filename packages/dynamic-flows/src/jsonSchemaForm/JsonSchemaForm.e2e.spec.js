import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import JsonSchemaForm from './JsonSchemaForm';

describe('E2E: Given a component for rendering a JSON schema form', () => {
  let schema;
  let errors;
  let onChange;
  let onPersistAsync;
  let props;

  const baseUrl = 'some-test-base-url';

  const stringSchema = {
    title: 'String',
    type: 'string',
    minLength: 2,
  };

  const constSchema = {
    enum: ['abcd'],
  };

  const enumSchema = {
    title: 'Enum',
    oneOf: [
      { const: 1, title: 'One' },
      { const: 2, title: 'Two' },
    ],
  };

  const largeEnumSchema = {
    title: 'Large Enum',
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
    title: 'Number',
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
    onPersistAsync = jest.fn();
    errors = {
      string: 'Error',
    };

    const model = { string: 'foo' };
    const locale = 'en-GB';
    const submitted = false;
    const disabled = false;
    props = {
      schema,
      model,
      errors,
      onChange,
      submitted,
      locale,
      disabled,
      onPersistAsync,
      baseUrl,
    };
  });

  describe('when initialised', () => {
    beforeEach(() => {
      render(<JsonSchemaForm {...props} />);
    });

    it('should render text input control', () => {
      const string = screen.getByLabelText('String');
      expect(string.closest('input')).toHaveAttribute('type', 'text');
    });

    it('should render number input control', () => {
      const number = screen.getByLabelText('Number');
      expect(number.closest('input')).toHaveAttribute('type', 'number');
    });

    it('should render a checkbox for the boolean schema', () => {
      const check = screen.getByLabelText('Check');
      expect(check.parentElement).toHaveClass('np-checkbox-button');
    });

    it('should render radio buttons for the enum schema', () => {
      screen.getByText('Enum');
      expect(screen.getAllByRole('radio').length).toEqual(2);
    });

    it('should render a select for the large enum schema', () => {
      const selectDropdownBtn = screen.getByLabelText('Large Enum');
      expect(selectDropdownBtn.closest('div')).toHaveClass('tw-select');
    });

    it('should render the model value in the relevant control', () => {
      expect(screen.getByLabelText('String').value).toBe('foo');
    });

    it('should render an error', () => {
      expect(screen.getByRole('alert')).toHaveTextContent(/error/i);
    });

    it('should broadcast a change for the const', () => {
      expect(onChange).toHaveBeenCalledWith({ string: 'foo', const: 'abcd' }, constSchema, 'abcd');
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the text input value changes', () => {
    beforeEach(() => {
      render(<JsonSchemaForm {...props} />);

      fireEvent.change(screen.getByLabelText('String'), { target: { value: 'new' } });
    });

    it('should trigger the component onChange', () => {
      expect(onChange).toHaveBeenCalledWith({ string: 'new', const: 'abcd' }, stringSchema, 'new');
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });

  describe('when the text input value changes to something invalid', () => {
    beforeEach(() => {
      render(<JsonSchemaForm {...props} />);

      fireEvent.change(screen.getByLabelText('String'), { target: { value: 'x' } });
    });

    it('should NOT remove the value from the model', () => {
      expect(onChange).toHaveBeenLastCalledWith({ const: 'abcd', string: 'x' }, stringSchema, 'x');
    });

    describe('and then to something else invalid', () => {
      beforeEach(() => {
        fireEvent.change(screen.getByLabelText('String'), { target: { value: 'y' } });
      });

      it('should call onChange again', () => {
        expect(onChange).toHaveBeenCalledTimes(3);
      });
    });

    describe('and then to something valid', () => {
      beforeEach(() => {
        fireEvent.change(screen.getByLabelText('String'), { target: { value: 'bar' } });
      });

      it('should call onChange with the new value', () => {
        expect(onChange).toHaveBeenCalledWith(
          { string: 'bar', const: 'abcd' },
          stringSchema,
          'bar',
        );
      });

      it('should have called onChange again', () => {
        expect(onChange).toHaveBeenCalledTimes(3);
      });
    });
  });

  describe('when disabled', () => {
    it('should disable the controls', () => {
      render(<JsonSchemaForm {...props} disabled />);

      const controls = ['textbox', 'radio', 'button', 'spinbutton'];
      controls.forEach((control) => {
        screen.getAllByRole(control).forEach((node) => {
          expect(node).toBeDisabled();
        });
      });
    });
  });

  describe('when a property becomes required after initialisation, and the form is submitted', () => {
    let node;

    const optionalSchema = {
      type: 'object',
      title: 'Option A',
      properties: {
        a: {
          title: 'A Number',
          type: 'number',
        },
      },
    };

    const requiredSchema = {
      ...optionalSchema,
      required: ['a'],
    };

    beforeEach(() => {
      props = { ...props, schema: optionalSchema };
      node = render(<JsonSchemaForm {...props} />);
    });

    it('should display validation errors', () => {
      node.rerender(<JsonSchemaForm {...props} schema={requiredSchema} submitted />);

      screen.getByText('Value is required...');
    });
  });
});
