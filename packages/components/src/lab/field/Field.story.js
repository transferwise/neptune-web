import React from 'react';
import { Checkbox, DateInput } from '@transferwise/components';
import { action } from '@storybook/addon-actions';
import Field from './Field';

export default {
  component: Field,
  title: 'Lab/Field',
};

export const basic = () => {
  return (
    <>
      <Field
        error={null}
        help="Please fill this form with a value length between 3 and 10"
        id="id"
        initValue="Neptune is cool"
        onChange={(val) => action(val)}
        submitted={false}
        label="Input type text"
        type="string"
        validation={{
          maxLength: { value: 10, message: 'The value should be shorter than 10 characters' },
          minLength: { value: 3, message: 'The value should be longer than 3 characters' },
          pattern: { value: '^[a-z ]+$', message: 'Only lowercase allowed' },
          required: { value: true, message: 'This field is required' },
        }}
      >
        <input type="text" className="form-control" />
      </Field>
      <Field
        error={null}
        help="Please fill this form with a value between 3 and 10"
        id="id1"
        initValue={null}
        onChange={(val) => action(val)}
        submitted={false}
        label="Input type number"
        type="number"
        validation={{
          minimum: { value: 3, message: 'The value should bigger than 3' },
          maximum: { value: 10, message: 'The value should smaller than 10' },
          required: { value: true, message: 'This field is required' },
        }}
      >
        <input type="number" className="form-control" />
      </Field>

      <Field
        error={null}
        help="Please insert a date between 2 and 3 of January 2000."
        id="id2"
        label="Date Input field"
        initValue={null}
        onChange={(val) => action(val)}
        submitted={false}
        type="string"
        validation={{
          required: { value: true, message: 'This field is required' },
          minimum: {
            value: '2000-01-02',
            message: 'Please insert a date later than 2 of January 2000',
          },
          maximum: {
            value: '2000-01-03',
            message: 'Please insert a date earlier than 3 of January 2000',
          },
        }}
      >
        <DateInput
          onChange={(val) => action(val)}
          size={DateInput.Size.MEDIUM}
          value={new Date()}
          placeholders={{
            day: 'dd',
            month: 'mm',
            year: 'YYYY',
          }}
        />
      </Field>
      <Field
        error={null}
        help="Please check to accept the Neptune Web conditions."
        id="id3"
        initValue={null}
        onChange={(val) => action(val)}
        submitted={false}
        type="boolean"
        validation={{
          required: { value: true, message: 'This field is required' },
        }}
      >
        <Checkbox label="label" onChange={(val) => action(val)} checked={false} />
      </Field>
    </>
  );
};
