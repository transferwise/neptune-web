import React, { Component } from 'react';
import { Tooltip, Select, Checkbox } from '../src';

export default class TooltipDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Wow',
      customPosition: false,
      position: Tooltip.Position.TOP,
      customOffset: false,
      offset: 0,
    };
  }

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    return (
      <section className="section">
        <div className="row">
          <div className="col-md-6">
            <h2>Tooltip</h2>
            <p>And a tip of the tool for you</p>
          </div>
          <div className="col-md-6">
            <Tooltip
              label={this.state.label}
              position={this.state.position}
              offset={this.state.offset}
            >
              <button className="btn btn-default">Hover me</button>
            </Tooltip>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/* eslint-disable react/jsx-indent */}
            <pre className="tw-docs-code">
              {`<Tooltip
  label={"${this.state.label}"}
  position={${this.state.customPosition && this.state.position
    ? `Tooltip.Position.${this.state.position.toUpperCase()}`
    : undefined}}
  offset={${this.state.customOffset ? this.state.offset : undefined}}
>
  <button className="btn btn-default">
    Hover me
  </button>
</Tooltip>`}
            </pre>
            {/* eslint-enable react/jsx-indent */}
            <p>Every property that is undefined can be omitted.</p>
          </div>
          <div className="col-md-6">
            <label htmlFor="tooltip-label-input" className="control-label">
              Label value (can be a react element instead)
            </label>
            <input
              id="tooltip-label-input"
              type="text"
              value={this.state.label}
              onChange={event => this.setState({ label: event.target.value })}
              className="form-control"
            />
            <div className="m-t-3" />
            <Checkbox
              label="Custom position?"
              onChange={this.createStateLink('customPosition')}
              checked={this.state.customPosition}
            />
            {this.state.customPosition ? (
              <div className="m-t-3">
                <Select
                  selected={
                    this.state.position
                      ? { value: this.state.position, label: this.state.position }
                      : undefined
                  }
                  options={Object.keys(Tooltip.Position).map(position => ({
                    value: Tooltip.Position[position],
                    label: Tooltip.Position[position],
                  }))}
                  onChange={position =>
                    this.setState({ position: position ? position.value : undefined })}
                />
              </div>
            ) : (
              ''
            )}
            <div className="m-t-3" />
            <Checkbox
              label="Custom offset?"
              onChange={this.createStateLink('customOffset')}
              checked={this.state.customOffset}
            />
            {this.state.customOffset ? (
              <input
                type="number"
                value={this.state.offset}
                onChange={event => this.setState({ offset: parseInt(event.target.value, 0) })}
                className="form-control m-t-3"
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    );
  }
}
