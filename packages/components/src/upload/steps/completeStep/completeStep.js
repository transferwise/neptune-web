import React, { Fragment } from 'react';
import Types from 'prop-types';
import AlertCircleIcon from '@transferwise/icons/react/alert-circle';
import DocumentIcon from '@transferwise/icons/react/document';

const CompleteStep = props => {
  const {
    csButtonText,
    csFailureText,
    csSuccessText,
    fileName,
    isComplete,
    isError,
    isImage,
    onClear,
    uploadedImage,
  } = props;
  return (
    <div className="droppable-complete-card droppable-card" aria-hidden={!isComplete}>
      <div className="droppable-card-content ">
        <div>
          {isError ? (
            <Fragment>
              <AlertCircleIcon size="xxl" className="text-danger" />
              {csFailureText && <p className="m-t-2">{csFailureText}</p>}
            </Fragment>
          ) : (
            <Fragment>
              {isImage && uploadedImage ? (
                <img src={uploadedImage} alt="OK" className="thumbnail " />
              ) : (
                <DocumentIcon size="xl" />
              )}

              {fileName && (
                <p className="m-b-0">
                  <small>{fileName}</small>
                </p>
              )}
              {csSuccessText && (
                <div className="caption m-t-1">
                  <h4>{csSuccessText}</h4>
                </div>
              )}
            </Fragment>
          )}
        </div>
        {csButtonText && (
          <button className="btn btn-default btn-sm m-t-3" onClick={e => onClear(e)}>
            {csButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

CompleteStep.propTypes = {
  csButtonText: Types.string.isRequired,
  csSuccessText: Types.string.isRequired,
  csFailureText: Types.string.isRequired,
  fileName: Types.string.isRequired,
  isComplete: Types.bool.isRequired,
  isError: Types.bool.isRequired,
  isImage: Types.bool.isRequired,
  onClear: Types.func.isRequired,
  uploadedImage: Types.string,
};
CompleteStep.defaultProps = {
  uploadedImage: null,
};

export default CompleteStep;
