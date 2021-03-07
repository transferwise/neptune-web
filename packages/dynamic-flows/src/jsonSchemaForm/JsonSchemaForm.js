import React from 'react';
import Types from 'prop-types';
import GenericSchema from './genericSchema';
import { isValidSchema } from '../common/validation/schema-validators';

const JsonSchemaForm = (props) => {
  const onChange = (model, schema) => {
    props.onChange(model, isValidSchema(model, props.schema), schema);
  };
  return <GenericSchema {...props} onChange={onChange} />;
};

JsonSchemaForm.propTypes = {
  /**
   * The JSON schema we're trying to satisfy
   */
  schema: Types.shape({}).isRequired,
  /**
   * An initial data model
   */
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  /**
   * Errors should be human readable strings, the object should match the shape of the model.
   */
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  /**
   * The user's locale, this will affect the rendering of some components e.g. dates.
   */
  locale: Types.string,
  /**
   * Translations used to enhance components.
   */
  translations: Types.shape({}),
  /**
   * Fires when the internal data model changes as a result of form interaction.
   *
   * Provide two params the new model, and a boolean indicating if it's valid.
   */
  onChange: Types.func.isRequired,
  /**
   * Tell the form if it has been submitted, triggering display of any validation failures.
   */
  submitted: Types.bool.isRequired,
  /**
   * Tell the form if it should disable all controls.
   */
  disabled: Types.bool,
};

JsonSchemaForm.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
  disabled: false,
};

export default JsonSchemaForm;
