import React from 'react';
import Types from 'prop-types';

import JsonSchemaForm from '../../jsonSchemaForm';

import { marginModel, orientationModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicForm = (props) => {
  const form = props.component;

  const onChange = (model, isValid, triggerSchema) => {
    props.onModelChange(model, isValid, triggerSchema, form.schema);
  };

  return (
    <JsonSchemaForm
      schema={form.schema}
      model={props.model}
      submitted={props.submitted}
      onChange={onChange}
      className={getMarginBottom(form.margin || 'lg')}
      errors={props.errors}
    />
  );
};

DynamicForm.propTypes = {
  onModelChange: Types.func.isRequired,
  component: Types.shape({
    schema: Types.object,
    margin: marginModel,
    orientation: orientationModel,
  }).isRequired,
  submitted: Types.bool.isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.object, Types.array, Types.bool]),
  errors: Types.oneOfType([Types.string, Types.object, Types.array]),
};

DynamicForm.defaultProps = {
  model: null,
  errors: null,
};

export default DynamicForm;
