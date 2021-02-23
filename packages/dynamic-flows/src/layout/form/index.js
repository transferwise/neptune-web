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
      model={props.model}
      submitted={props.submitted}
      onChange={onChange}
      className={getMarginBottom(form.margin || 'lg')}
      errors={props.errors}
      onPersistAsync={props.onPersistAsync}
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
  model: Types.oneOfType([Types.string, Types.number, Types.object, Types.array, Types.bool]),
  errors: Types.oneOfType([Types.string, Types.number, Types.object, Types.array, Types.bool]),
  onPersistAsync: Types.func.isRequired,
};

DynamicForm.defaultProps = {
  model: null,
  errors: null,
};

export default DynamicForm;
