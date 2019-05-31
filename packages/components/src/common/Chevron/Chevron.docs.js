import React, { Component } from 'react';
import { Chevron } from '../..';
import { generateInput, generateCodeBlock, generateState } from '../../../docs/utils';
import { Orientation, Size } from './Chevron';

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Orientation',
      state: 'orientation',
      options: Object.values(Orientation).map(value => ({ label: value, value })),
      defaultState: { label: Orientation.BOTTOM, value: Orientation.BOTTOM },
    },
    { type: 'checkbox', label: 'Flip', state: 'flip', defaultState: false },
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: Object.values(Size).map(value => ({ label: value, value })),
      defaultState: { label: Size.SMALL, value: Size.SMALL },
    },
    { type: 'checkbox', label: 'Animate', state: 'animate', defaultState: true },
  ],
};

export default class ChevronDocs extends Component {
  state = { ...generateState(KNOBS) };

  render() {
    const { orientation, animate, flip, size } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Chevron</h2>
              <span role="img" aria-label="uhm">
                Simple chevron component to indicate direction of things
              </span>
              {generateCodeBlock('Chevron', KNOBS, this)}
            </div>
            <div className="col-md-6">
              <div className="col-xs-12">
                <Chevron
                  orientation={orientation && orientation.value}
                  size={size && size.value}
                  flip={flip}
                  animate={animate}
                />
                <div className="row">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
