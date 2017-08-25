import React, { Component } from 'react';
import { Loader, Checkbox } from '../src';

export default class LoaderDocs extends Component {
  constructor(props) {
    super(props);
    this.state = { small: false };
  }

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }
  render() {
    return (
      <section className="section">
        <div className="row">
          <div className="col-md-6">
            <h2>Loader</h2>
            <p>Like a record baby</p>
          </div>
          <div className="col-md-6 p-b-2 text-xs-center">
            <Loader small={this.state.small} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/* eslint-disable react/jsx-indent */}
            <pre className="tw-docs-code">
              {`<Loader small={${this.state.small}} />`}
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
        </div>
      </section>
    );
  }
}
