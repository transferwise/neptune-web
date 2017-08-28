import React, { Component } from 'react';
import { Stepper, Select } from '../src';

const presets = [
  {
    label: 'Simple',
    value: 'simple',
    steps: [
      { label: 'Amount' },
      { label: 'My details' },
      { label: 'Recipient' },
      { label: 'Done' },
    ],
  },
  {
    label: 'With actions',
    value: 'with-actions',
    steps: [
      {
        label: 'Clickable step 1',
        onClick() {
          alert('You clicked on step 1, which triggered this function, which alerted you.'); // eslint-disable-line
        },
      },
      {
        label: 'Clickable step 2',
        onClick() {
          alert('You clicked on step 2, which triggered this function, which alerted you.'); // eslint-disable-line
        },
      },
      { label: 'Recipient' },
      { label: 'Smellification' },
      { label: 'Done' },
    ],
  },
];

export default class StepperDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preset: presets[0],
      activeStep: 1,
    };
  }

  getStringifiedSteps() {
    return JSON.stringify(
      this.state.preset.steps.map(step =>
        Object.keys(step)
          .map(key => ({
            key,
            value: typeof step[key] === 'function' ? '[a function]' : step[key],
          }))
          .reduce((accumulator, current) => ({ ...accumulator, [current.key]: current.value }), {}),
      ),
      null,
      '  ',
    );
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
            <Stepper steps={this.state.preset.steps} activeStep={this.state.activeStep} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/* eslint-disable react/jsx-indent */}
            <pre className="tw-docs-code">
              {`<Stepper
  activeStep={${this.state.activeStep}}
  steps={${this.getStringifiedSteps()}}
/>`}
            </pre>
            {/* eslint-enable react/jsx-indent */}
          </div>
          <div className="col-md-6">
            <label htmlFor="stepper-step-select">Active step</label>
            <Select
              id="stepper-step-select"
              options={this.state.preset.steps.map((step, index) => ({
                label: `${index} - ${step.label}`,
                value: index,
              }))}
              onChange={value => value && this.setState({ activeStep: value.value })}
              selected={{
                label: `${this.state.activeStep} - ${this.state.preset.steps[this.state.activeStep]
                  .label}`,
                value: this.state.activeStep,
              }}
              required
            />

            <div className="m-t-3" />
            <label htmlFor="stepper-preset-select">Step preset</label>
            <Select
              id="stepper-preset-select"
              options={presets}
              onChange={preset => preset && this.setState({ preset, activeStep: 0 })}
              selected={this.state.preset}
              required
            />
          </div>
        </div>
      </section>
    );
  }
}
