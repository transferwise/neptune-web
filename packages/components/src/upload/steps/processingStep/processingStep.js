import React from 'react';
import Types from 'prop-types';
import ProcessIndicator from '../../../processIndicator';
import {
  processIndicatorStatuses,
  processIndicatorSizes,
} from '../../../processIndicator/ProcessIndicator';

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

  let statusIndex = 0;

  if (isError) {
    statusIndex = 1;
  }
  if (isSuccess) {
    statusIndex = 2;
  }

  return (
    <div className="droppable-processing-card droppable-card" aria-hidden={isComplete}>
      <div className="droppable-card-content">
        <ProcessIndicator
          size={processIndicatorSizes[1]}
          status={processIndicatorStatuses[statusIndex]}
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
