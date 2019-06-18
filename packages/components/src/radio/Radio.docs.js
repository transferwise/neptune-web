/*eslint-disable*/
import React, { Component } from 'react';
import { Radio } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const KNOBS = {
  knobs: [
    {
      type: 'text',
      label: 'Label',
      state: 'label',
      defaultState: 'Selecteroni',
    },
    {
      type: 'text',
      label: 'Name',
      state: 'name',
      defaultState: 'radio-name',
    },
    {
      type: 'checkbox',
      label: 'Disabled',
      state: 'disabled',
      defaultState: false,
    },
  ],
  hiddenKnobs: [
    {
      type: 'checkbox',
      label: 'Checked',
      state: 'checked',
      defaultState: false,
    },
  ],
};

const extraProps = { onChange: 'this.handleRadioChange' };

export default class RadioDocs extends Component {
  state = { ...generateState(KNOBS) };

  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-sm-6">
              <h2>Radio</h2>
              <p>I&apos;m radioing this in</p>
              {generateCodeBlock('Radio', KNOBS, this, extraProps)}
            </div>

            <div className="col-sm-6 m-t-1">
              <Radio
                label={`${this.state.label}`}
                name={`${this.state.name}`}
                id={`${this.state.name}`}
                checked={this.state.checked}
                disabled={this.state.disabled}
                onChange={() => this.setState({ checked: !this.state.checked })}
              />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
