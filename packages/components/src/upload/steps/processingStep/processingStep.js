import React from 'react';
import Types from 'prop-types';
import ProcessIndicator from '../../../processIndicator';

const ProcessingStep = props => {
  const {
    isComplete,
    isError,
    isProcessing,
    isSuccess,
    onAnimationCompleted,
    onClear,
    psButtonText,
    psFailureText,
    psProcessingText,
    psSuccessText,
  } = props;

  let processStatus = ProcessIndicator.Status.Processing;
  if (isError) {
    processStatus = ProcessIndicator.Status.Failed;
  }
  if (isSuccess) {
    processStatus = ProcessIndicator.Status.Succeeded;
  }

  return (
    <div className="droppable-processing-card droppable-card" aria-hidden={isComplete}>
      <div className="droppable-card-content">
        <ProcessIndicator
          size={ProcessIndicator.Size.Small}
          status={processStatus}
          onAnimationCompleted={status => onAnimationCompleted(status)}
        />
        <h4 className="m-t-3 m-b-3">
          {!isSuccess && !isError && isProcessing && psProcessingText}
          {isSuccess && psSuccessText}
          {isError && psFailureText}
        </h4>
        {psButtonText && (
          <button className="btn btn-default btn-sm" onClick={e => onClear(e)}>
            {psButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

ProcessingStep.propTypes = {
  isComplete: Types.bool.isRequired,
  isError: Types.bool.isRequired,
  isProcessing: Types.bool.isRequired,
  isSuccess: Types.bool.isRequired,
  onAnimationCompleted: Types.func.isRequired,
  onClear: Types.func.isRequired,
  psButtonText: Types.string.isRequired,
  psFailureText: Types.string.isRequired,
  psProcessingText: Types.string.isRequired,
  psSuccessText: Types.string.isRequired,
};

export default ProcessingStep;
