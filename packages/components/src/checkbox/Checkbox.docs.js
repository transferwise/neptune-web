import React, { Component } from 'react';
import { Checkbox } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const KNOBS = {
  knobs: [
    {
      type: 'text',
      label: 'Label',
      state: 'label',
      defaultState: 'Send Money',
    },
    {
      type: 'checkbox',
      label: 'Required?',
      state: 'required',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Disabled?',
      state: 'disabled',
      defaultState: false,
    },
  ],
  hiddenKnobs: [
    {
      type: 'checkbox',
      label: 'checked',
      state: 'checked',
      defaultState: false,
    },
  ],
};

const extraPropsDocs = { onChange: 'this.handleCheckChange' };

export default class CheckboxDocs extends Component {
  state = { ...generateState(KNOBS) };

  render() {
    const { checked, required, disabled, label } = this.state;
    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Checkbox</h2>
              <p>Check yourself before you wreck yourself</p>
              {generateCodeBlock('Checkbox', KNOBS, this, extraPropsDocs)}
            </div>
            <div className="col-md-6  m-t-2">
              <Checkbox
                label={label}
                onChange={value => this.setState({ checked: value })}
                checked={checked}
                required={required}
                disabled={disabled}
              />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
