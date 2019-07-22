import React, { Component } from 'react';

import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

import Chip from './Chip';

const KNOBS = {
  knobs: [
    {
      type: 'text',
      label: 'Label',
      state: 'label',
      defaultState: 'A chip',
    },
    {
      type: 'checkbox',
      label: 'has error',
      state: 'hasError',
      defaultState: false,
    },
  ],
};

class ChipDocs extends Component {
  state = {
    ...generateState(KNOBS),
  };

  render() {
    const { label, hasError } = this.state;
    const extraProps = {
      onRemove: () => {},
    };
    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Chip</h2>
              <p>Chip with remove button</p>
              {generateCodeBlock('Chip', KNOBS, this, extraProps)}
            </div>
            <div className="col-md-6 m-t-2">
              <Chip label={label} hasError={hasError} {...extraProps} />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ChipDocs;
