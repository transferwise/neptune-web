import React, { useState } from 'react';
import Types from 'prop-types';
import BasicTypeSchema from '../basicTypeSchema';
import { isStatus2xx, isStatus422, QueryablePromise } from '../../common/api/utils';

const PersistAsyncSchema = (props) => {
  const [persistAsyncModel, setPersistAsyncModel] = useState(null);
  const [persistAsyncError, setPersistAsyncError] = useState(null);
  const [fieldSubmitted, setFieldSubmitted] = useState(false);
  const [abortController, setAbortController] = useState(null);

  if (props.schema.persistAsync.schema.format === 'base64url') {
    // TODO: Add support for base64url format
    throw new Error('Not implemented');
  }

  const getPersistAsyncResponse = async (currentPersistAsyncModel, persistAsyncSpec) => {
    const signal = abortCurrentRequestAndGetNewAbortSignal();

    const requestBody = { [persistAsyncSpec.param]: currentPersistAsyncModel };
    setFieldSubmitted(true); // persist async initiated implied the field has been submitted

    const persistAsyncFetch = new QueryablePromise(
      fetch(`${persistAsyncSpec.url}`, {
        method: persistAsyncSpec.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        signal,
      }),
    );
    props.onPersistAsync(persistAsyncFetch);
    const response = await persistAsyncFetch;
    const responseJson = await response.json();

    broadcast(response.status, responseJson);
  };

  const abortCurrentRequestAndGetNewAbortSignal = () => {
    if (abortController) {
      abortController.abort();
    }
    const newAbortController = new AbortController();
    setAbortController(newAbortController);
    return newAbortController.signal;
  };

  const broadcast = (status, response) => {
    const { idProperty, param } = props.schema.persistAsync;

    if (isStatus2xx(status)) {
      const id = getIdFromResponse(idProperty, response);
      props.onChange(id, props.schema);
    } else if (isStatus422(status)) {
      const error = getErrorFromResponse(param, response);
      props.onChange(null, props.schema);
      setPersistAsyncError(error);
    } else {
      setPersistAsyncError('Something went wrong, please try again later!');
    }
  };

  const getIdFromResponse = (idProperty, response) => response[idProperty];

  const getErrorFromResponse = (errorProperty, response) => response.validation?.[errorProperty];

  const onBlur = () => {
    getPersistAsyncResponse(persistAsyncModel, props.schema.persistAsync);
  };

  const persistAsyncOnChange = (newPersistAsyncModel) => {
    // TODO: Add different handling for file upload, do persist async on change instead of onblur
    setPersistAsyncError(null);
    setPersistAsyncModel(newPersistAsyncModel);
  };

  return (
    <>
      <BasicTypeSchema
        onChange={persistAsyncOnChange}
        submitted={props.submitted || fieldSubmitted}
        schema={props.schema.persistAsync.schema}
        errors={persistAsyncError || props.errors}
        onBlur={onBlur}
      />
    </>
  );
};

PersistAsyncSchema.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    alert: Types.shape({
      context: Types.string,
      markdown: Types.string,
    }),
    persistAsync: Types.shape({
      method: Types.string,
      url: Types.string,
      param: Types.string,
      idProperty: Types.string,
      schema: Types.shape({
        format: Types.string,
      }),
    }),
    enum: Types.arrayOf(Types.oneOfType([Types.string, Types.number, Types.bool])),
    const: Types.oneOfType([Types.string, Types.number, Types.bool]),
    format: Types.string,
    title: Types.string,
    values: Types.arrayOf(Types.shape({})),
    default: Types.oneOfType([Types.string, Types.number, Types.bool]),
    disabled: Types.bool,
    hidden: Types.bool,
    help: Types.shape({}),
  }).isRequired,
  translations: Types.shape({}),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  onPersistAsync: Types.func.isRequired,
};

PersistAsyncSchema.defaultProps = {
  translations: {},
  errors: null,
};

export default PersistAsyncSchema;
