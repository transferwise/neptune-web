/* eslint-disable no-console */
import React, { Component } from 'react';
import { FormControl, Select } from '..';
import { FormControlType } from './FormControlType';
import { Sizes } from '../../src/common';

import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const TYPES = [
  { value: FormControlType.CHECKBOX, label: 'Checkbox' },
  { value: FormControlType.DATE, label: 'Date' },
  { value: FormControlType.NUMBER, label: 'Number' },
  { value: FormControlType.PASSWORD, label: 'Password' },
  { value: FormControlType.RADIO, label: 'Radio' },
  { value: FormControlType.SELECT, label: 'Select' },
  { value: FormControlType.TEL, label: 'Telephone' },
  { value: FormControlType.TEXT, label: 'Text' },
  { value: FormControlType.TEXTAREA, label: 'Textarea' },
  { value: FormControlType.UPLOAD, label: 'Upload' },
];

const KNOBS = {
  sharedKnob: [
    { type: 'checkbox', label: 'Is Control disabled?', state: 'disabled', defaultState: false },
    { type: 'checkbox', label: 'Is Control readOnly?', state: 'readOnly', defaultState: false },
    { type: 'checkbox', label: 'Is Control required?', state: 'required', defaultState: false },
  ],
  numberKnob: [
    {
      type: 'number',
      label: 'Min',
      state: 'min',
      defaultState: 3,
    },
    {
      type: 'number',
      label: 'Max',
      state: 'max',
      defaultState: 12,
    },
    {
      type: 'step',
      label: 'Step',
      state: 'step',
      defaultState: 1,
    },
  ],
  textKnob: [
    {
      type: 'text',
      label: 'Value',
      state: 'value',
      defaultState: false,
    },
  ],
};

export default class FormControlDocs extends Component {
  state = {
    ...generateState(KNOBS),
    type: TYPES[0],
    options: [
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three', secondary: 'This is a secondary text' },
    ],
  };

  handleOnChange = value => {
    console.log('[FormControl] onChange called');
    this.setState({ value });
  };
  handleOnBlur = () => {
    console.log('[FormControl] onBlur called');
  };
  handleOnFocus = () => {
    console.log('[FormControl] onFocus called');
  };

  handleSelectChange = selectedValue => {
    let newValue = '';

    if (
      selectedValue.value === FormControlType.DATETIME ||
      selectedValue.value === FormControlType.DATE
    ) {
      newValue = new Date().toISOString();
    }
    if (selectedValue.value === FormControlType.CHECKBOX) {
      newValue = false;
    }

    this.setState({
      type: selectedValue,
      value: newValue,
    });
  };

  render() {
    const {
      type,
      step,
      options,
      disabled,
      readOnly,
      required,
      min,
      max,
      value,
      searchPlaceholder,
    } = this.state;

    const extraProps = {
      autoComplete: false,
      id: 'form-control-id',
      locale: 'en',
      name: 'form-control-name',
      onBlur: 'console.log',
      onChange: 'console.log',
      onFocus: 'console.log',
      placeholder: 'Search placeholder',
      displayPattern: '**-**-**',
    };

    return (
      <div className="container">
        <section className="section">
          <div className="row m-t-4">
            <div className="col-md-6">
              <h2>FormControl</h2>
              <p>To render atomic form elements driven by Dynamic Forms API schema</p>
              {generateCodeBlock('FormControl', KNOBS, this, extraProps)}
            </div>
            <div className="col-md-6">
              <FormControl
                {...extraProps}
                type={type.value}
                step={step}
                options={options}
                disabled={disabled}
                readOnly={readOnly}
                required={required}
                onChange={this.handleOnChange}
                onBlur={this.handleOnBlur}
                onFocus={this.handleOnFocus}
                minLength={undefined}
                maxLength={undefined}
                min={min}
                max={max}
                value={value}
                searchPlaceholder={searchPlaceholder}
                size={Sizes.MEDIUM}
                uploadProps={{ usDisabled: disabled, size: Sizes.MEDIUM }}
              />
              <div className="m-t-2">
                {this.state.value && <pre>{JSON.stringify(this.state.value)}</pre>}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="type-selector" className="control-label">
                    Type
                  </label>
                  <Select
                    required
                    id="type-selector"
                    selected={{ ...type }}
                    options={TYPES}
                    onChange={selectedValue => this.handleSelectChange(selectedValue)}
                  />
                </div>

                {KNOBS.sharedKnob.map(knob => generateInput(knob, this))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" />
          </div>
        </section>
      </div>
    );
  }
}
