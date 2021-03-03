import React from 'react';
import Types from 'prop-types';
import GenericSchema from './genericSchema';
import { BaseUrlContext } from '../common/contexts/baseUrlContext/BaseUrlContext';

const JsonSchemaForm = (props) => {
  const { baseUrl } = props;

  return (
    <BaseUrlContext.Provider value={{ baseUrl }}>
      <GenericSchema {...props} />
    </BaseUrlContext.Provider>
  );
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
  /**
   * Fires when any internal persist async is triggered and API call is underway.
   *
   * Provides a QueryablePromise of the persist async call.
   */
  onPersistAsync: Types.func.isRequired,
  /**
   * Specifies the baseUrl of persist async and validation async requests.
   */
  baseUrl: Types.string.isRequired,
};

JsonSchemaForm.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
  disabled: false,
};

export default JsonSchemaForm;
