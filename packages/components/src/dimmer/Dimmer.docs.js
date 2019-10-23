import React, { Component } from 'react';
import '@transferwise/neptune-css/dist/css/flex.css';
import classNames from 'classnames';

import Dimmer from './';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';
import { Button } from '../index';

const KNOBS = {
  knobs: [
    { type: 'checkbox', label: 'Open', state: 'open', defaultState: false },
    {
      type: 'checkbox',
      label: 'Fade content on exit?',
      state: 'fadeContentOnExit',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Fade content on enter?',
      state: 'fadeContentOnEnter',
      defaultState: false,
    },
  ],
};

export default class DimmerDocs extends Component {
  state = { ...generateState(KNOBS) };
  render() {
    const { open, fadeContentOnExit, fadeContentOnEnter } = this.state;
    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Dimmer</h2>
              <span role="img" aria-label="uhm">
                What do you want to eat for Dimmer?
              </span>
              <p>Dimmer is a simple background fade used as background for Modals and Slider.</p>
              {generateCodeBlock('Dimmer', KNOBS, this)}
            </div>
            <div className="col-md-6">
              <div className="col-xs-12">
                <Dimmer
                  open={open}
                  onClose={() => this.setState({ onCloseValue: 'I closed my self', open: false })}
                  fadeContentOnExit={fadeContentOnExit}
                  fadeContentOnEnter={fadeContentOnEnter}
                >
                  <div
                    className={classNames('d-flex', 'justify-content-center', 'align-items-center')}
                    style={{ height: '100%' }}
                  >
                    <Button onClick={() => this.setState({ open: false })}>Close</Button>
                  </div>
                </Dimmer>
                <div className="row">
                  <pre>{!this.state.open && this.state.onCloseValue}</pre>
                  {KNOBS.knobs.map(knob => generateInput(knob, this))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
