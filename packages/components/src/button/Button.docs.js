import React, { Component } from 'react';
import { Button } from '..';
import { ButtonSize, ButtonState, ButtonType } from './Button';
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
      type: 'select',
      label: 'Size',
      state: 'size',
      options: Object.values(ButtonSize).map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: ButtonSize.Medium, label: ButtonSize.Medium },
    },
    {
      type: 'select',
      label: 'State',
      state: 'state',
      options: Object.values(ButtonState).map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: ButtonState.Default, label: ButtonState.Default },
    },
    {
      type: 'select',
      label: 'Type',
      state: 'type',
      options: Object.values(ButtonType).map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: ButtonType.Pay, label: ButtonType.Pay },
    },
    {
      type: 'checkbox',
      label: 'Block (Full size of container)',
      state: 'block',
      defaultState: false,
    },
  ],
};
const extraPropsDocs = { onClick: `this.handleClick` };

export default class ButtonDocs extends Component {
  state = {
    ...generateState(KNOBS),
  };

  render() {
    const { label, state, size, type, block } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Button</h2>
              <p>Simple wrapper component for all button types and their states</p>
              {generateCodeBlock('Button', KNOBS, this, extraPropsDocs)}
            </div>
            <div className="col-md-6 m-t-2">
              <Button
                label={label}
                size={size.value}
                state={state.value}
                type={type.value}
                block={block}
                /* eslint-disable no-alert */
                onClick={() => alert('Clicked button')}
              />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
