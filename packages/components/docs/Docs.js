import React, { Component } from 'react';
import marked from 'marked'; // eslint-disable-line import/no-extraneous-dependencies
import { Radio, Checkbox, Loader, Stepper } from '../src';
import npmPackage from '../package.json';
import changelog from '../CHANGELOG.md';
import './Docs.css';

import SelectDocs from './SelectDocs';
import CheckboxDocs from './CheckboxDocs';

export default class Docs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepperSteps: ['Amount', 'My details', 'Recipient', 'Done'],
      activeStepperStep: 1,

      radioLabel: 'Selecteroni',
      radioChecked: false,
      radioDisabled: false,
      radioName: 'Radio name',

      loaderSmall: false,

      showChangelog: false,
    };
  }

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  createEventStateLink(name) {
    return event => this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <section className="section row">
          <div className="col-md-6">
            <h1>
              Components 🎉 <small>v{npmPackage.version}</small>
            </h1>
            <p>TransferWise styleguide components in react.</p>
            {/* eslint-disable react/jsx-indent */}
            <pre className="tw-docs-code">
              {'yarn add @transferwise/components'}
            </pre>
            {/* eslint-enable react/jsx-indent */}
            <p>
              <strong>TODO: </strong>
              We need to add missing components and missing props to some components.
            </p>
            <button
              className="btn btn-default"
              onClick={() =>
                this.setState(({ showChangelog }) => ({ showChangelog: !showChangelog }))}
            >
              {this.state.showChangelog ? 'Hide' : 'Show'} changelog
            </button>
          </div>
          {/* eslint-disable react/no-danger */}
          {this.state.showChangelog
            ? <div
              className="col-md-6 tw-docs-code"
              dangerouslySetInnerHTML={{ __html: marked(atob(changelog.substring(28))) }}
            />
            : ''}
          {/* eslint-enable react/no-danger */}
        </section>

        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Stepper</h2>
              <p>These boots are made for steppin&lsquo;</p>
            </div>
            <div className="col-md-6">
              <Stepper steps={this.state.stepperSteps} activeStep={this.state.activeStepperStep} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
                {`<Stepper
  steps={${JSON.stringify(this.state.stepperSteps)}}
  activeStep={${this.state.activeStepperStep}}
/>`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
            <div className="col-md-6" />
          </div>
        </section>

        <SelectDocs />

        <CheckboxDocs />

        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Radio</h2>
              <p>I&apos;m radioing this in</p>
            </div>
            <div className="col-md-6">
              <Radio
                label={this.state.radioLabel}
                name={this.state.radioName}
                checked={this.state.radioChecked}
                disabled={this.state.radioDisabled}
                onChange={this.createStateLink('radioChecked')}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
                {`<Radio
  label={"${this.state.radioLabel}"}
  name={"${this.state.radioName}"}
  checked={${this.state.radioChecked}}
  disabled={${this.state.radioDisabled}}
  onChange={this.handleRadioChange}
/>`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                value={this.state.radioLabel}
                onChange={this.createEventStateLink('radioLabel')}
                placeholder="Radio label"
                className="form-control"
              />
              <div className="m-t-3" />
              <input
                type="text"
                value={this.state.radioName}
                onChange={this.createEventStateLink('radioName')}
                placeholder="Radio name"
                className="form-control"
              />
              <div className="m-t-3" />
              <Checkbox
                label="Disabled?"
                onChange={this.createStateLink('radioDisabled')}
                checked={this.state.radioDisabled}
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Loader</h2>
              <p>Like a record baby</p>
            </div>
            <div className="col-md-6 p-b-2 text-xs-center">
              <Loader small={this.state.loaderSmall} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
                {`<Loader small={${this.state.loaderSmall}} />`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
            <div className="col-md-6">
              <Checkbox
                label="Small?"
                checked={this.state.loaderSmall}
                onChange={this.createStateLink('loaderSmall')}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
