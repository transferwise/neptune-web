import React, { Component } from 'react';
import { Stepper } from '../src';

export default class StepperDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: ['Amount', 'My details', 'Recipient', 'Done'],
      activeStep: 1,
    };
  }

  render() {
    return (
      <section className="section">
        <div className="row">
          <div className="col-md-6">
            <h2>Stepper</h2>
            <p>These boots are made for steppin&lsquo;</p>
          </div>
          <div className="col-md-6">
            <Stepper steps={this.state.steps} activeStep={this.state.activeStep} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/* eslint-disable react/jsx-indent */}
            <pre className="tw-docs-code">
              {`<Stepper
  steps={${JSON.stringify(this.state.steps)}}
  activeStep={${this.state.activeStep}}
/>`}
            </pre>
            {/* eslint-enable react/jsx-indent */}
          </div>
          <div className="col-md-6" />
        </div>
      </section>
    );
  }
}
