import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, date, text } from '@storybook/addon-knobs';
import DateInput from './DateInput';

export default {
  component: DateInput,
  title: 'DateInput',
};

export const basic = () => {
  const locale = select('locale', ['en-GB', 'jp-JP'], 'en-GB');
  const disabled = boolean('disabled', false);
  const size = select('size', Object.values(DateInput.Size), DateInput.Size.MEDIUM);
  const monthFormat = select(
    'monthFormat',
    Object.values(DateInput.MonthFormat),
    DateInput.MonthFormat.LONG,
  );
  const mode = select('mode', Object.values(DateInput.DateMode), DateInput.DateMode.DAY_MONTH_YEAR);
  const value = date('value', new Date('2020-01-01'));
  const day = text('dayPlacheholder', 'DD');
  const month = text('monthPlaceholder', 'Select an option...');
  const year = text('yearPlaceholder', 'YYYY');

  return (
    <DateInput
      onChange={(val) => action(val)}
      locale={locale}
      disabled={disabled}
      size={size}
      value={new Date(value)}
      monthFormat={monthFormat}
      mode={mode}
      key={value}
      placeholders={{
        day,
        month,
        year,
      }}
    />
  );
};
