/* eslint-disable no-console */
import React, { Component } from 'react';
import FastFlagIcon from '@transferwise/icons/react/fast-flag'; // eslint-disable-line import/no-extraneous-dependencies
import { generateInput, generateCodeBlock, generateState } from '../../docs/utils';
import { RadioOption } from '..';

const KNOBS = {
  knobs: [
    { type: 'checkbox', label: 'Complex', state: 'complex', defaultState: false },
    { type: 'checkbox', label: 'Disabled', state: 'disabled', defaultState: false },
  ],
};

class RadioOptionDocs extends Component {
  state = { ...generateState(KNOBS) };

  render() {
    const { complex, disabled } = this.state;

    const extraPropsDocs = {
      id: 'radio-option',
      name: 'radio-option',
      title: 'Radio option',
      onChange: 'this.handleChange',
      content: getContentForComplexState(complex),
      media: '<FastFlagIcon />',
    };

    const { valueSelected } = this.state;
    return (
      <div className="container" id="radio-option-docs">
        <div className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Radio option</h2>
              <p>Video killed the radio option ♫</p>
              {generateCodeBlock('RadioOption', KNOBS, this, extraPropsDocs)}
            </div>
            <div className="col-md-6">
              <RadioOption
                media={<FastFlagIcon />}
                title="Radio option"
                content={getContentForComplexState(complex)}
                id="id"
                name="radio-option"
                checked={valueSelected === 'value'}
                onChange={val => {
                  this.setState({ valueSelected: val });
                }}
                complex={complex}
                disabled={disabled}
                value="value"
              />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function getContentForComplexState(complex) {
  return complex
    ? 'Complex items should be used for items with long content. Their button and media will be aligned to the top.'
    : 'Normally, the button and icon are vertically centered.';
}

export default RadioOptionDocs;
