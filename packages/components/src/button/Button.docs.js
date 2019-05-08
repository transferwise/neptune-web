import React, { Component } from 'react';
import { Button, Select, Checkbox } from '..';
import { ButtonSize, ButtonState, ButtonType } from './Button';

export default class ButtonDocs extends Component {
  state = {
    label: 'Send money',
    stateSelection: { value: ButtonState.Default, label: ButtonState.Default },
    type: ButtonType.Pay,
    size: ButtonSize.Medium,
    block: false,
    // eslint-disable-next-line
    onClick: () => alert('Clicked button'),
  };

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    const { label, stateSelection, size, type, block, onClick } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Button</h2>
              <p>Simple wrapper component for all button types and their states</p>
            </div>
            <div className="col-md-6">
              <Button
                label={label}
                size={size}
                buttonState={stateSelection.value}
                type={type}
                block={block}
                onClick={onClick}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <pre className="tw-docs-code">
                {`<Button
  label={"${label}"}
  size={"${size}"}
  type={"${type}"}
  state={"${stateSelection.value}"}
  block={${block}}
  onClick={this.handleClick}
/>`}
              </pre>
            </div>
            <div className="col-md-6">
              <label htmlFor="button-label-input" className="control-label">
                Label
              </label>
              <input
                id="button-label-input"
                type="text"
                value={label}
                onChange={event => this.setState({ label: event.target.value })}
                placeholder="Add button label.."
                className="form-control"
              />
              <div className="m-t-3" />
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="button-state-selector" className="control-label">
                    State
                  </label>
                  <Select
                    id="button-state-selector"
                    required
                    selected={stateSelection}
                    options={Object.values(ButtonState).map(state => ({
                      value: state,
                      label: state,
                    }))}
                    onChange={selection => this.setState({ stateSelection: selection })}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="button-block-checkbox" className="control-label">
                    Block (Full size of container)
                  </label>
                  <Checkbox
                    label="block"
                    checked={block}
                    onChange={this.createStateLink('block')}
                  />
                </div>
              </div>
              <div className="m-t-3" />
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="button-size-selector" className="control-label">
                    Size
                  </label>
                  <Select
                    id="button-size-selector"
                    required
                    selected={{ value: size, label: size }}
                    options={Object.values(ButtonSize).map(sizeValue => ({
                      value: sizeValue,
                      label: sizeValue,
                    }))}
                    onChange={selection => this.setState({ size: selection.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="button-type-selector" className="control-label">
                    Type
                  </label>
                  <Select
                    id="button-type-selector"
                    required
                    selected={{ value: type, label: type }}
                    options={Object.values(ButtonType).map(typeKey => ({
                      value: typeKey,
                      label: typeKey,
                    }))}
                    onChange={selection => this.setState({ type: selection.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
