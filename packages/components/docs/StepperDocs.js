import React, { Component } from 'react';
import { Stepper, Select } from '../src';

const presets = [
  {
    label: 'Simple',
    value: 'simple',
    steps: [
      { label: 'Amount', hoverLabel: '<strong>100 GBP</strong> <br> 0.2351 ETH', hoverHTML: true },
      { label: 'My details', hoverLabel: 'Uku Tammet <br> ukutammet@gmail.com', hoverHTML: true },
      { label: 'Recipient' },
      { label: 'Done', hoverLabel: 'Amazing' },
    ],
  },
  {
    label: 'With actions',
    value: 'with-actions',
    steps: [
      {
        label: 'Clickable step 1',
        hoverLabel: '<strong>100 GBP</strong> <br> 0.2351 ETH',
        hoverHTML: true,
        onClick() {
          alert('You clicked on step 1, which triggered this function, which alerted you.'); // eslint-disable-line
        },
      },
      {
        label: 'Clickable step 2',
        hoverLabel: '<strong>100 GBP</strong> <br> 0.2351 ETH',
        hoverHTML: true,
        onClick() {
          alert('You clicked on step 2, which triggered this function, which alerted you.'); // eslint-disable-line
        },
      },
      {
        label: 'Recipient',
        hoverLabel: '<strong>100 GBP</strong> <br> 0.2351 ETH',
        hoverHTML: true,
      },
      {
        label: 'Smellification',
        hoverLabel: '<strong>100 GBP</strong> <br> 0.2351 ETH',
        hoverHTML: true,
      },
      { label: 'Done', hoverLabel: '<strong>100 GBP</strong> <br> 0.2351 ETH', hoverHTML: true },
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
          <div className="col-md-12 p-x-3">
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
