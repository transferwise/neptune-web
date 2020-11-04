import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, date, text } from '@storybook/addon-knobs';
import DateLookup from './DateLookup';

export default {
  component: DateLookup,
  title: 'DateLookup',
};

export const basic = () => {
  const disabled = boolean('disabled', false);
  const label = text('label', 'label');
  const locale = select('locale', ['en-GB', 'jp-JP'], 'en-GB');
  const monthFormat = select('monthFormat', ['long', 'short']);
  const placeholder = text('placeholder', 'placeholder');
  const size = select('size', Object.values(DateLookup.Size), DateLookup.Size.MEDIUM);

  const value = date('value', new Date('02-02-2000'));
  const minvalue = date('minvalue', new Date('2000-01-01'));
  const maxvalue = date('maxvalue', new Date('2040-03-01'));

  return (
    <DateLookup
      disabled={disabled}
      label={label}
      locale={locale}
      max={new Date(maxvalue)}
      min={new Date(minvalue)}
      monthFormat={monthFormat}
      onChange={(v) => action(v)}
      placeholder={placeholder}
      size={size}
      value={new Date(value)}
    />
  );
};

export const rightAligned = () => {
  const disabled = boolean('disabled', false);
  const label = text('label', 'label');
  const locale = select('locale', ['en-GB', 'jp-JP'], 'en-GB');
  const monthFormat = select('monthFormat', ['long', 'short']);
  const placeholder = text('placeholder', 'placeholder');
  const size = select('size', Object.values(DateLookup.Size), DateLookup.Size.MEDIUM);

  const value = date('value', new Date('02-02-2000'));
  const minvalue = date('minvalue', new Date('2000-01-01'));
  const maxvalue = date('maxvalue', new Date('2040-03-01'));

  return (
    <div className="row">
      <div className="col-xs-6">
        <p>
          This example demonstrates the automatic right alignment behaviour of the calendar. If,
          when the calendar is opened, it is cut off on the right, the component will align the
          calendar to the rightmost edge of the lookup input.
        </p>
      </div>
      <div className="col-xs-6">
        <DateLookup
          disabled={disabled}
          label={label}
          locale={locale}
          max={new Date(maxvalue)}
          min={new Date(minvalue)}
          monthFormat={monthFormat}
          onChange={(v) => action(v)}
          placeholder={placeholder}
          size={size}
          value={new Date(value)}
        />
      </div>
    </div>
  );
};
