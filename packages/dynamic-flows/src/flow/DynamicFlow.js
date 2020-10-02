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
      fetchNewStep(action, method === 'GET' ? undefined : model);
    }
  };

  const fetchNewStep = (action, model) => {
    request(action, model)
      .then((step) => {
        // If we don't receive a valid step, exit the flow
        if (!step.type) {
          props.onClose();
        } else {
          onStepChange(step);
        }
      })
      .catch((response) => {
        setValidations(response.validation);
      });
  };

  const onModelChange = (newModel, isValid, triggerSchema) => {
    setModel(newModel);
    setModelIsValid(isValid);

    if (triggerSchema.refreshRequirements) {
      const action = { method: 'POST', url: props.specification.refreshFormUrl };

      request(action, newModel)
        .then((step) => {
          updateStepSpecification(step);
        })
        .catch(() => {});
    }
  };

  const onStepChange = (step) => {
    setModel({});
    updateStepSpecification(step);
    setSubmitted(false);
    props.onStepChange(step);
  };

  const updateStepSpecification = (step) => {
    // setStepSpecification(step);
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
  useEffect(() => {
    onStepChange(props.specification);
  }, [props.specification]);

  // TODO Test
  // Load the first step using the initial flow URL
  useEffect(() => {
    // const action = {
    //   url: props.flowUrl,
    //   method: 'GET',
    // };
    // fetchNewStep(action);
  }, [props.flowUrl]);

  const [model, setModel] = useState(props.specification.model);
  const [modelIsValid, setModelIsValid] = useState(false); // Is this ok for init???
  const [submitted, setSubmitted] = useState(false);
  // const [stepSpecification, setStepSpecification] = useState(props.specification);
  const [layout, setLayout] = useState(getLayout(props.specification));
  const [validations, setValidations] = useState();

  if (!props.specification) {
    return <>No specification</>;
  }

  return (
    <>
      <DynamicLayout
        components={layout}
        onAction={onAction}
        onModelChange={onModelChange}
        submitted={submitted}
        locale={props.locale}
        model={model}
        errors={validations}
      />
    </>
  );
};

// TODO make flowURl required
// eslint-disable-next-line
DynamicFlow.propTypes = {
  flowUrl: Types.string.isRequired,
  onClose: Types.func.isRequired,
  onStepChange: Types.func,
  specification: Types.shape({
    type: Types.string,
    title: Types.string,
    description: Types.string,
    schemas: Types.array,
    model: Types.shape({}),
    layout: Types.array,
    actions: Types.array,
    refreshFormUrl: Types.string,
  }),
  locale: Types.string,
};

DynamicFlow.defaultProps = {
  specification: {},
  locale: 'en-GB',
  onStepChange: () => {},
};

export default DynamicFlow;
