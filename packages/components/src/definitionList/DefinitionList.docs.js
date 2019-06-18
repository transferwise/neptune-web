import React, { Component } from 'react';
import { DefinitionList } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const LAYOUTS = ['vertical', 'horizontal', 'justified'];

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Layout',
      state: 'layout',
      options: LAYOUTS.map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: LAYOUTS[0], label: LAYOUTS[0] },
    },
  ],
};

const extraPropsDocs = {
  model: 'this.state.model',
  fields: 'this.state.fields',
  locale: 'en-GB',
  title: 'This is an awesome component',
  narrow: 'false',
};

export default class DefinitionListDocs extends Component {
  state = {
    ...generateState(KNOBS),
  };

  render() {
    const MODEL = {
      text: 'helloworld',
      number: 123456,
      select: '1',
      date: '2000-12-20T00:00:00.000Z',
      checkbox: true,
      radio: '2',
      password: 'qwerty',
      telephone: '+441234567890',
      textarea:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    };

    const FIELDS = {
      text: {
        title: 'Text',
        type: 'text',
        displayFormat: '***** - *****||*-*-*',
        width: 'md',
        refreshRequirementsOnChange: true,
        tagClassName: {
          h3: true,
        },
      },
      number: {
        title: 'Number',
        type: 'number',
        width: 'md',
        refreshRequirementsOnChange: true,
      },
      select: {
        title: 'Select',
        type: 'string',
        control: 'select',
        width: 'md',
        refreshRequirementsOnChange: true,
        values: [
          {
            key: '1',
            name: 'One',
          },
          {
            key: '2',
            name: 'Two',
          },
        ],
      },
      password: {
        title: 'Password',
        type: 'string',
        control: 'password',
        width: 'md',
        refreshRequirementsOnChange: true,
      },
      date: {
        title: 'Date',
        type: 'string',
        format: 'date',
        refreshRequirementsOnChange: true,
      },
      telephone: {
        title: 'Telephone',
        type: 'string',
        control: 'tel',
        placeholder: 'Enter...',
      },
      radio: {
        title: 'Radio',
        type: 'string',
        control: 'radio',
        width: 'md',
        refreshRequirementsOnChange: true,
        values: [
          {
            key: '1',
            name: 'One',
          },
          {
            key: '2',
            name: 'Two',
          },
        ],
      },
      checkbox: {
        title: 'Checkbox',
        type: 'boolean',
        placeholder: 'Label',
        width: 'md',
        refreshRequirementsOnChange: true,
      },
      textarea: {
        title: 'Textarea',
        type: 'string',
        control: 'textarea',
        refreshRequirementsOnChange: true,
      },
      file: {
        title: 'File',
        type: 'string',
        format: 'base64url',
        refreshRequirementsOnChange: true,
      },
      hidden: {
        type: 'string',
        hidden: true,
        default: 'hidden-value',
      },
    };
    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6 m-t-3">
              <h2>Definition list</h2>
              <p>
                <code>DefinitionList</code> is a companion to
                <code>
                  <a href="#fieldset">FieldSet</a>
                </code>
                , it shares the same interface, and same dynamic requirements format, allowing us to
                display the data model we generated using a fieldset.
              </p>
              <p>
                <code>narrow</code> is used for <code>vertical</code> layout if the goal is to
                display the items stacked
              </p>
              <p>
                You can also specify the layout, which defaults to <code>vertical</code>.
              </p>
              {generateCodeBlock('DefinitionList', KNOBS, this, extraPropsDocs)}
            </div>
            <div className="col-md-6">
              <DefinitionList
                model={MODEL}
                fields={FIELDS}
                locale="en-GB"
                title="This is an awesome component"
                narrow={false}
                layout={this.state.layout.value}
              />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
