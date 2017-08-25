import React, { Component } from 'react';
import marked from 'marked'; // eslint-disable-line import/no-extraneous-dependencies
import npmPackage from '../package.json';
import changelog from '../CHANGELOG.md';
import './Docs.css';

import StepperDocs from './StepperDocs';
import SelectDocs from './SelectDocs';
import CheckboxDocs from './CheckboxDocs';
import RadioDocs from './RadioDocs';
import LoaderDocs from './LoaderDocs';

export default class Docs extends Component {
  constructor(props) {
    super(props);
    this.state = { showChangelog: false };
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

        <StepperDocs />
        <SelectDocs />
        <CheckboxDocs />
        <RadioDocs />
        <LoaderDocs />
      </div>
    );
  }
}
