import React from 'react';
import Types from 'prop-types';

import JsonSchemaForm from '../../jsonSchemaForm';

import { marginModel, orientationModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicForm = (props) => {
  const form = props.component;

  return (
    <JsonSchemaForm
      schema={form.schema}
      model={form.model}
      submitted={props.submitted}
      onChange={props.onModelChange}
      className={getMarginBottom(form.margin || 'lg')}
      errors={props.errors}
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
};

DynamicForm.defaultProps = {
  errors: null,
};

export default DynamicForm;
