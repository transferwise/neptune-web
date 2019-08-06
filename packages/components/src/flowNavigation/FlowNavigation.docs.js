import React, { Component } from 'react';
import { Select, FlowNavigation, Checkbox } from '..';
import { Theme } from '../common';

export default class FlowNavigationDocs extends Component {
  constructor(props) {
    super(props);
    const presets = this.getPresets();
    this.state = {
      presets,
      selectedPreset: presets[0],
      activeStep: 0,
      highestVisitedStep: 0,
      canGoBack: true,
      profileType: { value: 'PERSONAL', label: 'Personal' },
      avatarUrl: 'https://github.com/transferwise.png',
      done: false,
      onClose: true,
      theme: { value: Theme.LIGHT, label: Theme.LIGHT },
    };
  }

  getBackAndForthSteps(highestVisitedStep) {
    return [
      { index: 0, label: 'One' },
      { index: 1, label: 'Two' },
      { index: 2, label: 'Three' },
      { index: 3, label: 'Four' },
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
          { label: 'Something', hoverLabel: 'Cool' },
        ],
      },
      {
        label: 'With actions',
        value: 'with-actions',
        steps: [
          {
            label: 'One',
            onClick() {
              alert('You clicked on step 1, which triggered this function, which alerted you.'); // eslint-disable-line
            },
          },
          {
            label: 'Two',
            onClick() {
              alert('You clicked on step 2, which triggered this function, which alerted you.'); // eslint-disable-line
            },
          },
          { label: 'Recipient' },
          { label: 'Smellification' },
          { label: 'Battle' },
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

    const { selectedPreset } = this.state;
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
        <div className={this.state.theme.value === Theme.DARK ? 'bg-primary' : null}>
          <FlowNavigation
            steps={this.state.selectedPreset.steps}
            activeStep={this.state.activeStep}
            // eslint-disable-next-line no-alert
            onClose={this.state.onClose ? () => alert('Close clicked') : null}
            avatarUrl={this.state.avatarUrl}
            done={this.state.done}
            profileType={this.state.profileType ? this.state.profileType.value : null}
            onGoBack={this.canGoBack() ? () => this.goBack() : null}
            showCloseButton={this.state.showCloseButton}
            theme={this.state.theme ? this.state.theme.value : null}
          />
        </div>
        <div className="container m-t-4">
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
                {`<FlowNavigation
  onClose={${this.state.onClose ? '[a function]' : null}}
  onGoBack={${this.state.canGoBack ? '[a function]' : null}}
  profileType={${this.state.profileType ? `"${this.state.profileType.value}"` : null}}
  avatarUrl={"${this.state.avatarUrl}"}
  activeStep={${this.state.activeStep}}
  steps={${this.getStringifiedSteps()}}
  done={${this.state.done}}
  theme={${this.state.theme ? `"${this.state.theme.value}"` : null}}
/>`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
              <p>
                You have to control mobile back button behaviour yourself, by passing in{' '}
                <code className="tw-docs-inline-code">onGoBack</code> when it is possible to back.
              </p>

              <p>
                You can put the component in done state, keeping only the logo and cross, by passing
                in <code className="tw-docs-inline-code">done=true</code>.
              </p>
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
                  label: `${this.state.activeStep} - ${this.state.selectedPreset.steps[this.state.activeStep].label}`,
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
                label="Can you go back on mobile?"
                onChange={this.createStateLink('canGoBack')}
                checked={this.state.canGoBack}
              />

              <div className="m-t-3" />
              <Checkbox
                label="Done?"
                onChange={this.createStateLink('done')}
                checked={this.state.done}
              />
              <Checkbox
                label="Is onClose defined?"
                onChange={this.createStateLink('onClose')}
                checked={this.state.onClose}
              />
              <div className="m-t-3" />
              <label htmlFor="flow-navigation-theme">Theme</label>
              <Select
                id="flow-navigation-theme"
                options={Object.values(Theme).map(label => ({
                  label,
                  value: label,
                }))}
                onChange={theme => this.setState({ theme })}
                selected={this.state.theme}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
