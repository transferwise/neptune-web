import React, { Component } from 'react';
import { Loader, Checkbox } from '../src';

export default class LoaderDocs extends Component {
  constructor(props) {
    super(props);
    this.state = { small: false, hasClassNames: false };
  }

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    let docsCode = `<Loader
  small={${this.state.small}}
/>`;

    if (this.state.hasClassNames) {
      docsCode = docsCode.replace('/>', `  classNames={{
    loader: 'loader_33HEu6aS3s',
    loader-spinner: 'loader-spinner_z0k4VBxn-L',
  }}
/>`);
    }

    return (
      <section className="section">
        <div className="row">
          <div className="col-md-6">
            <h2>Loader</h2>
            <p>Like a record baby</p>
          </div>
          <div className="col-md-6 p-b-2 text-xs-center">
            <Loader
              small={this.state.small}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/* eslint-disable react/jsx-indent */}
            <pre className="tw-docs-code">
              {docsCode}
            </pre>
            {/* eslint-enable react/jsx-indent */}
          </div>
          <div className="col-md-6">
            <Checkbox
              label="Small?"
              checked={this.state.small}
              onChange={this.createStateLink('small')}
            />
          </div>
          <div className="col-md-6">
            <Checkbox
              label="Scoped className?"
              checked={this.state.hasClassNames}
              onChange={this.createStateLink('hasClassNames')}
            />
          </div>
          <div className="col-md-6" />
        </div>
      </section>
    );
  }
}
