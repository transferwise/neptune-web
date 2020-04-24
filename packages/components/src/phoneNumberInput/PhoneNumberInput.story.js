import React from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import { select, boolean } from '@storybook/addon-knobs';

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
      onChange={(v) => console.log(v)}
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
