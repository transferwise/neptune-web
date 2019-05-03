import React, { Component, Fragment } from 'react';
import { Radio, Checkbox } from '..';

export default class RadioDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Selecteroni',
      checked: null,
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

  renderHeader = () => (
    <div className="col-md-12">
      <h2>Radio</h2>
      <p>I&apos;m radioing this in</p>
    </div>
  );

  renderCodeExample = () => (
    <div className="col-md-12">
      {/* eslint-disable react/jsx-indent */}
      <pre className="tw-docs-code">
        {`<Radio
label={"${this.state.label}"}
name={"${this.state.name}"}
checked={true / false}
disabled={${this.state.disabled}}
onChange={this.handleRadioChange}
/>`}
      </pre>
      {/* eslint-enable react/jsx-indent */}
    </div>
  );

  renderControls = () => (
    <div className="col-md-12">
      <label htmlFor="radio-label">Label</label>
      <input
        id="radio-label"
        type="text"
        value={this.state.label}
        onChange={this.createEventStateLink('label')}
        placeholder="Radio label"
        className="form-control"
      />
      <div className="m-t-3" />
      <label htmlFor="radio-name">Name</label>
      <input
        id="radio-name"
        type="text"
        value={this.state.name}
        onChange={this.createEventStateLink('name')}
        placeholder="Radio name"
        className="form-control"
      />
      <div className="m-t-3" />
      <label htmlFor="radio-disabled">Disabled</label>
      <Checkbox
        id="radio-disabled"
        label="Disabled?"
        onChange={this.createStateLink('disabled')}
        checked={this.state.disabled}
      />
    </div>
  );

  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="row">{this.renderHeader()}</div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">{this.renderCodeExample()}</div>
            </div>
            <div className="col-md-6">
              <div className="row">
                {[1, 2, 3].map(index => (
                  <Fragment key={index}>
                    <div className="col-md-12" style={{ marginBottom: '16px' }}>
                      <Radio
                        label={`${this.state.label} - ${index}`}
                        name={`${this.state.name} - ${index}`}
                        id={`${this.state.name} - ${index}`}
                        checked={this.state.checked === index}
                        disabled={this.state.disabled}
                        onChange={() => this.setState({ checked: index })}
                      />
                    </div>
                  </Fragment>
                ))}
              </div>
              <div className="row" style={{ marginTop: '32px' }}>
                {this.renderControls()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
