import React, { PureComponent } from 'react';
import { injectIntl } from 'react-intl';
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

class Upload extends PureComponent {
  constructor(props) {
    super(props);
    this.formatMessage = this.props.intl.formatMessage;
    this.dragCounter = 0;
    this.errorMessage = {
      413: props.csTooLargeMessage || this.formatMessage(messages.csTooLargeMessage),
      415: props.csWrongTypeMessage || this.formatMessage(messages.csWrongTypeMessage),
      unknownError: props.csFailureText || this.formatMessage(messages.csFailureText),
    };
    this.timeouts = null;

    this.state = {
      errorMessage: '',
      fileName: '',
      isComplete: false,
      isError: false,
      isImage: false,
      isProcessing: false,
      isSuccess: false,
      response: null,
      uploadedImage: null,
    };
  }

  onDragLeave(e) {
    e.preventDefault();
    this.dragCounter -= 1;
    if (this.dragCounter === 0) {
      this.setState({ isDroppable: false });
    }
  }

  onDragEnter(e) {
    e.preventDefault();
    this.dragCounter += 1;
    const { usDisabled } = this.props;
    if (this.dragCounter === 1 && !usDisabled) {
      this.setState({ isDroppable: true });
    }
  }

  onDrop(e) {
    e.preventDefault();
    this.reset();
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
      this.fileDropped(e.dataTransfer.files[0]);
    }
  }

  onAnimationCompleted = async (status) => {
    const { response, isProcessing, fileName } = this.state;
    // Success.
    const { animationDelay } = this.props;
    if (isProcessing && status === ProcessIndicator.Status.SUCCEEDED) {
      const { onSuccess } = this.props;
      this.timeouts = setTimeout(() => {
        this.setState(
          {
            isProcessing: false,
            isComplete: true,
          },
          () => (onSuccess ? onSuccess(response, fileName) : {}),
        );
      }, animationDelay);
    }
    // Failure.
    if (isProcessing && status === ProcessIndicator.Status.FAILED) {
      const { onFailure } = this.props;
      this.timeouts = setTimeout(() => {
        this.setState(
          {
            errorMessage: generateErrorMessage(response.status, this.errorMessage),
            isProcessing: false,
            isComplete: true,
          },
          () => (onFailure ? onFailure(response) : {}),
        );
      }, animationDelay);
    }
  };

  asyncPost = (file) => {
    const { httpOptions } = this.props;
    const { fileInputName = file.name, data = {} } = httpOptions || {};

    const formData = new FormData();
    formData.append(fileInputName, file);
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    return postData(this.prepareHttpOptions(httpOptions), formData);
  };

  asyncResponse = (response, type) => {
    // Gives time to the animation callback to fire.
    this.timeouts = setTimeout(() => {
      this.setState({
        response,
        isError: type === PROCESS_STATE[0],
        isSuccess: type === PROCESS_STATE[1],
      });
    }, ANIMATION_FIX);
  };

  prepareHttpOptions = (httpOptions) => {
    if (!httpOptions.url) {
      throw new Error('You must supply a URL to post image data asynchronously');
    }
    return httpOptions;
  };

  handleOnClear = (e) => {
    e.preventDefault();
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }

    this.reset();
  };

  reset = () => {
    this.dragCounter = 0;
    clearTimeout(this.timeouts);
    this.setState({
      isComplete: false,
      isError: false,
      isProcessing: false,
      isSuccess: false,
    });
  };

  showDataImage = (dataUrl) => {
    const { isImage } = this.state;
    if (isImage) {
      this.setState({
        uploadedImage: dataUrl,
      });
    }
  };

  fileDropped = async (file) => {
    const { httpOptions, maxSize, onStart, usDisabled, usAccept } = this.props;

    if (usDisabled) {
      return false;
    }

    if (!file) {
      throw new Error('Could not retrieve file');
    }

    this.setState({
      fileName: file.name,
      isDroppable: false,
      isProcessing: true,
    });

    if (onStart) {
      onStart(file);
    }

    let file64 = null;

    try {
      file64 = await asyncFileRead(file);
    } catch (e) {
      this.asyncResponse(e, PROCESS_STATE[0]);
    }

    if (!file64) {
      return false;
    }

    this.setState({
      isImage: getFileType(file, file64).indexOf('image') > -1,
    });

    if (!isTypeValid(file, usAccept, file64)) {
      const response = {
        status: 415,
        statusText: 'Unsupported Media Type',
      };
      this.asyncResponse(response, PROCESS_STATE[0]);
      return false;
    }

    if (!isSizeValid(file, maxSize)) {
      const response = {
        status: 413,
        statusText: 'Request Entity Too Large',
      };
      this.asyncResponse(response, PROCESS_STATE[0]);
      return false;
    }

    if (httpOptions) {
      // Post the file to provided endpoint
      this.asyncPost(file)
        .then((response) => this.asyncResponse(response, 'success'))
        .then(() => {
          this.showDataImage(file64);
          return true;
        })
        .catch((error) => {
          this.asyncResponse(error, PROCESS_STATE[0]);
          return false;
        });
    }
    // Post on form submit. And return the encoded image.
    this.showDataImage(file64);
    this.asyncResponse(file64, 'success');
    return true;
  };

  render() {
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
    } = this.props;

    const {
      errorMessage,
      fileName,
      isComplete,
      isDroppable,
      isError,
      isImage,
      isProcessing,
      isSuccess,
      uploadedImage,
    } = this.state;

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
        onDragEnter={(e) => this.onDragEnter(e)}
        onDragLeave={(e) => this.onDragLeave(e)}
        onDrop={(e) => this.onDrop(e)}
        onDragOver={(e) => e.preventDefault()}
      >
        {!isProcessing && !isComplete && (
          <UploadStepComponent
            fileDropped={(file) => this.fileDropped(file)}
            isComplete={isComplete}
            usAccept={usAccept}
            usButtonText={usButtonText || this.formatMessage(messages.usButtonText)}
            usDisabled={usDisabled}
            usHelpImage={usHelpImage}
            usLabel={usLabel}
            usPlaceholder={usPlaceholder || this.formatMessage(messages.usPlaceholder)}
          />
        )}

        {isProcessing && (
          <ProcessingStep
            isComplete={isComplete}
            isError={isError}
            isSuccess={isSuccess}
            onAnimationCompleted={(status) => this.onAnimationCompleted(status)}
            onClear={(e) => this.handleOnClear(e)}
            psButtonText={psButtonText || this.formatMessage(messages.psButtonText)}
            psProcessingText={psProcessingText || this.formatMessage(messages.psProcessingText)}
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
            onClear={(e) => this.handleOnClear(e)}
            csButtonText={csButtonText || this.formatMessage(messages.csButtonText)}
            csFailureText={errorMessage}
            csSuccessText={csSuccessText || this.formatMessage(messages.csSuccessText)}
            uploadedImage={uploadedImage}
          />
        )}
        {!isProcessing && (
          <div className="droppable-dropping-card droppable-card">
            <div className="droppable-card-content">
              <div className="circle circle-sm p-t-1 text-info">
                <PlusIcon />
              </div>
              <h4 className="m-t-3">
                {usDropMessage || this.formatMessage(messages.usDropMessage)}
              </h4>
            </div>
          </div>
        )}
      </div>
    );
  }
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
  csButtonText: undefined,
  csFailureText: undefined,
  csSuccessText: undefined,
  csTooLargeMessage: undefined,
  csWrongTypeMessage: undefined,
  httpOptions: null,
  maxSize: MAX_SIZE_DEFAULT,
  onCancel: null,
  onFailure: null,
  onStart: null,
  onSuccess: null,
  psButtonText: undefined,
  psProcessingText: undefined,
  size: 'md',
  usAccept: 'image/*',
  usButtonText: undefined,
  usDisabled: false,
  usDropMessage: undefined,
  usHelpImage: '',
  usLabel: '',
  usPlaceholder: undefined,
  uploadStep: Upload.UploadStep.UPLOAD_IMAGE_STEP,
};

Upload.CompleteStep = CompleteStep;

export default injectIntl(Upload);
