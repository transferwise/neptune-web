import React from 'react';
import Types from 'prop-types';
import { AlertCircle as AlertCircleIcon, Document as DocumentIcon } from '@transferwise/icons';

const CompleteStep = (props) => {
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
            <>
              <AlertCircleIcon size={24} className="text-danger" />
              {csFailureText && <p className="m-t-2">{csFailureText}</p>}
            </>
          ) : (
            <>
              {isImage && uploadedImage ? (
                <img src={uploadedImage} alt="OK" className="thumbnail " />
              ) : (
                <DocumentIcon />
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
            </>
          )}
        </div>
        {csButtonText && (
          <button
            type="button"
            className="btn btn-default btn-sm m-t-3"
            onClick={(e) => onClear(e)}
          >
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
