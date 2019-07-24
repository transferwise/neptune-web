import React, { Component } from 'react';
import { DateInput } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const LOCALE_OPTIONS = ['en-GB', 'en-US', 'ja-JP', 'it-IT', 'fr-FR'];
const SIZES = ['sm', 'md', 'lg'];
const MONTH_FORMATS = ['long', 'short'];

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Locale',
      state: 'locale',
      options: LOCALE_OPTIONS.map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: LOCALE_OPTIONS[0], label: LOCALE_OPTIONS[0] },
    },
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: SIZES.map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: SIZES[1], label: SIZES[1] },
    },
    {
      type: 'checkbox',
      label: 'Disabled',
      state: 'disabled',
      defaultState: false,
    },

    {
      type: 'text',
      label: 'Model date',
      state: 'value',
      defaultState: '1995-12-01',
    },
    {
      type: 'select',
      label: 'Month format',
      state: 'monthFormat',
      options: MONTH_FORMATS.map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: MONTH_FORMATS[0], label: MONTH_FORMATS[0] },
    },
  ],
};

const extraPropsDocs = { onChange: `this.handleChange` };

export default class DateInputDocs extends Component {
  state = {
    ...generateState(KNOBS),
  };

  handleChange = value => {
    // eslint-disable-next-line
    console.log(`Returned ${typeof value}`, value);
    this.setState({ value });
  };
  render() {
    const { locale, disabled, size, value, monthFormat } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="row m-t-4">
            <div className="col-md-6">
              <h2>Date Input</h2>
              <p>One of the most romantic components...</p>
              {generateCodeBlock('DateInput', KNOBS, this, extraPropsDocs)}
              <a href="https://github.com/transferwise/components/blob/master/src/dateInput/README.md">
                Read Me
              </a>
            </div>
            <div className="col-md-6">
              <DateInput
                onChange={this.handleChange}
                locale={locale.value}
                disabled={disabled}
                size={size.value}
                value={value}
                key={value}
                monthFormat={monthFormat.value}
              />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
