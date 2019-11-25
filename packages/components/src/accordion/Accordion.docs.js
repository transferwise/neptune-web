import React, { Component } from 'react';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';
import Accordion from '../accordion';

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Open accordion item',
      state: 'indexOpen',
      options: [0, 1, 2, 3].map(value => {
        return {
          value,
          label: value.toString(),
        };
      }),
      defaultState: { value: 1, label: '1' },
    },
  ],
};

const items = [
  {
    title: 'Item 1',
    content: 'I can be text',
  },
  {
    title: <h5>Item 2</h5>,
    content: <i>Or whatever you want me to be</i>,
  },
  {
    title: 'Item 3',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Item 4',
    content: (
      <ul>
        <li>This</li>
        <li>is</li>
        <li>a</li>
        <li>list</li>
      </ul>
    ),
  },
];

const extraPropsDocs = {
  items: [items[0], items[2]],
};

export default class AccordionDocs extends Component {
  state = {
    ...generateState(KNOBS),
  };
  key = 0;
  render() {
    this.key += 1;
    const { indexOpen } = this.state;
    return (
      <div className="container">
        <section className="section">
          <div className="row m-t-4">
            <div className="col-md-6">
              <h2>Accordion</h2>
              <p>[:||||||||||||:]</p>
              {generateCodeBlock('Accordion', KNOBS, this, extraPropsDocs)}
            </div>
            <div className="col-md-6">
              <Accordion items={items} indexOpen={indexOpen.value} key={this.key} />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
