import React, { Component } from 'react';
import { ProcessIndicator } from '..';
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
      label: 'Status',
      state: 'status',
      options: Object.values(ProcessIndicator.Status).map(value => ({
        value,
        label: value,
      })),
      defaultState: {
        value: ProcessIndicator.Status.Processing,
        label: ProcessIndicator.Status.Processing,
      },
    },
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: Object.values(ProcessIndicator.Size).map(value => ({
        value,
        label: value,
      })),
      defaultState: {
        value: ProcessIndicator.Size.ExtraLarge,
        label: ProcessIndicator.Size.ExtraLarge,
      },
    },
  ],
};

const extraProps = { onAnimationCompleted: 'console.log()' };

export default class ProcessIndicatorDocs extends Component {
  state = {
    ...generateState(KNOBS),
  };

  render() {
    const { status, size } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Process Indicator</h2>
              <p>
                A component for conveying that a process is occuring, and for communicating a
                successful or unsuccessful result
              </p>
              {generateCodeBlock('ProcessIndicator', KNOBS, this, extraProps)}
            </div>
            <div className="col-md-6">
              <ProcessIndicator
                status={status.value}
                size={size.value}
                // eslint-disable-next-line
                onAnimationCompleted={processStatus => console.log(processStatus)}
              />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
