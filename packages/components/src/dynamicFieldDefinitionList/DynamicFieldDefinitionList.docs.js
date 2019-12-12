import React, { Component } from 'react';
import { DynamicFieldDefinitionList } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';
import { Layout } from '../common';

const LayoutValues = Object.keys(Layout).map(key => Layout[key]);

const LOCALES = ['en-GB', 'fr-FR', 'hu-HU', 'de-DE', 'ja-JP', 'pt-BR'];

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Layout',
      state: 'layout',
      options: LayoutValues.map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: Layout.VERTICAL_TWO_COLUMN, label: Layout.VERTICAL_TWO_COLUMN },
    },
    {
      type: 'select',
      label: 'Locale',
      state: 'locale',
      options: LOCALES.map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: LOCALES[0], label: LOCALES[0] },
    },
  ],
};

const extraPropsDocs = {
  model: 'this.state.model',
  fields: 'this.state.fields',
  title: 'This is an awesome component',
};

export default class DynamicFieldDefinitionListDocs extends Component {
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
      <div className="container" id="dynamicfielddefinitionlist">
        <section className="section">
          <div className="row">
            <div className="col-md-6 m-t-3">
              <h2>Dynamic field definition list</h2>

              <p>
                <code>DynamicFieldDefinitionList</code> is a companion to
                <code>
                  <a href="#fieldset">FieldSet</a>
                </code>
                , it shares the same interface, and same dynamic requirements format, allowing us to
                display the data model we generated using a fieldset.
              </p>

              <p>
                <code>DefinitionList</code> is used underneath, and the same layout prop is
                accepted.
              </p>

              {generateCodeBlock('DynamicFieldDefinitionList', KNOBS, this, extraPropsDocs)}
            </div>

            <div className="col-md-6">
              <DynamicFieldDefinitionList
                model={MODEL}
                fields={FIELDS}
                locale={this.state.locale.value}
                title="This is an awesome component"
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
