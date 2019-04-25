import React, { Component } from 'react';
import { DefinitionList } from '..';
import Select from '../select';

const LAYOUTS = ['vertical', 'horizontal', 'justified'];

export default class DefinitionListDocs extends Component {
  state = {
    model: {
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
    },
    fields: {
      text: {
        title: 'Text',
        type: 'text',
        displayFormat: '***** - *****||*-*-*',
        width: 'md',
        refreshRequirementsOnChange: true,
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
    },
    layout: LAYOUTS[0],
  };

  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="row m-t-4">
            <div className="col-md-6">
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
                You can also specify the layout, which defaults to <code>vertical</code>
              </p>
              <div className="m-t-2">
                {/* eslint-disable react/jsx-indent */}
                <pre className="tw-docs-code">
                  {`<DefinitionList
  model={this.state.model}
  fields={this.state.fields}
  locale="en-GB"
  title="This is an awesome component"
  narrow={false}
  layout="${this.state.layout}"
/>`}
                </pre>
                {/* eslint-enable react/jsx-indent */}
              </div>
              <label htmlFor="definition-list-layout">Layout</label>
              <Select
                id="definition-list-layout"
                selected={
                  this.state.layout
                    ? { value: this.state.layout, label: this.state.layout }
                    : LAYOUTS[0]
                }
                options={LAYOUTS.map(s => ({ value: s, label: s }))}
                onChange={selection =>
                  this.setState({ layout: selection ? selection.value : LAYOUTS[0] })
                }
              />
            </div>
            <div className="col-md-6">
              <DefinitionList
                model={this.state.model}
                fields={this.state.fields}
                locale="en-GB"
                title="This is an awesome component"
                narrow={false}
                layout={this.state.layout}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
