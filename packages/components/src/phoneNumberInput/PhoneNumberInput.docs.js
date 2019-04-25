import React, { Component } from 'react';
import { Checkbox, PhoneNumberInput, Select } from '..';

const SIZES = ['sm', 'md', 'lg'];
const LOCALES = [
  { value: 'en-GB', label: 'English UK' },
  { value: 'en-US', label: 'English US' },
  { value: 'fr-FR', label: 'French' },
  { value: 'es-ES', label: 'Spain' },
  { value: 'js-JP', label: 'Japanese' },
];

export default class PhoneNumberInputDocs extends Component {
  state = {
    required: false,
    disabled: false,
    value: '',
    locale: LOCALES[0],
    size: 'md',
    searchPlaceholder: 'Prefix',
    placeholder: 'placeholder',
  };

  handleOnChange = value => {
    // eslint-disable-next-line
    console.log('returned value', value);
  };

  render() {
    const docsCode = `<PhoneNumberInput
  locale="${this.state.locale.value}"
  value="${this.state.value}"
  disabled={${this.state.disabled}}
  required={${this.state.required}}
  size="${this.state.size}"
  searchPlaceholder="${this.state.searchPlaceholder}"
  placeholder="${this.state.placeholder}"
  onChange = {'console.log'}
 />`;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>PhoneNumberInput</h2>
              <p>It allows to insert a phone number</p>
            </div>
            <div className="col-md-6">
              <PhoneNumberInput
                onChange={value => this.handleOnChange(value)}
                value={this.state.value}
                locale={this.state.locale.value}
                disabled={this.state.disabled}
                required={this.state.required}
                size={this.state.size}
                searchPlaceholder={this.state.searchPlaceholder}
                placeholder={this.state.placeholder}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">{docsCode}</pre>
              {/* eslint-enable react/jsx-indent */}
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
              <div className="row m-t-3">
                <div className="col-md-6">
                  <Checkbox
                    label="Required"
                    checked={this.state.required}
                    onChange={() => this.setState({ required: !this.state.required })}
                  />
                </div>
                <div className="col-md-6">
                  <Checkbox
                    label="Disabled"
                    checked={this.state.disabled}
                    onChange={() => this.setState({ disabled: !this.state.disabled })}
                  />
                </div>
              </div>
              <div className="row m-t-3">
                <div className="col-md-6">
                  <label htmlFor="phone-number-input-locale">Locale</label>
                  <Select
                    id="phone-number-input-locale"
                    selected={{ ...this.state.locale }}
                    options={LOCALES.map(l => ({ ...l }))}
                    onChange={locale => this.setState({ locale })}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone-number-input-value">Value</label>
                  <input
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })}
                    className="form-control phone-number-input-value"
                  />
                </div>
              </div>
              <div className="row m-t-3">
                <div className="col-md-6">
                  <label htmlFor="phone-number-input-size">Size</label>
                  <Select
                    id="phone-number-input-size"
                    selected={
                      this.state.size ? { value: this.state.size, label: this.state.size } : null
                    }
                    options={SIZES.map(s => ({ value: s, label: s }))}
                    onChange={selection =>
                      this.setState({ size: selection ? selection.value : null })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone-number-input-size">Search placeholder</label>
                  <input
                    value={this.state.searchPlaceholder}
                    onChange={event => this.setState({ searchPlaceholder: event.target.value })}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row m-t-3">
                <div className="col-md-6">
                  <label htmlFor="phone-number-input-size">Placeholder</label>
                  <input
                    value={this.state.placeholder}
                    onChange={event => this.setState({ placeholder: event.target.value })}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
