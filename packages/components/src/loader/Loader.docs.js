import React, { Component } from 'react';
import { Loader } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const KNOBS = {
  knobs: [
    {
      type: 'checkbox',
      label: 'Small?',
      state: 'small',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Scoped className?',
      state: 'hasClassNames',
      defaultState: false,
    },
  ],
};

export default class LoaderDocs extends Component {
  state = { ...generateState(KNOBS) };

  render() {
    const extraPropsDocs = {};
    if (this.state.hasClassNames) {
      extraPropsDocs.classNames = `
    loader: 'loader_33HEu6aS3s',
    loader-spinner: 'loader-spinner_z0k4VBxn-L'`;
    }

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Loader</h2>
              <p>Like a record baby</p>
              {generateCodeBlock('Loader', KNOBS, this, extraPropsDocs)}
            </div>
            <div className="col-md-6 ">
              <div className=" text-xs-center">
                <Loader small={this.state.small} />
              </div>
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
