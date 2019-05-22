import React, { Component } from 'react';
import classNames from 'classnames';

import { generateInput, generateCodeBlock, generateState } from '../../docs/utils';
import { withTextFormat } from '../';

const InputWithTextFormat = withTextFormat('input');

const PATTERNS = [
  { label: 'Credit card number **** **** **** ****', value: '**** **** **** ****' },
  { label: 'Card expiry **/**', value: '**/**' },
  { label: 'UK sort code **-**-**', value: '**-**-**' },
  { label: 'UK phone number +(**) **** *** ***', value: '+(**) **** *** ***' },
  { label: 'Brazilian CPF ID ***.***.***-**', value: '***.***.***-**' },
  { label: 'Chilean RUT ID **.***.***-*', value: '**.***.***-*' },
];

const PLACEHOLDERS = {
  '**** **** **** ****': 'Number on front of your card',
  '**/**': 'MM/YY',
  '**-**-**': '**-**-**',
  '+(**) **** *** ***': '+(**) **** *** ***',
  '***.***.***-**': '***.***.***-**',
  '**.***.***-*': '**.***.***-*',
};

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Pattern',
      state: 'pattern',
      options: PATTERNS,
      defaultState: PATTERNS[2],
    },
  ],
};

export default class InputWithTextFormatDocs extends Component {
  constructor() {
    super();
    this.state = { ...generateState(KNOBS) };
  }

  handleOnChange = value => {
    // eslint-disable-next-line
    console.log('value', value);
  };

  render() {
    const { pattern } = this.state;
    return (
      <div className="container">
        <section className="section">
          {/* Full Component */}
          <div className="row">
            <div className="col-md-6">
              <h2>Input with text format</h2>
              <span role="img" aria-label="uhm">
                It dynamically formats the inserted value following a provided pattern
              </span>
              {getExtraDocs()}
              {generateCodeBlock('InputWithTextFormat', KNOBS, this)}
            </div>
            <div className="col-md-6">
              <div
                className={classNames({
                  ' m-b-4': true,
                  'droppable-dropping': this.state.isDropping,
                })}
              >
                <InputWithTextFormat
                  placeholder={pattern && PLACEHOLDERS[pattern.value]}
                  pattern={pattern && pattern.value}
                  className="form-control"
                  onChange={value => this.handleOnChange(value)}
                />
              </div>
              <div className="row">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const getExtraDocs = () => (
  <div>
    <p className=" m-t-5">
      Input with text format is a component that formats text entered into controls. The model value
      is preserved without formatting, and validation continues to function on the unformated. Text
      fomatting functionalities can be added using a simple HOC that provides all the method to
      current input
      <br />
      <br />
      <pre className="tw-docs-code ">
        InputWithTextFormat = withTextFormat(&apos;input&apos;) <br />
        InputWithTextFormat = withTextFormat(&apos;textarea&apos;)
      </pre>
    </p>
  </div>
);
