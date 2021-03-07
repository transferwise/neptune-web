import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import PhoneNumberInput from './PhoneNumberInput';

export default {
  component: PhoneNumberInput,
  title: 'PhoneNumberInput',
};

export const basic = () => {
  const locale = select('locale', ['en-GB', 'jp-JP'], 'en-GB');
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const size = select('size', ['sm', 'md', 'lg'], 'md');

  return (
    <PhoneNumberInput
      onChange={(v) => action(v)}
      initialValue="+447573135343"
      locale={locale}
      countryCode=""
      disabled={disabled}
      required={required}
      size={size}
      searchPlaceholder="searchPlaceholder"
      placeholder="placeholder"
    />
  );
};
