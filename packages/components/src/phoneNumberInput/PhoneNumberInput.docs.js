import React, { Component } from 'react';
import { PhoneNumberInput } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const SIZES = ['sm', 'md', 'lg'];

const LOCALES = [
  { value: 'en-GB', label: 'English UK' },
  { value: 'en-US', label: 'English US' },
  { value: 'fr-FR', label: 'French' },
  { value: 'es-ES', label: 'Spain' },
  { value: 'js-JP', label: 'Japanese' },
];

const KNOBS = {
  knobs: [
    {
      type: 'text',
      label: 'Value',
      state: 'value',
      defaultState: '',
    },
    {
      type: 'select',
      label: 'Locale',
      state: 'locale',
      options: LOCALES,
      defaultState: LOCALES[0],
    },
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: SIZES.map(s => ({ value: s, label: s })),
      defaultState: { value: SIZES[1], label: SIZES[1] },
    },
    {
      type: 'text',
      label: 'Search placeholder',
      state: 'searchPlaceholder',
      defaultState: 'Prefix',
    },
    {
      type: 'text',
      label: 'Placeholder',
      state: 'placeholder',
      defaultState: 'placeholder',
    },
    {
      type: 'checkbox',
      label: 'Required',
      state: 'required',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Disabled',
      state: 'disabled',
      defaultState: false,
    },
  ],
};

const extraProps = {
  onChange: 'console.log',
};

export default class PhoneNumberInputDocs extends Component {
  state = {
    ...generateState(KNOBS),
    value: '',
  };

  handleOnChange = value => {
    // eslint-disable-next-line
    console.log('returned value', value);
  };

  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>PhoneNumberInput</h2>
              <p>It allows to insert a phone number</p>
              {generateCodeBlock('Button', KNOBS, this, extraProps)}
              <p>
                A control for inputting telephone numbers. While the control allows common special
                characters (spaces, periods, hyphens), these are stripped from the resulting model,
                which always begins with a <strong>+</strong> and contains the numerals without
                ornamentation e.g. +1234567890.
              </p>
              <p>
                When prefilled with an existing value, the select box will choose the longest
                matching prefix. For example, <strong>+1684123456</strong> will select{' '}
                <strong>+1684</strong> (American Samoa), not <strong>+1</strong> (United States).
              </p>
            </div>
            <div className="col-md-6">
              <PhoneNumberInput
                onChange={value => this.handleOnChange(value)}
                value={this.state.value}
                locale={this.state.locale.value}
                disabled={this.state.disabled}
                required={this.state.required}
                size={this.state.size.value}
                searchPlaceholder={this.state.searchPlaceholder}
                placeholder={this.state.placeholder}
              />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
