import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

import { Popover, Checkbox, Select } from '..';

const defaultTitle = 'I’m a string';

export default class PopoverDocs extends Component {
  state = {
    title: defaultTitle,
    content: 'We could be React elements too.',
    preferredPlacementKey: undefined,
    rightTrigger: false,
  };

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    const { title, content, preferredPlacementKey, rightTrigger } = this.state;

    const preferredPlacementKeys = Object.keys(Popover.Placement);
    const Code = () => (
      <Fragment>
        {/* eslint-disable react/jsx-indent */}
        <pre className="tw-docs-code">
          {`<Popover${
            title
              ? `
  title="${title}"`
              : ''
          }
  content="${content}"${
            preferredPlacementKey
              ? `
  preferredPlacement={Popover.Placement.${preferredPlacementKey}}`
              : ''
          }
>
  <button className="btn btn-default">
    Click me
  </button>
</Popover>`}
        </pre>
        {/* eslint-enable react/jsx-indent */}
      </Fragment>
    );

    const contentControl = (
      <Fragment>
        <label htmlFor="popover-content-input" className="control-label">
          Content
        </label>
        <input
          id="popover-content-input"
          type="text"
          value={content}
          onChange={event => this.setState({ content: event.target.value })}
          className="form-control"
        />
      </Fragment>
    );

    const titleControls = (
      <div className="row m-t-2">
        <div className="col-md-6">
          <Checkbox
            label="Title"
            onChange={() => {
              if (title) {
                this.setState({ title: undefined });
              } else {
                this.setState({ title: defaultTitle });
              }
            }}
            checked={!!title}
          />
        </div>
        {title && (
          <div className="col-md-6">
            <input
              id="popover-title-input"
              type="text"
              value={title}
              onChange={event => this.setState({ title: event.target.value })}
              className="form-control"
            />
          </div>
        )}
      </div>
    );

    const preferredPlacementControl = (
      <div className="row m-t-2">
        <div className="col-md-6">
          <Checkbox
            label="Preferred placement"
            onChange={() => {
              if (preferredPlacementKey) {
                this.setState({ preferredPlacementKey: undefined });
              } else {
                this.setState({ preferredPlacementKey: preferredPlacementKeys[0] });
              }
            }}
            checked={!!preferredPlacementKey}
          />
        </div>

        {preferredPlacementKey && (
          <div className="col-md-6">
            <Select
              selected={
                preferredPlacementKey
                  ? {
                      value: preferredPlacementKey,
                      label: preferredPlacementKey,
                    }
                  : null
              }
              options={preferredPlacementKeys.map(key => ({
                value: key,
                label: key,
              }))}
              onChange={placement =>
                this.setState({
                  preferredPlacementKey: placement ? placement.value : undefined,
                })
              }
            />
          </div>
        )}
      </div>
    );

    const triggerAlignmentControl = (
      <div className="m-t-2">
        <Checkbox
          label="Move trigger right (to test re-placement)"
          onChange={this.createStateLink('rightTrigger')}
          checked={rightTrigger}
        />
      </div>
    );

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Popover</h2>
              <p>What&apos;s poppin&apos;?</p>
            </div>
            <div className={classNames('col-md-6', { 'text-xs-right': rightTrigger })}>
              <Popover
                title={title}
                content={content}
                preferredPlacement={Popover.Placement[preferredPlacementKey]}
              >
                <button className="btn btn-default">Click me</button>
              </Popover>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Code />
            </div>
            <div className="col-md-6">
              {contentControl}
              {titleControls}
              {preferredPlacementControl}
              {triggerAlignmentControl}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
