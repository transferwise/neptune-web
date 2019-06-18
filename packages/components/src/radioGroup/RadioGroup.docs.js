import React, { Component } from 'react';
import classNames from 'classnames';
import { RadioGroup } from '..';

import { generateCodeBlock, generateState } from '../../docs/utils';

const RADIOS = [
  {
    value: 'radio-1',
    label: 'Radio1',
    secondary: 'Secondary line 1',
    name: 'name',
    disabled: false,
  },
  {
    value: 'radio-2',
    label: 'Radio2',
    secondary: 'Secondary line 2',
    name: 'name',
    disabled: false,
  },
  {
    value: 'radio-3',
    label: 'Radio3',
    secondary: 'Secondary line 3',
    name: 'name',
    disabled: true,
  },
];

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'selectedValue',
      state: 'selectedValue',
      defaultState: 'radio-2',
      options: [],
    },
    {
      type: 'text',
      label: 'radios',
      state: 'radios',
      defaultState: 'Array of radio objects',
    },
    {
      type: 'text',
      label: 'name',
      state: 'name',
      defaultState: 'radio-group',
    },
  ],
};

const extraPropsDocs = { onChange: 'console.log' };

export default class RadioGroupDocs extends Component {
  state = { ...generateState(KNOBS) };

  handleOnChange = selectedValue => {
    this.setState({ selectedValue });
    // eslint-disable-next-line
    console.log('Option selected', selectedValue);
  };

  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Radio group</h2>
              <span role="img" aria-label="uhm">
                and no is not the backstreet boys
              </span>
              <p className=" m-t-5">
                This component render a simple group of radios, and broadcast the index of selected
                option <code>onChange</code>
              </p>
              {generateCodeBlock('RadioGroup', KNOBS, this, extraPropsDocs)}
            </div>
            <div className="col-md-6">
              <div
                className={classNames({
                  ' m-b-4': true,
                })}
              >
                <RadioGroup
                  radios={RADIOS}
                  onChange={this.handleOnChange}
                  selectedValue={this.state.selectedValue}
                  name="radio-group"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
