import React, { Component } from 'react';
import { Stepper, Select } from '../src';

export default class StepperDocs extends Component {
  constructor(props) {
    super(props);
    const presets = this.getPresets();
    this.state = {
      presetList: presets,
      preset: presets[0],
      activeStep: 0,
      highestVisitedStep: 0,
    };
  }

  getBackAndForthSteps(highestVisitedStep) {
    return [
      { index: 0, label: 'Clickable step 1' },
      { index: 1, label: 'Clickable step 2' },
      { index: 2, label: 'Clickable step 3' },
      { index: 3, label: 'Clickable step 4' },
    ].map(step => ({
      ...step,
      onClick: step.index <= highestVisitedStep ? this.goToBackAndForthStep.bind(this, step) : null, // eslint-disable-line
    }));
  }

  getPresets() {
    return [{
      label: 'Labels',
      value: 'labels',
      steps: [
        { label: 'Amount', hoverLabel: '<strong>100 GBP</strong> <br> 0.2351 ETH', hoverHTML: true },
        {
          label: 'My details',
          hoverLabel: '<strong>Diana Jaramillo</strong> <br> dianajarm123@gmail.com',
          hoverHTML: true,
        },
        { label: 'Recipient', hoverLabel: 'Some person/dog' },
        { label: 'Done', hoverLabel: 'Cool' },
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
    {
      label: 'Back and Forth between visited steps',
      value: 'back-and-forth',
      steps: this.getBackAndForthSteps(),
    }];
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

  goToBackAndForthStep(step) {
    const index = step.index === undefined ? step.value : step.index;
    const highestVisitedStep = Math.max(index, this.state.highestVisitedStep);

    const preset = this.state.preset;
    preset.steps = this.getBackAndForthSteps(highestVisitedStep);

    this.setState(() => ({ preset, highestVisitedStep, activeStep: index }));
  }

  goToStep(step) {
    if (this.state.preset.value === 'back-and-forth') {
      this.goToBackAndForthStep(step);
    } else {
      this.setState(() => ({ activeStep: step.value }));
    }
  }

  render() {
    return (
      <section className="section">
        <div className="row">
          <div className="col-md-6">
            <h2>Stepper</h2>
            <p>These boots are made for steppin&lsquo;</p>
          </div>
          <div className="col-md-6 p-x-3">
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
              onChange={value => this.goToStep(value)}
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
              options={this.state.presetList}
              onChange={preset =>
                  preset && this.setState({ preset, activeStep: 0, highestVisitedStep: 0 })}
              selected={this.state.preset}
              required
            />
          </div>
        </div>
      </section>
    );
  }
}
