import React, { useState } from 'react';
import Types from 'prop-types';
import { isNull } from '@transferwise/neptune-validation';
import isEqual from 'lodash.isequal';
import BasicTypeSchema from '../basicTypeSchema';
import { isValidSchema } from '../../common/validation/schema-validators';
import usePrev from '../../common/hooks/usePrev';
import { useBaseUrl } from '../../common/contexts/baseUrlContext/BaseUrlContext';
import { getAsyncUrl } from '../../common/async/url';

const ValidationAsyncSchema = (props) => {
  const [validationAsyncModel, setValidationAsyncModel] = useState(null);
  const prevValidationAsyncModel = usePrev(validationAsyncModel);
  const [validationAsyncSuccessMessage, setValidationAsyncSuccessMessage] = useState(null);
  const [validationAsyncErrors, setValidationAsyncErrors] = useState(null);
  const [fieldSubmitted, setFieldSubmitted] = useState(false);
  const [abortController, setAbortController] = useState(null);
  const baseUrl = useBaseUrl();

  const getValidationAsyncResponse = async (currentValidationAsyncModel, validationAsyncSpec) => {
    const signal = abortCurrentRequestAndGetNewAbortSignal();

    const requestBody = { [validationAsyncSpec.param]: currentValidationAsyncModel };
    setFieldSubmitted(true);

    const validationAsyncFetch = fetch(getAsyncUrl(validationAsyncSpec.url, baseUrl), {
      method: validationAsyncSpec.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
      signal,
    });

    const response = await validationAsyncFetch;
    setValidationMessages(response);
  };

  const setValidationMessages = async (response) => {
    try {
      const jsonResponse = await response.json();

      if (response?.status === 200) {
        setValidationAsyncSuccessMessage(jsonResponse.message);
      } else if (response?.status === 422) {
        setValidationAsyncErrors(jsonResponse.message);
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}
  };

  const abortCurrentRequestAndGetNewAbortSignal = () => {
    if (abortController) {
      abortController.abort();
    }
    const newAbortController = new AbortController();
    setAbortController(newAbortController);
    return newAbortController.signal;
  };

  const onBlur = () => {
    if (!isNull(validationAsyncModel) && !isEqual(validationAsyncModel, prevValidationAsyncModel)) {
      getValidationAsyncResponse(validationAsyncModel, props.schema.validationAsync);
    }
  };

  const validationAsyncOnChange = (newValidationAsyncModel) => {
    props.onChange(newValidationAsyncModel, props.schema, newValidationAsyncModel);
    setValidationAsyncErrors(null);
    setValidationAsyncSuccessMessage(null);

    if (isValidSchema(newValidationAsyncModel, props.schema)) {
      setValidationAsyncModel(newValidationAsyncModel);
    }
  };

  return (
    <BasicTypeSchema
      required={props.required}
      onChange={validationAsyncOnChange}
      submitted={props.submitted || fieldSubmitted}
      schema={props.schema}
      errors={validationAsyncErrors || props.errors}
      onBlur={onBlur}
      validationAsyncSuccessMessage={validationAsyncSuccessMessage}
    />
  );
};

ValidationAsyncSchema.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    alert: Types.shape({
      context: Types.string,
      markdown: Types.string,
    }),
    validationAsync: Types.shape({
      method: Types.string,
      url: Types.string,
      param: Types.string,
    }),
  }).isRequired,
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  required: Types.bool,
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
};

ValidationAsyncSchema.defaultProps = {
  errors: null,
  required: false,
};

export default ValidationAsyncSchema;
