import React, { useState } from 'react';
import Types from 'prop-types';
import { isNull } from '@transferwise/neptune-validation';
import BasicTypeSchema from '../basicTypeSchema';
import { QueryablePromise } from '../../common/api/utils';

const ValidationAsyncSchema = (props) => {
  const [validationAsyncModel, setValidationAsyncModel] = useState(null);
  const [validationAsyncSuccessMessage, setValidationAsyncSuccessMessage] = useState(null);
  const [validationAsyncErrors, setValidationAsyncErrors] = useState(null);
  const [fieldSubmitted, setFieldSubmitted] = useState(false);
  const [abortController, setAbortController] = useState(null);

  const getValidationAsyncResponse = async (currentValidationAsyncModel, validationAsyncSpec) => {
    const signal = abortCurrentRequestAndGetNewAbortSignal();

    const requestBody = { [validationAsyncSpec.param]: currentValidationAsyncModel };
    setFieldSubmitted(true);

    const validationAsyncFetch = new QueryablePromise(
      fetch(`${validationAsyncSpec.url}`, {
        method: validationAsyncSpec.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        signal,
      }),
    );

    const response = await validationAsyncFetch;
    setValidationMessages(response);
  };

  const setValidationMessages = async (response) => {
    try {
      const jsonResponse = await response.json();

      console.log(jsonResponse, 'r')
      console.log(jsonResponse.message, 'm')

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
    if (!isNull(validationAsyncModel)) {
      getValidationAsyncResponse(validationAsyncModel, props.schema.validationAsync);
    }
  };

  const validationAsyncOnChange = (newValidationAsyncModel) => {
    setValidationAsyncModel(newValidationAsyncModel);
  };

  return (
    <>
      <BasicTypeSchema
        required={props.required}
        onChange={validationAsyncOnChange}
        submitted={props.submitted || fieldSubmitted}
        schema={props.schema}
        errors={validationAsyncErrors || props.errors}
        onBlur={onBlur}
      />
    </>
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
  submitted: Types.bool.isRequired,
  required: Types.bool,
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
};

ValidationAsyncSchema.defaultProps = {
  errors: null,
  required: false,
};

export default ValidationAsyncSchema;
