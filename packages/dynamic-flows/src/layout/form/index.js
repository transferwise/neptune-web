import React from 'react';
import Types from 'prop-types';

import JsonSchemaForm from '../../jsonSchemaForm';

import { marginModel, orientationModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicForm = (props) => {
  const form = props.component;

  const onChange = (model, triggerSchema, triggerModel) => {
    props.onModelChange(model, form.schema, triggerModel, triggerSchema);
  };

  return (
    <JsonSchemaForm
      schema={form.schema}
      model={form.model}
      submitted={props.submitted}
      onChange={onChange}
      className={getMarginBottom(form.margin || 'lg')}
      errors={props.errors}
      onPersistAsync={props.onPersistAsync}
      baseUrl={props.baseUrl}
    />
  );
};

DynamicForm.propTypes = {
  onModelChange: Types.func.isRequired,
  component: Types.shape({
    // eslint-disable-next-line react/forbid-prop-types
    schema: Types.object,
    // eslint-disable-next-line react/forbid-prop-types
    model: Types.object,
    submitted: false,
    margin: marginModel,
    orientation: orientationModel,
  }).isRequired,
  submitted: Types.bool.isRequired,
  errors: Types.oneOfType([Types.string, Types.number, Types.object, Types.array, Types.bool]),
  onPersistAsync: Types.func.isRequired,
  baseUrl: Types.string.isRequired,
};

DynamicForm.defaultProps = {
  errors: null,
};

export default DynamicForm;
