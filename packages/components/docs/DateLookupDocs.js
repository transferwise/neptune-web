import React, { Component } from 'react';
import { DateLookup, Select, Checkbox } from '../src';

const SIZES = ['sm', 'md', 'lg'];

export default class DateLookupDocs extends Component {
  state = {
    date: null,
    locale: 'en-GB',
    hasPlaceholder: false,
    placeholder: 'Choose a date...',
    hasLabel: false,
    label: 'Date',
    shortDate: false,
    disabled: false,
  };

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  createEventStateLink(name) {
    return event => this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Date Lookup</h2>
              <p>It&apos;s a date</p>
            </div>
            <div className="col-md-6">
              {/* eslint-disable no-console */}
              <DateLookup
                value={this.state.date}
                min={this.state.min}
                max={this.state.max}
                size={this.state.size}
                locale={this.state.locale}
                placeholder={this.state.hasPlaceholder ? this.state.placeholder : undefined}
                label={this.state.hasLabel ? this.state.label : undefined}
                shortDate={this.state.shortDate}
                disabled={this.state.disabled}
                onChange={this.createStateLink('date')}
              />
              {/* eslint-enable no-console */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
                {`<DateLookup
  value={${this.state.date ? 'this.state.date' : undefined}}
  min={${this.state.min ? 'this.state.min' : undefined}}
  max={${this.state.max ? 'this.state.max' : undefined}}
  locale="${this.state.locale}"
  size=${this.state.size ? `"${this.state.size}"` : `{undefined}`}
  placeholder=${this.state.hasPlaceholder ? `"${this.state.placeholder}"` : `{undefined}`}
  label=${this.state.hasLabel ? `"${this.state.label}"` : `{undefined}`}
  shortDate={${this.state.shortDate}}
  disabled={${this.state.disabled}}
  onChange={this.handleDateChange}
/>`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
              <p>
                Properties <code className="tw-docs-inline-code">value</code>,{' '}
                <code className="tw-docs-inline-code">min</code> and{' '}
                <code className="tw-docs-inline-code">max</code> must be instances of{' '}
                <code className="tw-docs-inline-code">Date</code>. Pass in dates in users timezone,{' '}
                <code className="tw-docs-inline-code">new Date()</code> for today.
              </p>
              <p>
                These{' '}
                <a
                  href="https://github.com/transferwise/components/blob/master/src/dateLookup/EXAMPLES.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  examples
                </a>{' '}
                might be helpful.
              </p>
            </div>
            <div className="col-md-6">
              <label htmlFor="date-lookup-min-date" className="control-label">
                Min Date
              </label>
              <DateLookup
                id="date-lookup-min-date"
                value={this.state.min}
                max={this.state.max}
                placeholder="Choose min date..."
                onChange={this.createStateLink('min')}
              />
              <div className="m-t-3" />
              <label htmlFor="date-lookup-max-date" className="control-label">
                Max Date
              </label>
              <DateLookup
                id="date-lookup-max-date"
                value={this.state.max}
                min={this.state.min}
                placeholder="Choose max date..."
                onChange={this.createStateLink('max')}
              />
              <div className="m-t-3" />
              <label htmlFor="date-lookup-size" className="control-label">
                Size
              </label>
              <Select
                id="date-lookup-size"
                selected={
                  this.state.size ? { value: this.state.size, label: this.state.size } : undefined
                }
                options={SIZES.map(size => ({ value: size, label: size }))}
                onChange={selection =>
                  this.setState({ size: selection ? selection.value : undefined })
                }
              />
              <div className="m-t-3" />
              <label htmlFor="date-lookup-locale" className="control-label">
                Locale
              </label>
              <input
                id="date-lookup-locale"
                type="text"
                className="form-control"
                value={this.state.locale}
                onChange={this.createEventStateLink('locale')}
              />
              <div className="m-t-3" />
              <Checkbox
                label="Custom placeholder?"
                onChange={this.createStateLink('hasPlaceholder')}
                checked={this.state.hasPlaceholder}
              />
              <div className="m-t-3" />
              {this.state.hasPlaceholder ? (
                <input
                  type="text"
                  value={this.state.placeholder}
                  onChange={this.createEventStateLink('placeholder')}
                  placeholder="Placeholder"
                  className="form-control"
                />
              ) : (
                ''
              )}
              <div className="m-t-3" />
              <Checkbox
                label="Inline label?"
                onChange={this.createStateLink('hasLabel')}
                checked={this.state.hasLabel}
              />
              <div className="m-t-3" />
              {this.state.hasLabel ? (
                <input
                  type="text"
                  value={this.state.label}
                  onChange={this.createEventStateLink('label')}
                  placeholder="Label"
                  className="form-control"
                />
              ) : (
                ''
              )}
              <div className="m-t-3" />
              <Checkbox
                label="Short Date?"
                onChange={this.createStateLink('shortDate')}
                checked={this.state.shortDate}
              />
              <div className="m-t-3" />
              <Checkbox
                label="Disabled?"
                onChange={this.createStateLink('disabled')}
                checked={this.state.disabled}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
