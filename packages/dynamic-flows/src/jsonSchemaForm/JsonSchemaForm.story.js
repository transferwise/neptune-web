import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import JsonSchemaForm from './JsonSchemaForm';

import simpleSchema from './schemas/simple.json';
import oneOfSchema from './schemas/oneOf.json';
import allOfSchema from './schemas/allOf.json';
import audRecipientSchema from './schemas/audRecipient.json';

export default {
  component: JsonSchemaForm,
  title: 'JsonSchemaForm',
};

export const basic = () => {
  const schemas = {
    simple: simpleSchema,
    oneOf: oneOfSchema,
    allOf: allOfSchema,
    'AUD Recipient': audRecipientSchema,
  };

  const schema = select('schema', schemas, simpleSchema);

  const model = {
    number: 3,
    string: 'hi',
  };

  const locale = select('locale', ['en-GB', 'jp-JP'], 'en-GB');
  const stringError = text('error from server', '');
  const errors = { string: stringError };
  const translations = {};
  const submitted = boolean('submitted', false);
  const disabled = boolean('disabled', false);

  return (
    <JsonSchemaForm
      schema={schema}
      model={model}
      errors={errors}
      locale={locale}
      translations={translations}
      onChange={action('onChange')}
      submitted={submitted}
      disabled={disabled}
    />
  );
};
