import React, { Component } from 'react';
import { Stepper, Select } from '../src';

export default class StepperDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        { label: 'Amount' },
        { label: 'My details' },
        { label: 'Recipient' },
        { label: 'Done' },
      ],
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
  activeStep={${this.state.activeStep}}
  steps={${JSON.stringify(this.state.steps, null, '  ')}}
/>`}
            </pre>
            {/* eslint-enable react/jsx-indent */}
          </div>
          <div className="col-md-6">
            <label htmlFor="stepper-step-select">Active step</label>
            <Select
              id="stepper-step-select"
              options={this.state.steps.map((_, index) => ({ label: index, value: index }))}
              onChange={value => value && this.setState({ activeStep: value.value })}
              selected={{ label: this.state.activeStep, value: this.state.activeStep }}
              required
            />
          </div>
        </div>
      </section>
    );
  }
}
