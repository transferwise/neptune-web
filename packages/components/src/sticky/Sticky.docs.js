/* eslint-disable no-alert */
import React, { Component } from 'react';
import '@transferwise/neptune-css/dist/css/flex.css';
import classNames from 'classnames';

import Sticky from './Sticky';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';
import { Button } from '../index';

const OPENDIRECTION = [{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }];

const KNOBS = {
  knobs: [
    { type: 'checkbox', label: 'Open', state: 'open', defaultState: false },
    {
      type: 'select',
      label: 'Position',
      state: 'position',
      options: OPENDIRECTION,
      defaultState: { ...OPENDIRECTION[3] },
    },
  ],
};

export default class StickyDocs extends Component {
  state = { ...generateState(KNOBS) };
  // Forces remount of component. This forces CSSTransition to re-render with new classes.
  // If show border gets applied while Slide is open in order for border class to get applied
  // CSSTransition needs to get re-rendered. This won't represent an issue in real applications as
  // border or position fixed will always be applied when slide is open and they are not going to change.
  key = 0;
  render() {
    this.key += 1;
    const { open, position, stickyPositionFixed } = this.state;
    const styleContent = {
      width: position.value === 'left' || position.value === 'right' ? 350 : '100%',
      height: position.value === 'top' || position.value === 'bottom' ? 'auto' : '100%',
    };

    return (
      <div className="container">
        <section className="section" id="sticky">
          <div className="row">
            <div className="col-md-6">
              <h2>Sticky</h2>
              <span role="img" aria-label="uhm">
                Simple sticky. The width or the height of the slide are dictate by its content width
                and height.
              </span>
              {generateCodeBlock('Sticky', KNOBS, this)}
            </div>
            <div className="col-md-6">
              <Sticky
                open={open}
                position={position.value}
                fullParentWidth
                stickyPositionFixed={stickyPositionFixed}
                key={this.key}
              >
                <div
                  className={classNames(
                    'd-flex',
                    'justify-content-around',
                    'align-items-start',
                    'flex-wrap',
                  )}
                  style={{ padding: '20px', ...styleContent }}
                >
                  <Button label="Give Access" onClick={() => alert('clicked')} block />
                  <a href="/" onClick={() => alert('clicked')} className="m-t-3">
                    Switch account
                  </a>
                </div>
              </Sticky>

              <div className="row">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
