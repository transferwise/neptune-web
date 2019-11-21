import React, { Component } from 'react';
import JsonSchemaForm from '.';
import simpleSchema from './schemas/simple.json';
import allOfSchema from './schemas/allOf.json';
import oneOfSchema from './schemas/oneOf.json';
import configSchema from './schemas/config.json';

export default class JsonSchemaFormDocs extends Component {
  constructor(props) {
    super(props);

    this.schemas = [simpleSchema, allOfSchema, oneOfSchema];

    this.state = {
      model: {
        number: 3,
        string: 'hi',
      },
      errors: {
        string: 'Manual error',
      },
      config: {
        schemaIndex: 0,
        locale: 'en-GB',
        submitted: false,
      },
    };
  }

  onChange = model => {
    console.log('model', model); // eslint-disable-line
  };

  onConfigChange = config => {
    this.setState({ config });
  };

  onSubmit = () => {
    this.setState({ submitted: true });
  };

  render() {
    const { config } = this.state;
    const schema = this.schemas[config.schemaIndex];

    const docsCode = `<JsonSchemaForm
  model=${JSON.stringify(this.state.model)}
  errors=${JSON.stringify(this.state.errors)}
  locale={"${config.locale}"}
  submitted={${config.submitted}}
  schema=${JSON.stringify(schema)}
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
              <JsonSchemaForm
                schema={configSchema}
                model={this.state.config}
                onChange={this.onConfigChange}
                submitted={false}
              />
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">{docsCode}</pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
            <div className="col-md-6 p-b-2">
              <JsonSchemaForm
                schema={schema}
                model={this.state.model}
                errors={this.state.errors}
                onChange={this.onChange}
                submitted={config.submitted}
                locale={config.locale}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
