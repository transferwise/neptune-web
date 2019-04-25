import React, { Component } from 'react';
import { Checkbox } from '..';

export default class CheckboxDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false,
      required: false,
      label: 'Check me out',
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
              <h2>Checkbox</h2>
              <p>Check yourself before you wreck yourself</p>
            </div>
            <div className="col-md-6">
              <Checkbox
                label={this.state.label}
                onChange={this.createStateLink('checked')}
                checked={this.state.checked}
                required={this.state.required}
                disabled={this.state.disabled}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
                {`<Checkbox
  label={"${this.state.label}"}
  onChange={this.handleCheckChange}
  required={${this.state.required}}
  disabled={${this.state.disabled}}
  checked={${this.state.checked}}
/>`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                value={this.state.label}
                onChange={this.createEventStateLink('label')}
                placeholder="Checkbox label"
                className="form-control"
              />
              <div className="m-t-3" />
              <Checkbox
                label="Required?"
                onChange={this.createStateLink('required')}
                checked={this.state.required}
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
