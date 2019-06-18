import React, { Component } from 'react';
import { Tooltip } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const KNOBS = {
  knobs: [
    {
      type: 'text',
      label: 'Label',
      state: 'label',
      defaultState: 'Wow',
    },
    {
      type: 'select',
      label: 'Position',
      state: 'position',
      options: Object.values(Tooltip.Position).map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: Tooltip.Position.TOP, label: Tooltip.Position.TOP },
    },
    {
      type: 'number',
      label: 'Offset',
      state: 'offset',
      defaultState: 0,
    },
  ],
};

export default class TooltipDocs extends Component {
  state = {
    ...generateState(KNOBS),
  };

  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Tooltip</h2>
              <p>And a tip of the tool for you</p>
              {generateCodeBlock('Tooltip', KNOBS, this, {})}
              <p>Every property that is undefined can be omitted.</p>
            </div>
            <div className="col-md-6">
              <Tooltip
                label={this.state.label}
                position={this.state.position.value}
                offset={this.state.offset}
              >
                <button className="btn btn-default">Hover me</button>
              </Tooltip>
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
