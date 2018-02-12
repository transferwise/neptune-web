import React, { Component } from 'react';
import { Select, FlowNavigation, Checkbox } from '../src';

export default class FlowNavigationDocs extends Component {
  constructor(props) {
    super(props);
    const presets = this.getPresets();
    this.state = {
      presets,
      selectedPreset: presets[0],
      activeStep: 0,
      highestVisitedStep: 0,
      closable: true,
      canGoBack: true,
      profileType: { value: 'PERSONAL', label: 'Personal' },
      avatarUrl: 'https://github.com/transferwise.png',
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
    return [
      {
        label: 'Labels',
        value: 'labels',
        steps: [
          {
            label: 'Amount',
            hoverLabel: '<strong>100 GBP</strong> <br> 0.2351 ETH',
            hoverHTML: true,
          },
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
      },
    ];
  }

  getStringifiedSteps() {
    return JSON.stringify(
      this.state.selectedPreset.steps.map(step =>
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

  createStateLink(key) {
    return value => this.setState({ [key]: value });
  }

  goToBackAndForthStep(step) {
    const index = step.index === undefined ? step.value : step.index;
    const highestVisitedStep = Math.max(index, this.state.highestVisitedStep);

    const selectedPreset = this.state.selectedPreset;
    selectedPreset.steps = this.getBackAndForthSteps(highestVisitedStep);

    this.setState(() => ({ selectedPreset, highestVisitedStep, activeStep: index }));
  }

  goToStep(step) {
    if (this.state.selectedPreset.value === 'back-and-forth') {
      this.goToBackAndForthStep(step);
    } else {
      this.setState(() => ({ activeStep: step.value }));
    }
  }

  canGoBack() {
    return this.state.canGoBack && !!this.state.activeStep;
  }

  goBack() {
    this.setState(oldState => ({ ...oldState, activeStep: Math.max(oldState.activeStep - 1, 0) }));
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>Flow Navigation</h2>
              <p>Go with the flow</p>
            </div>
          </div>
        </div>
        <FlowNavigation
          steps={this.state.selectedPreset.steps}
          activeStep={this.state.activeStep}
          // eslint-disable-next-line no-alert
          onClose={this.state.closable ? () => alert('Close clicked') : undefined}
          avatarUrl={this.state.avatarUrl}
          profileType={this.state.profileType ? this.state.profileType.value : undefined}
          onGoBack={this.canGoBack() ? () => this.goBack() : undefined}
        />
        <div className="container m-t-4">
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
                {`<FlowNavigation
  onClose={${this.state.closable ? '[a function]' : undefined}}
  onGoBack={${this.state.canGoBack ? '[a function]' : undefined}}
  profileType={${this.state.profileType ? `"${this.state.profileType.value}"` : undefined}}
  avatarUrl={"${this.state.avatarUrl}"}
  activeStep={${this.state.activeStep}}
  steps={${this.getStringifiedSteps()}}
/>`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
            <div className="col-md-6">
              <label htmlFor="flow-navigation-step-select">Active step</label>
              <Select
                id="flow-navigation-step-select"
                options={this.state.selectedPreset.steps.map((step, index) => ({
                  label: `${index} - ${step.label}`,
                  value: index,
                }))}
                onChange={value => this.goToStep(value)}
                selected={{
                  label: `${this.state.activeStep} - ${
                    this.state.selectedPreset.steps[this.state.activeStep].label
                  }`,
                  value: this.state.activeStep,
                }}
                required
              />

              <div className="m-t-3" />
              <label htmlFor="flow-navigation-preset-select">Step preset</label>
              <Select
                id="flow-navigation-preset-select"
                options={this.state.presets}
                onChange={selectedPreset =>
                  selectedPreset &&
                  this.setState({ selectedPreset, activeStep: 0, highestVisitedStep: 0 })
                }
                selected={this.state.selectedPreset}
                required
              />

              <div className="m-t-3" />
              <label htmlFor="flow-navigation-profile-type">
                Active profile type (used for avatar fallback)
              </label>
              <Select
                id="flow-navigation-profile-type"
                options={['Personal', 'Business'].map(label => ({
                  label,
                  value: label.toUpperCase(),
                }))}
                onChange={profileType => this.setState({ profileType })}
                selected={this.state.profileType}
              />

              <div className="m-t-3" />
              <label htmlFor="flow-navigation-avatar-url">Avatar url</label>
              <input
                id="flow-navigation-avatar-url"
                type="text"
                value={this.state.avatarUrl}
                onChange={event => this.setState({ avatarUrl: event.target.value })}
                placeholder="http://"
                className="form-control"
              />

              <div className="m-t-3" />
              <Checkbox
                label="Closable?"
                onChange={this.createStateLink('closable')}
                checked={this.state.closable}
              />

              <div className="m-t-3" />
              <Checkbox
                label="Can you go back on mobile?"
                onChange={this.createStateLink('canGoBack')}
                checked={this.state.canGoBack}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
