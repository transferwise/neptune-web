import React, { Component } from 'react';
import { DateLookup } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const SIZES = ['sm', 'md', 'lg'];

const KNOBS = {
  knobs: [
    {
      type: 'text',
      label: 'Locale',
      state: 'locale',
      defaultState: 'en-GB',
    },
    {
      type: 'text',
      label: 'Label',
      state: 'label',
      defaultState: '',
    },
    {
      type: 'text',
      label: 'Placeholder',
      state: 'placeholder',
      defaultState: '',
    },
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: SIZES.map(size => ({ value: size, label: size })),
      defaultState: { value: SIZES[1], label: SIZES[1] },
    },
    {
      type: 'checkbox',
      label: 'Disabled?',
      state: 'disabled',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Short Date?',
      state: 'shortDate',
      defaultState: false,
    },
    {
      type: 'date-lookup',
      label: 'Min Date',
      state: 'min',
      defaultState: null,
    },
    {
      type: 'date-lookup',
      label: 'Max Date',
      state: 'max',
      defaultState: null,
    },
  ],
  hiddenKnobs: [
    {
      type: 'text',
      label: 'Input',
      state: 'value',
      defaultState: null,
    },
  ],
};

const extraProps = { onChange: 'this.handleDateChange' };

export default class DateLookupDocs extends Component {
  state = {
    ...generateState(KNOBS),
  };

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Date Lookup</h2>
              <p>It&apos;s a date</p>
              {generateCodeBlock('DateLookup', KNOBS, this, extraProps)}
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
              {/* eslint-disable no-console */}
              <DateLookup
                value={this.state.value}
                min={this.state.min}
                max={this.state.max}
                size={this.state.size.value}
                locale={this.state.locale}
                placeholder={this.state.placeholder}
                label={this.state.label}
                shortDate={this.state.shortDate}
                disabled={this.state.disabled}
                onChange={this.createStateLink('value')}
              />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>

              {/* eslint-enable no-console */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
