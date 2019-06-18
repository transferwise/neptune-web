import React, { Component } from 'react';
import classNames from 'classnames';

import { Popover } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

import { PlacementValues } from './Placement';

const KNOBS = {
  knobs: [
    {
      type: 'text',
      label: 'Content',
      state: 'content',
      defaultState: 'We could be React elements too.',
    },
    {
      type: 'text',
      label: 'Title',
      state: 'title',
      defaultState: `I'm the title`,
    },
    {
      type: 'select',
      label: 'Preferred placement',
      state: 'preferredPlacementKey',
      options: PlacementValues.map(key => ({
        value: key,
        label: key,
      })),
      defaultState: { value: PlacementValues[0], label: PlacementValues[0] },
    },
  ],
};

const DOCSKNOBS = {
  knobs: [
    {
      type: 'checkbox',
      label: 'Move trigger right (to test re-placement)',
      state: 'rightTrigger',
      defaultState: false,
    },
  ],
};

export default class PopoverDocs extends Component {
  state = {
    ...generateState(KNOBS),
    ...generateState(DOCSKNOBS),
  };

  render() {
    const { title, content, preferredPlacementKey, rightTrigger } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Popover</h2>
              <p>What&apos;s poppin&apos;?</p>
              {generateCodeBlock('Popover', KNOBS, this, {})}
            </div>
            <div className="col-md-6">
              <div className={classNames({ 'text-xs-right': rightTrigger })}>
                <Popover
                  title={title}
                  content={content}
                  preferredPlacement={preferredPlacementKey.value}
                >
                  <button className="btn btn-default">Click me</button>
                </Popover>
              </div>
              <div className="row m-t-5">
                {KNOBS.knobs.map(knob => generateInput(knob, this))}{' '}
                {DOCSKNOBS.knobs.map(knob => generateInput(knob, this))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
