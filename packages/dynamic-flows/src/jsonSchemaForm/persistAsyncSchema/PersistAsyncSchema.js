import React, { useState } from 'react';
import Types from 'prop-types';
import { isNull } from '@transferwise/neptune-validation';
import { useIntl } from 'react-intl';
import isEqual from 'lodash.isequal';
import BasicTypeSchema from '../basicTypeSchema';
import { isStatus2xx, isStatus422, QueryablePromise } from '../../common/api/utils';
import messages from './PersistAsyncSchema.messages';
import { isValidSchema } from '../../common/validation/schema-validators';
import usePrev from '../../common/hooks/usePrev';
import { useBaseUrl } from '../../common/contexts/baseUrlContext/BaseUrlContext';
import { getAsyncUrl } from '../../common/async/url';

const PersistAsyncSchema = (props) => {
  const intl = useIntl();

  const [persistAsyncModel, setPersistAsyncModel] = useState(null);
  const prevPersistAsyncModel = usePrev(persistAsyncModel);
  const [persistAsyncError, setPersistAsyncError] = useState(null);
  const [fieldSubmitted, setFieldSubmitted] = useState(false);
  const [abortController, setAbortController] = useState(null);
  const baseUrl = useBaseUrl();

  if (props.schema.persistAsync.schema.format === 'base64url') {
    // TODO: Add support for base64url format
    throw new Error('Not implemented');
  }

  const setGenericPersistAsyncError = () =>
    setPersistAsyncError(intl.formatMessage(messages.genericError));

  const getPersistAsyncResponse = async (currentPersistAsyncModel, persistAsyncSpec) => {
    const signal = abortCurrentRequestAndGetNewAbortSignal();

    const requestBody = { [persistAsyncSpec.param]: currentPersistAsyncModel };
    setFieldSubmitted(true); // persist async initiated implied the field has been submitted

    const persistAsyncFetch = new QueryablePromise(
      fetch(getAsyncUrl(persistAsyncSpec.url, baseUrl), {
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

    broadcast(response);
  };

  const abortCurrentRequestAndGetNewAbortSignal = () => {
    if (abortController) {
      abortController.abort();
    }
    const newAbortController = new AbortController();
    setAbortController(newAbortController);
    return newAbortController.signal;
  };

  const broadcast = async (response) => {
    try {
      const jsonResponse = await response.json();
      const { idProperty, param } = props.schema.persistAsync;
      if (isStatus2xx(response.status)) {
        const id = getIdFromResponse(idProperty, jsonResponse);
        props.onChange(id, props.schema, id);
      } else if (isStatus422(response.status)) {
        const error = getErrorFromResponse(param, jsonResponse);
        props.onChange(null, props.schema, null);
        setPersistAsyncError(error);
      } else {
        setGenericPersistAsyncError();
      }
    } catch (e) {
      setGenericPersistAsyncError();
    }
  };

  const getIdFromResponse = (idProperty, response) => response[idProperty];

  const getErrorFromResponse = (errorProperty, response) => response.validation?.[errorProperty];

  const onBlur = () => {
    if (!isNull(persistAsyncModel) && !isEqual(persistAsyncModel, prevPersistAsyncModel)) {
      getPersistAsyncResponse(persistAsyncModel, props.schema.persistAsync);
    }
  };

  const persistAsyncOnChange = (newPersistAsyncModel) => {
    // TODO: Add different handling for file upload, do persist async on change instead of onblur
    setPersistAsyncError(null);

    if (isValidSchema(newPersistAsyncModel, props.schema)) {
      setPersistAsyncModel(newPersistAsyncModel);
    }
  };

  return (
    <>
      <BasicTypeSchema
        required={props.required}
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
  required: Types.bool,
};

PersistAsyncSchema.defaultProps = {
  translations: {},
  errors: null,
  required: false,
};

export default PersistAsyncSchema;
