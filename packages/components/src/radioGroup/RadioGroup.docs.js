import React, { Component } from 'react';
import classNames from 'classnames';
import { RadioGroup } from '..';

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
  firstStepKnobs: [
    {
      type: 'select',
      label: 'selectedValue',
      state: 'selectedValue',
      defaultState: 'radio-2',
      options: [],
    },
    {
      type: 'input',
      label: 'radios',
      state: 'radios',
      defaultState: 'Array of radio objects',
    },
    {
      type: 'input',
      label: 'name',
      state: 'name',
      defaultState: 'radio-group',
    },
  ],
};

export default class RadioGroupDocs extends Component {
  constructor() {
    super();
    this.state = { ...this.getState() };
  }

  getState = () => {
    const state = [];
    Object.values(KNOBS).map(knob =>
      knob.map(curr => {
        state[curr.state] = curr.defaultState;
        return state;
      }),
    );
    return state;
  };

  getDocs = () => {
    const docs = Object.values(KNOBS)
      .map(knob =>
        knob
          .reduce((acc, curr) => {
            acc.push(`${curr.state} = {"${this.state[curr.state] ? this.state[curr.state] : ''}"}`);
            return acc;
          }, [])
          .join('\n\r  '),
      )
      .join();

    return (
      <pre className="tw-docs-code ">
        {`<RadioGroup
  onChange={'console.log'}
  ${docs}
/>`}
      </pre>
    );
  };

  handleOnChange = selectedValue => {
    this.setState({ selectedValue });
    // eslint-disable-next-line
    console.log('Option selected', selectedValue);
  };

  render() {
    return (
      <div className="container">
        <section className="section">
          {/* Full Component */}
          <div className="row">
            <div className="col-md-6">
              <h2>Radio group</h2>
              <span role="img" aria-label="uhm">
                and no is not the backstreet boys
              </span>
              {getExtraDocs()}
              {this.getDocs()}
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

const getExtraDocs = () => (
  <div>
    <p className=" m-t-5">
      This component render a simple group of radios, and broadcast the index of selected option{' '}
      <code>onChange</code>
    </p>
  </div>
);
