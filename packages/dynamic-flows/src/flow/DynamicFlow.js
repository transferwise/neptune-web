import React, { useState, useEffect } from 'react';
import Types from 'prop-types';

import DynamicLayout from '../layout/index';
import { convertStepToLayout, inlineFormSchemas } from './layoutService';

import { request } from './stepService';

/**
 * ## DynamicFlow
 *
 * The dynamic flow component is responsible for the asynchronous actions occuring
 * within a dynamic flow, managing transitions between steps as well as refreshing
 * requirements.  It does control any view logic, but takes the step definition
 * and reformats it to use a DynamicLayout for presentation.
 */
const DynamicFlow = (props) => {
  const onAction = (action) => {
    if (action.exit) {
      props.onClose(action.data);
      return;
    }

    const method = action.method.toUpperCase();
    const submissionMethods = ['POST', 'PUT', 'PATCH'];

    const isSubmit = submissionMethods.includes(method);

    if (isSubmit) {
      setSubmitted(true);
    }

    if (modelIsValid || !isSubmit) {
      const data = mergeModels(model, action.data);
      fetchNewStep(action, method === 'GET' ? undefined : data);
    }
  };

  const mergeModels = (formModel, actionModel) => {
    // TODO handle different data types
    return { ...(actionModel || {}), ...(formModel || {}) };
  };

  const fetchNewStep = async (action, model) => {
    let response;
    try {
      console.log('fetch'); // eslint-disable-line
      response = await request(action, model);

      console.log('then'); // eslint-disable-line
      // If we don't receive a valid step, exit the flow
      if (!response.type) {
        props.onClose();
      } else {
        onStepChange(response);
      }
    } catch (error) {
      console.log('catch', error); // eslint-disable-line
      setValidations(error.validation); // TODO this not thrown
    }
  };

  const onModelChange = async (newModel, isValid, triggerSchema) => {
    setModel(newModel);
    setModelIsValid(isValid);

    if (triggerSchema.refreshRequirements) {
      const action = { method: 'POST', url: stepSpecification.refreshFormUrl };

      const response = await request(action, newModel);

      response
        .then((step) => {
          updateStepSpecification(step);
        })
        .catch(() => {});
    }
  };

  const onStepChange = (step) => {
    setModel(step.model);
    updateStepSpecification(step);
    setSubmitted(false);
    props.onStepChange(step);
  };

  const updateStepSpecification = (step) => {
    setStepSpecification(step);
    setLayout(getLayout(step));
    if (step.model) {
      setModel(step.model); // Replace model if we receive a new one
    }
    // TODO set modelIsValid ?
  };

  const getLayout = (step) => {
    if (!step) {
      return [];
    }

    const layout = step.layout ? step.layout : convertStepToLayout(step);

    return inlineFormSchemas(layout, step.schemas);
  };

  // When we get a new specification from outside, reinitialise.
  // useEffect(() => {
  //   onStepChange(props.specification);
  // }, [props.specification]);

  // TODO Test
  // Load the first step using the initial flow URL
  useEffect(() => {
    console.log('flowUrl', props.flowUrl); // eslint-disable-line
    const action = {
      url: props.flowUrl,
      method: 'GET',
    };
    fetchNewStep(action);
  }, [props.flowUrl]);

  const [model, setModel] = useState(); // useState(props.specification.model);
  const [modelIsValid, setModelIsValid] = useState(false); // Is this ok for init???
  const [submitted, setSubmitted] = useState(false);
  const [stepSpecification, setStepSpecification] = useState({});
  const [layout, setLayout] = useState(); // useState(getLayout(props.specification));
  const [validations, setValidations] = useState();

  return (
    <>
      {!layout && <p>No layout</p>}
      {layout && (
        <DynamicLayout
          components={layout}
          onAction={onAction}
          onModelChange={onModelChange}
          submitted={submitted}
          locale={props.locale}
          model={model}
          errors={validations}
        />
      )}
    </>
  );
};

// TODO make flowURl required
// eslint-disable-next-line
DynamicFlow.propTypes = {
  flowUrl: Types.string.isRequired,
  onClose: Types.func.isRequired,
  onStepChange: Types.func,
  locale: Types.string,
};

DynamicFlow.defaultProps = {
  locale: 'en-GB',
  onStepChange: () => {},
};

export default DynamicFlow;
