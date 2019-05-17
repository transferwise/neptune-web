import React, { Component, Fragment } from 'react';

import Alert, { AlertType, AlertSize, AlertArrowPosition } from './Alert';
import { Checkbox, Select } from '..';

const CONTENT_EXAMPLES = [
  {
    type: 'Single Message',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut facilis ipsam iusto nisi quae quis sunt voluptates. Cupiditate, veniam.',
  },
  {
    type: 'List of Message',
    content: (
      <Fragment>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </Fragment>
    ),
  },
];

export default class AlertDocs extends Component {
  state = {
    type: AlertType.Warning,
    arrow: AlertArrowPosition.UpLeft,
    size: AlertSize.Small,
    dismissible: false,

    selectedContentType: CONTENT_EXAMPLES[0].type,
    content: CONTENT_EXAMPLES[0].content,
  };

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    const {
      type,

      arrow,
      size,
      dismissible,

      selectedContentType,
      content,
    } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6" id="alert">
              <h2>Alert</h2>
              <p>
                Provide contextual feedback messages for typical user actions with the handful of
                available and flexible alert messages.
              </p>
            </div>
            <div className="col-md-6">
              <Alert {...{ type, size, arrow, dismissible }}>{content}</Alert>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
                {`<Alert
    type={"${type}"}
    size={"${size}"}
    arrow={"${arrow}"}
    dismissible={"${dismissible}"}>
    ${content}
</Alert>`}
              </pre>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="form-control-selector" className="control-label">
                    Content
                  </label>
                  <Select
                    id="form-control-selector"
                    selected={{ label: selectedContentType, value: content }}
                    required
                    options={CONTENT_EXAMPLES.map(example => ({
                      label: example.type,
                      value: example.content,
                    }))}
                    onChange={selection =>
                      this.setState({
                        content: selection.value,
                        selectedContentType: selection.label,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="message-content-selector" className="control-label">
                    Type
                  </label>
                  <Select
                    id="alert-type"
                    selected={{ label: type, value: type }}
                    required
                    options={Object.values(AlertType).map(value => ({
                      label: value,
                      value,
                    }))}
                    onChange={selection =>
                      this.setState({
                        type: selection.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="m-t-3" />
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="button-block-checkbox" className="control-label">
                    Size
                  </label>
                  <Select
                    id="alert-size"
                    selected={{ label: size, value: size }}
                    required
                    options={Object.values(AlertSize).map(value => ({ label: value, value }))}
                    onChange={selection => this.setState({ size: selection.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="button-block-checkbox" className="control-label">
                    Dismissible?
                  </label>
                  <Checkbox
                    label="Dismissible"
                    checked={dismissible}
                    onChange={this.createStateLink('dismissible')}
                  />
                </div>
              </div>
              <div className="m-t-3" />
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="button-block-checkbox" className="control-label">
                    Arrow
                  </label>
                  <Select
                    id="alert-arrow-position"
                    selected={{ label: `${arrow}`, value: arrow }}
                    required
                    options={Object.values(AlertArrowPosition)
                      .concat(null)
                      .map(value => ({ label: `${value}`, value }))}
                    onChange={selection => this.setState({ arrow: selection.value })}
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
