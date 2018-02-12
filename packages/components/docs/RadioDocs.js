import React, { Component } from 'react';
import { Radio, Checkbox } from '../src';

export default class RadioDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Selecteroni',
      checked: false,
      disabled: false,
      name: 'Radio name',
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
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Radio</h2>
              <p>I&apos;m radioing this in</p>
            </div>
            <div className="col-md-6">
              <Radio
                label={this.state.label}
                name={this.state.name}
                checked={this.state.checked}
                disabled={this.state.disabled}
                onChange={this.createStateLink('checked')}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
                {`<Radio
  label={"${this.state.label}"}
  name={"${this.state.name}"}
  checked={${this.state.checked}}
  disabled={${this.state.disabled}}
  onChange={this.handleRadioChange}
/>`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                value={this.state.label}
                onChange={this.createEventStateLink('label')}
                placeholder="Radio label"
                className="form-control"
              />
              <div className="m-t-3" />
              <input
                type="text"
                value={this.state.name}
                onChange={this.createEventStateLink('name')}
                placeholder="Radio name"
                className="form-control"
              />
              <div className="m-t-3" />
              <Checkbox
                label="Disabled?"
                onChange={this.createStateLink('disabled')}
                checked={this.state.disabled}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
