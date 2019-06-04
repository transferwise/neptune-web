import React, { Component } from 'react';
import classNames from 'classnames';

import { generateInput, generateCodeBlock, generateState } from '../../docs/utils';
import InputWithDisplayFormat from './';

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
      state: 'displayPattern',
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
    const { displayPattern } = this.state;
    return (
      <div className="container">
        <section className="section">
          {/* Full Component */}
          <div className="row">
            <div className="col-md-6">
              <h2>Input with display format</h2>
              <span role="img" aria-label="uhm">
                It dynamically formats the inserted value following a provided displayPattern
              </span>
              {getExtraDocs()}
              {generateCodeBlock('InputWithDisplayFormat', KNOBS, this)}
            </div>
            <div className="col-md-6">
              <div
                className={classNames({
                  ' m-b-4': true,
                  'droppable-dropping': this.state.isDropping,
                })}
              >
                <InputWithDisplayFormat
                  placeholder={displayPattern && PLACEHOLDERS[displayPattern.value]}
                  displayPattern={displayPattern && displayPattern.value}
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
      Input with display format is a component that formats text entered into controls. The model
      value is preserved without formatting, and validation continues to function on the
      unformatted.
    </p>
  </div>
);
