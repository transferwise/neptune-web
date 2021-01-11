import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Provider } from '@transferwise/components';
import {
  mapLocale,
  LOCALES,
  DEFAULT_LOCALE,
} from '@transferwise/components/build/es/polyfill/common/locale';
import componentTranslations from '@transferwise/components/build/i18n';
import JsonSchemaForm from './JsonSchemaForm';

import simpleSchema from './schemas/simple.json';
import oneOfSchema from './schemas/oneOf.json';
import allOfSchema from './schemas/allOf.json';
import audRecipientSchema from './schemas/audRecipient.json';
import fileUploadPersistAsyncSchema from './schemas/uploadPersistAsync.json';
import currencySchema from './schemas/currency.json';

import translations from '../../build/i18n';

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
    'File upload persist async': fileUploadPersistAsyncSchema,
    currency: currencySchema,
  };

  const schema = select('schema', schemas, simpleSchema);

  const model = {
    number: 3,
    string: 'hi',
  };

  const locale = select('locale', LOCALES, DEFAULT_LOCALE);
  const stringError = text('error from server', '');
  const errors = { string: stringError };
  const translationsFromProps = {};
  const submitted = boolean('submitted', false);
  const disabled = boolean('disabled', false);

  const mappedLocale = mapLocale(locale);
  // eslint-disable-next-line fp/no-mutating-assign
  const messages = Object.assign(
    translations[mappedLocale] || translations[DEFAULT_LOCALE],
    componentTranslations[mappedLocale] || componentTranslations[DEFAULT_LOCALE],
  );

  return (
    <Provider i18n={{ locale: mappedLocale, messages }}>
      <JsonSchemaForm
        schema={schema}
        model={model}
        errors={errors}
        locale={locale}
        translations={translationsFromProps}
        onChange={action('onChange')}
        submitted={submitted}
        disabled={disabled}
        onPersistAsync={() => {}}
      />
    </Provider>
  );
};
