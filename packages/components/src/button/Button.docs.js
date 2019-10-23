import React, { Component } from 'react';
import { Button } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const KNOBS = {
  knobs: [
    {
      type: 'text',
      label: 'Children',
      state: 'children',
      defaultState: 'Send Money',
    },
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: Object.values(Button.Size).map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: Button.Size.Medium, label: Button.Size.Medium },
    },
    {
      type: 'select',
      label: 'Type',
      state: 'type',
      options: Object.values(Button.Type).map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: Button.Type.Pay, label: Button.Type.Pay },
    },
    {
      type: 'select',
      label: 'htmlType',
      state: 'htmlType',
      options: ['button', 'submit', 'reset'].map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: 'button', label: 'button' },
    },
    {
      type: 'checkbox',
      label: 'Loading',
      state: 'loading',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Disabled',
      state: 'disabled',
      defaultState: false,
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
    const { children, size, type, block, disabled, loading, htmlType } = this.state;

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
                size={size.value}
                type={type.value}
                disabled={disabled}
                loading={loading}
                block={block}
                htmlType={htmlType.value}
                /* eslint-disable no-alert */
                onClick={() => alert('Clicked button')}
              >
                {children}
              </Button>
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
