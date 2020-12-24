import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import Types from 'prop-types';
import classNames from 'classnames';
import { Plus as PlusIcon } from '@transferwise/icons';
import { UploadImageStep, MediaUploadStep, ProcessingStep, CompleteStep } from './steps';
import {
  postData,
  asyncFileRead,
  isSizeValid,
  generateErrorMessage,
  isTypeValid,
  getFileType,
} from './utils';
import './Upload.css';
import ProcessIndicator from '../processIndicator';
import messages from './Upload.messages';

const PROCESS_STATE = ['error', 'success'];
const ACCEPTED_FORMAT = ['*', 'image/*', 'application/*', 'text/csv'];

/*
 * This delay is required for the isError/isSuccess to be fired after isProcessing so the processIndicator, will be
 * rendered first and then updated with the right status.
 */
const ANIMATION_FIX = 10;
const MAX_SIZE_DEFAULT = 5000000;
const UPLOAD_STEPS = {
  UPLOAD_IMAGE_STEP: 'uploadImageStep',
  MEDIA_UPLOAD_STEP: 'mediaUploadStep',
};
const UPLOAD_STEP_COMPONENTS = {
  [UPLOAD_STEPS.UPLOAD_IMAGE_STEP]: UploadImageStep,
  [UPLOAD_STEPS.MEDIA_UPLOAD_STEP]: MediaUploadStep,
};

function Upload(props) {
  let dragCounter = 0;
  let timeouts = null;
  const errorMessages = {
    413: props.csTooLargeMessage || intl.formatMessage(messages.csTooLargeMessage),
    415: props.csWrongTypeMessage || intl.formatMessage(messages.csWrongTypeMessage),
    unknownError: props.csFailureText || intl.formatMessage(messages.csFailureText),
  };

  const intl = useIntl();
  const [errorMessage, setErrorMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [response, setResponse] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isDroppable, setIsDroppable] = useState(false);

  function onDragLeave(e) {
    e.preventDefault();
    dragCounter -= 1;
    if (dragCounter === 0) {
      setIsDroppable(false);
    }
  }

  function onDragEnter(e) {
    e.preventDefault();
    dragCounter += 1;
    const { usDisabled } = props;
    if (dragCounter === 1 && !usDisabled) {
      setIsDroppable(true);
    }
  }

  function onDrop(e) {
    e.preventDefault();
    reset();
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
      fileDropped(e.dataTransfer.files[0]);
    }
  }

  async function onAnimationCompleted(status) {
    const { animationDelay } = props;
    const isFailed = status === ProcessIndicator.Status.FAILED;
    if (isProcessing && (status === ProcessIndicator.Status.SUCCEEDED || isFailed)) {
      timeouts = setTimeout(() => {
        setIsProcessing(false);
        setIsComplete(true);
        if (isFailed) {
          setErrorMessage(generateErrorMessage(response.status, errorMessages));
        }
      }, animationDelay);
    }
  }

  useEffect(() => {
    if (errorMessage) {
      if (props.onFailure) {
        props.onFailure(response);
      }
    } else if (props.onSuccess) {
      props.onSuccess(response, fileName);
    }
  }, [errorMessage]);

  function asyncPost(file) {
    const { httpOptions } = props;
    const { fileInputName = file.name, data = {} } = httpOptions || {};

    const formData = new FormData();
    formData.append(fileInputName, file);
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    return postData(prepareHttpOptions(httpOptions), formData);
  }

  function asyncResponse(res, type) {
    // Gives time to the animation callback to fire.
    timeouts = setTimeout(() => {
      setResponse(res);
      setIsError(type === PROCESS_STATE[0]);
      setIsSuccess(type === PROCESS_STATE[1]);
    }, ANIMATION_FIX);
  }

  function prepareHttpOptions(httpOptions) {
    if (!httpOptions.url) {
      throw new Error('You must supply a URL to post image data asynchronously');
    }
    return httpOptions;
  }

  function handleOnClear(e) {
    e.preventDefault();
    const { onCancel } = props;
    if (onCancel) {
      onCancel();
    }
    reset();
  }

  function reset() {
    dragCounter = 0;
    clearTimeout(timeouts);
    setIsComplete(false);
    setIsError(false);
    setIsProcessing(false);
    setIsSuccess(false);
  }

  function showDataImage(dataUrl) {
    if (isImage) {
      setUploadedImage(dataUrl);
    }
  }

  async function fileDropped(file) {
    if (props.usDisabled) {
      return false;
    }

    if (!file) {
      throw new Error('Could not retrieve file');
    }

    setFileName(file.name);
    setIsDroppable(false);
    setIsProcessing(true);

    if (props.onStart) {
      props.onStart(file);
    }

    let file64 = null;

    try {
      file64 = await asyncFileRead(file);
    } catch (e) {
      asyncResponse(e, PROCESS_STATE[0]);
    }

    if (!file64) {
      return false;
    }

    setIsImage(getFileType(file, file64).indexOf('image') > -1);

    if (!isTypeValid(file, usAccept, file64)) {
      asyncResponse(
        {
          status: 415,
          statusText: 'Unsupported Media Type',
        },
        PROCESS_STATE[0],
      );
      return false;
    }

    if (!isSizeValid(file, props.maxSize)) {
      asyncResponse(
        {
          status: 413,
          statusText: 'Request Entity Too Large',
        },
        PROCESS_STATE[0],
      );
      return false;
    }

    if (props.httpOptions) {
      // Post the file to provided endpoint
      asyncPost(file)
        .then((res) => asyncResponse(res, 'success'))
        .then(() => {
          showDataImage(file64);
          return true;
        })
        .catch((error) => {
          asyncResponse(error, PROCESS_STATE[0]);
          return false;
        });
    }
    // Post on form submit. And return the encoded image.
    showDataImage(file64);
    asyncResponse(file64, 'success');
    return true;
  }

  const {
    usDropMessage,
    usAccept,
    usButtonText,
    usDisabled,
    usHelpImage,
    usLabel,
    usPlaceholder,
    psButtonText,
    psProcessingText,
    csButtonText,
    csSuccessText,
    size,
    uploadStep,
  } = props;

  const UploadStepComponent = UPLOAD_STEP_COMPONENTS[uploadStep] || UploadImageStep;

  return (
    <div
      className={classNames({
        droppable: true,
        'tw-droppable-sm droppable-sm': size === 'sm',
        'tw-droppable-md droppable-md': size === 'md' || !size,
        'tw-droppable-lg droppable-lg': size === 'lg',
        'droppable-dropping': isDroppable,
        'droppable-processing': isProcessing,
        'droppable-complete': isComplete,
      })}
      onDragEnter={(e) => onDragEnter(e)}
      onDragLeave={(e) => onDragLeave(e)}
      onDrop={(e) => onDrop(e)}
      onDragOver={(e) => e.preventDefault()}
    >
      {!isProcessing && !isComplete && (
        <UploadStepComponent
          fileDropped={(file) => fileDropped(file)}
          isComplete={isComplete}
          usAccept={usAccept}
          usButtonText={usButtonText || intl.formatMessage(messages.usButtonText)}
          usDisabled={usDisabled}
          usHelpImage={usHelpImage}
          usLabel={usLabel}
          usPlaceholder={usPlaceholder || intl.formatMessage(messages.usPlaceholder)}
        />
      )}

      {isProcessing && (
        <ProcessingStep
          isComplete={isComplete}
          isError={isError}
          isSuccess={isSuccess}
          onAnimationCompleted={(status) => onAnimationCompleted(status)}
          onClear={(e) => handleOnClear(e)}
          psButtonText={psButtonText || intl.formatMessage(messages.psButtonText)}
          psProcessingText={psProcessingText || intl.formatMessage(messages.psProcessingText)}
        />
      )}
      {/* Starts render the step when isSuccess or isError are true so markup is there when css transition kicks in
        css transition to work properly */}
      {(isSuccess || isError || isComplete) && (
        <CompleteStep
          fileName={fileName}
          isComplete={isComplete}
          isError={isError}
          isImage={isImage}
          onClear={(e) => handleOnClear(e)}
          csButtonText={csButtonText || intl.formatMessage(messages.csButtonText)}
          csFailureText={errorMessage}
          csSuccessText={csSuccessText || intl.formatMessage(messages.csSuccessText)}
          uploadedImage={uploadedImage}
        />
      )}
      {!isProcessing && (
        <div className="droppable-dropping-card droppable-card">
          <div className="droppable-card-content">
            <div className="circle circle-sm p-t-1 text-info">
              <PlusIcon />
            </div>
            <h4 className="m-t-3">{usDropMessage || intl.formatMessage(messages.usDropMessage)}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

Upload.UploadStep = UPLOAD_STEPS;

Upload.propTypes = {
  animationDelay: Types.number,
  csButtonText: Types.string,
  csFailureText: Types.string,
  csSuccessText: Types.string,
  csTooLargeMessage: Types.string,
  csWrongTypeMessage: Types.string,
  httpOptions: Types.shape({
    url: Types.string.isRequired,
    method: Types.oneOf(['POST', 'PUT', 'PATCH']),
    fileInputName: Types.string,
    // eslint-disable-next-line react/forbid-prop-types
    data: Types.object,
    // eslint-disable-next-line react/forbid-prop-types
    headers: Types.object,
  }),
  maxSize: Types.number,
  onCancel: Types.func,
  onFailure: Types.func,
  onStart: Types.func,
  onSuccess: Types.func,
  psButtonText: Types.string,
  psProcessingText: Types.string,
  size: Types.oneOf(['sm', 'md', 'lg']),
  usAccept: Types.oneOf(ACCEPTED_FORMAT),
  usButtonText: Types.string,
  usDisabled: Types.bool,
  usDropMessage: Types.string,
  usHelpImage: Types.node,
  usLabel: Types.string,
  usPlaceholder: Types.string,
  uploadStep: Types.oneOf([
    Upload.UploadStep.UPLOAD_IMAGE_STEP,
    Upload.UploadStep.MEDIA_UPLOAD_STEP,
  ]),
};

Upload.defaultProps = {
  animationDelay: 700,
  csButtonText: null,
  csFailureText: null,
  csSuccessText: null,
  csTooLargeMessage: null,
  csWrongTypeMessage: null,
  httpOptions: null,
  maxSize: MAX_SIZE_DEFAULT,
  onCancel: null,
  onFailure: null,
  onStart: null,
  onSuccess: null,
  psButtonText: null,
  psProcessingText: null,
  size: 'md',
  usAccept: 'image/*',
  usButtonText: null,
  usDisabled: false,
  usDropMessage: null,
  usHelpImage: '',
  usLabel: '',
  usPlaceholder: null,
  uploadStep: Upload.UploadStep.UPLOAD_IMAGE_STEP,
};

Upload.CompleteStep = CompleteStep;

export default Upload;
