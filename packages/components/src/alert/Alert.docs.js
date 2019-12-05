import React, { Component } from 'react';

import Alert from '.';
import Button from '../button';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const CONTENT_EXAMPLES = [
  {
    label: 'Single Message',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut facilis ipsam iusto nisi quae quis sunt voluptates. Cupiditate, veniam.',
  },
  {
    label: 'List of Message',
    value: (
      <>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </>
    ),
  },
];

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Content',
      state: 'content',
      options: CONTENT_EXAMPLES,
      defaultState: CONTENT_EXAMPLES[0],
    },
    {
      type: 'select',
      label: 'Type',
      state: 'type',
      options: Object.keys(Alert.Type).map(key => ({
        label: key,
        value: Alert.Type[key],
      })),
      defaultState: { value: Alert.Type.WARNING, label: Alert.Type.WARNING },
    },
    {
      type: 'select',
      label: 'Arrow',
      state: 'arrow',
      options: Object.keys(Alert.ArrowPosition).map(key => ({
        label: key,
        value: Alert.ArrowPosition[key],
      })),
      defaultState: { value: Alert.ArrowPosition.TOP_LEFT, label: Alert.ArrowPosition.TOP_LEFT },
    },
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: Object.keys(Alert.Size).map(key => ({ label: key, value: Alert.Size[key] })),
      defaultState: { value: Alert.Size.SMALL, label: Alert.Size.SMALL },
    },
    {
      type: 'checkbox',
      label: 'Dismissible?',
      state: 'dismissible',
      defaultState: false,
    },
  ],
};

export default class AlertDocs extends Component {
  state = {
    ...generateState(KNOBS),
    dismissed: false,
  };

  handleDismiss = () => {
    this.setState(({ dismissed }) => ({
      dismissed: !dismissed,
    }));
  };

  render() {
    const { type, arrow, size, dismissible, dismissed, content } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Alert</h2>
              <p>
                Provide contextual feedback messages for typical user actions with the handful of
                available and flexible alert messages.
              </p>
              <p>
                <code>Type</code>, <code>Size</code>, and <code>ArrowPosition</code> are exposed as
                properties of <code>Alert</code>.
              </p>

              {generateCodeBlock('Alert', KNOBS, this, [])}
              {dismissed && <Button onClick={this.handleDismiss}>Show Alert again</Button>}
            </div>
            <div className="col-md-6 m-t-2">
              {!dismissed && (
                <Alert
                  dismissible={dismissible}
                  onDismiss={this.handleDismiss}
                  size={size.value}
                  arrow={arrow.value}
                  type={type.value}
                >
                  {content.value}
                </Alert>
              )}
              <div className="row">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
