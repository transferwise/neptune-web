import React, { Component } from 'react';

import { DefinitionList } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const { Layout } = DefinitionList;

const DEFINITIONS = [
  {
    title: <span>First title</span>,
    value: <span>first value</span>,
    key: 'first',
  },
  {
    title: 'Second title',
    value: 'second value happenstobereallylongtodemonstratethewordbreak',
    key: 'second',
  },
  {
    title: <>Third title</>,
    value: <>third value</>,
    key: 'third',
  },
];

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Layout',
      state: 'layout',
      options: Object.entries(Layout).map(([key, value]) => ({
        label: key,
        value,
      })),
      defaultState: { value: Layout.VERTICAL_TWO_COLUMN, label: Layout.VERTICAL_TWO_COLUMN },
    },
  ],
};

export default class DynamicFieldDefinitionListDocs extends Component {
  state = generateState(KNOBS);

  render() {
    const {
      layout: { value: layout },
    } = this.state;

    return (
      <div className="container" id="definitionlist">
        <section className="section">
          <div className="row">
            <div className="col-md-6 m-t-3">
              <h2>Definition list</h2>
              <p>It&apos;s not who I am underneath, but what I do that defines me.</p>
              <p>A definition list is used to lay out title-value pairs.</p>
              <p>
                The <code>definitions</code> prop expects an array of objects with{' '}
                <code>title</code> (node), <code>value</code> (node), and <code>key</code> (string).
              </p>
              {generateCodeBlock('DefinitionList', KNOBS, this, {
                definitions: [],
              })}
            </div>

            <div className="col-md-6">
              <DefinitionList definitions={DEFINITIONS} layout={layout} />

              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
