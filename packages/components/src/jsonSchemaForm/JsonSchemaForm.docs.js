import React, { Component } from 'react';
import JsonSchemaForm from '.';
import Button from '../button';
import schema from './schema.json';

export default class JsonSchemaFormDocs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schema,
      model: {
        number: 3,
        string: 'hi',
      },
      errors: {
        phone: 'Manual error',
      },
      submitted: false,
      locale: 'en-GB',
    };
  }

  onChange = model => {
    console.log('model', model); // eslint-disable-line
  };

  onSubmit = () => {
    this.setState({ submitted: true });
  };

  render() {
    const docsCode = `<JsonSchemaForm
  model={${JSON.stringify(this.state.model)}}
  errors={${JSON.stringify(this.state.errors)}}
  locale={"${this.state.locale}""}
  submitted={${this.state.submitted}}
  schema={${JSON.stringify(this.state.schema)}}
/>`;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>JSON Schema Form</h2>
              <p>
                The JSON schema dynamic form uses a range of components to render a fully functional
                form based on a schema. It builds a JSON structure to the specification of that
                schema based on user input, broadcasting that updated model as it changes.
              </p>
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">{docsCode}</pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
            <div className="col-md-6 p-b-2">
              <JsonSchemaForm
                schema={this.state.schema}
                model={this.state.model}
                errors={this.state.errors}
                onChange={this.onChange}
                submitted={this.state.submitted}
              />
              <Button onClick={this.onSubmit} block>
                Simulate Submit
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
