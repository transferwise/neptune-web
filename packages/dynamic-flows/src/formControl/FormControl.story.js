import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import FormControl from './FormControl';

export default {
  component: FormControl,
  title: 'FormControl',
};

export const basic = () => {
  const control = select('control', Object.values(FormControl.Type), 'text');
  const size = select('size', Object.values(FormControl.Size), 'md');
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
    <FormControl
      autoComplete={false}
      id="form-control-id"
      locale="en"
      name="form-control-name"
      placeholder="Search placeholder"
      displayPattern={null}
      label={label}
      type={control}
      step={1}
      options={[
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three', secondary: 'secondary text' },
      ]}
      disabled={false}
      readOnly={false}
      required={false}
      onChange={(val) => action(val)}
      onBlur={(val) => action(val)}
      onFocus={(val) => action(val)}
      minLength={null}
      maxLength={null}
      min={null}
      max={null}
      minDate={null}
      maxDate={null}
      mode={FormControl.DateMode.DAY_MONTH_YEAR}
      monthFormat={FormControl.MonthFormat.LONG}
      value={value[control] || ''}
      searchPlaceholder="placeholder"
      size={size}
      uploadProps={{ usDisabled: false, size: 'md' }}
    />
  );
};
