import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Field from './Field';
import FormControl from '../formControl';

export default {
  component: Field,
  title: 'Field',
};

export const basic = () => {
  const control = select('control', Object.values(FormControl.Type));
  const label = text('label', 'label');

  const value = {
    text: 'a value',
    'date-lookup': new Date(),
    date: new Date(),
    'date-time': new Date(),
    tel: '+447573135343',
    number: 123456,
  };

  return (
    <Field
      value={value[control] || ''}
      errorMessage=""
      warningMessage=""
      label={label}
      name="text"
      field={{
        control,
        type: 'string',
        format: '',
        displayPattern: '',
        help: {
          message: '',
          image: '',
          list: [],
          do: ['good', 'much better'],
          dont: ['uhm not so good', 'erm no!'],
        },
        options: [
          { label: 'Mars', value: 'mars' },
          { label: 'Earth', value: 'earth' },
        ],
        label: 'a label',
        required: false,
        disabled: false,
        hidden: false,
        readOnly: false,
        autoComplete: false,
        placeholder: 'a placeholder',
        searchPlaceholder: 'search',
        minLength: null,
        maxLength: null,
        minimum: 10,
        maximum: 99,
        validationMessages: {
          required: 'Number is required',
          minimum: 'Must be 10 or greater',
          maximum: 'Must be 99 or less',
        },
      }}
      onChange={(val) => action(val)}
    />
  );
};
