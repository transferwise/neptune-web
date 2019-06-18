import React, { Component, Fragment } from 'react';

import Alert, { AlertType, AlertSize, AlertArrowPosition } from './Alert';
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
      <Fragment>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </Fragment>
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
      options: Object.values(AlertType).map(value => ({
        label: value,
        value,
      })),
      defaultState: { value: AlertType.Warning, label: AlertType.Warning },
    },
    {
      type: 'select',
      label: 'Arrow',
      state: 'arrow',
      options: Object.values(AlertArrowPosition).map(value => ({ label: `${value}`, value })),
      defaultState: { value: AlertArrowPosition.UpLeft, label: AlertArrowPosition.UpLeft },
    },
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: Object.values(AlertSize).map(value => ({ label: value, value })),
      defaultState: { value: AlertSize.Small, label: AlertSize.Small },
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
  };

  render() {
    const { type, arrow, size, dismissible, content } = this.state;

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

              {generateCodeBlock('Alert', KNOBS, this, [])}
            </div>

            <div className="col-md-6 m-t-2">
              <Alert
                dismissible={dismissible}
                size={size.value}
                arrow={arrow.value}
                type={type.value}
              >
                {content.value}
              </Alert>
              <div className="row">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
