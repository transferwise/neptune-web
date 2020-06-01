import React from 'react';
import JsonSchemaForm from './JsonSchemaForm';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

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

  const errors = {
    string: 'Manual error',
  };

  const locale = select('locale', ['en-GB', 'jp-JP'], 'en-GB');

  const translations = {};
  const submitted = boolean('submitted', false);

  return (
    <JsonSchemaForm
      schema={schema}
      model={model}
      errors={errors}
      locale={locale}
      translations={translations}
      onChange={action('onChange')}
      submitted={submitted}
    />
  );
};
