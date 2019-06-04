import React, { PureComponent } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import TopUpIcon from '@transferwise/icons/react/top-up';
import { UploadImageStep, ProcessingStep, CompleteStep } from './steps';
import { postData, asyncFileRead, isSizeValid, generateErrorMessage, isTypeValid } from './utils';
import './Upload.less';
import { processIndicatorStatuses } from '../processIndicator/ProcessIndicator';

const PROCESS_STATE = ['error', 'success'];
const ACCEPTED_FORMAT = ['*', 'image/*', 'application/*'];

/*
 * This delay is required for the isError/isSuccess to be fired after isProcessing so the processIndicator, will be
 * rendered first and then updated with the right status.
 */
const ANIMATION_FIX = 10;
const MAX_SIZE_DEFAULT = 5000000;

class Upload extends PureComponent {
  constructor(props) {
    super(props);
    this.dragCounter = 0;
    this.errorMessage = {
      413: props.csTooLargeMessage || null,
      415: props.csWrongTypeMessage || null,
      unknownError: props.csFailureText || null,
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
    this.dragCounter = this.dragCounter - 1;
    if (this.dragCounter === 0) {
      this.setState({ isDroppable: false });
    }
  }

  onDragEnter(e) {
    e.preventDefault();
    this.dragCounter = this.dragCounter + 1;
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

  onAnimationCompleted = async status => {
    const { response } = this.state;
    // Success.
    const { animationDelay } = this.props;
    if (status === processIndicatorStatuses[2]) {
      const { onSuccess } = this.props;
      this.timeouts = setTimeout(() => {
        this.setState(
          {
            isProcessing: false,
            isComplete: true,
          },
          onSuccess && onSuccess(response),
        );
      }, animationDelay);
    }
    // Failure.
    if (status === processIndicatorStatuses[1]) {
      const { onFailure } = this.props;
      this.timeouts = setTimeout(() => {
        this.setState(
          {
            errorMessage: generateErrorMessage(response.status, this.errorMessage),
            isProcessing: false,
            isComplete: true,
          },
          onFailure && onFailure(response),
        );
      }, animationDelay);
    }
  };

  asyncPost = file => {
    const formData = new FormData();
    formData.append(file.name, file);
    return postData(this.prepareHttpOptions(this.props.httpOptions), formData);
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

  prepareHttpOptions = httpOptions => {
    if (!httpOptions.url) {
      throw new Error('You must supply a URL to post image data asynchronously');
    }
    return httpOptions;
  };

  handleOnClear = e => {
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

  showDataImage = dataUrl => {
    const { isImage } = this.state;
    if (isImage) {
      this.setState({
        uploadedImage: dataUrl,
      });
    }
  };

  fileDropped = file => {
    const { httpOptions, maxSize, onStart, usDisabled, usAccept } = this.props;

    if (usDisabled) {
      return false;
    }

    if (!file) {
      throw new Error('Could not retrieve file');
    }

    if (onStart) {
      onStart(file);
    }

    this.setState({
      isImage: file.type && file.type.indexOf('image') > -1,
      fileName: file.name,
      isDroppable: false,
      isProcessing: true,
    });

    if (!isTypeValid(file, usAccept)) {
      const response = {
        status: 415,
        statusText: 'Unsupported Media Type',
      };
      return this.asyncResponse(response, PROCESS_STATE[0]);
    }

    if (!isSizeValid(file, maxSize)) {
      const response = {
        status: 413,
        statusText: 'Request Entity Too Large',
      };
      return this.asyncResponse(response, PROCESS_STATE[0]);
    }

    if (httpOptions) {
      // Post the file to provided endpoint
      return this.asyncPost(file)
        .then(response => this.asyncResponse(response, 'success'))
        .then(() => asyncFileRead(file))
        .then(response => this.showDataImage(response))
        .catch(error => this.asyncResponse(error, PROCESS_STATE[0]));
    }
    // Post on form submit. And return the encoded image.
    return asyncFileRead(file)
      .then(response => {
        this.showDataImage(response);
        this.asyncResponse(response, 'success');
      })
      .catch(error => this.asyncResponse(error, PROCESS_STATE[0]));
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
      psFailureText,
      psProcessingText,
      psSuccessText,
      csButtonText,
      csSuccessText,
      size,
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

    return (
      <div
        className={classNames({
          droppable: true,
          'droppable-sm': size === 'sm',
          'droppable-md': size === 'md' || !size,
          'droppable-lg': size === 'lg',
          'droppable-dropping': isDroppable,
          'droppable-processing': isProcessing,
          'droppable-complete': isComplete,
        })}
        onDragEnter={e => this.onDragEnter(e)}
        onDragLeave={e => this.onDragLeave(e)}
        onDrop={e => this.onDrop(e)}
        onDragOver={e => e.preventDefault()}
      >
        {!isProcessing &&
          !isComplete && (
            <UploadImageStep
              fileDropped={file => this.fileDropped(file)}
              isComplete={isComplete}
              usAccept={usAccept}
              usButtonText={usButtonText}
              usDisabled={usDisabled}
              usHelpImage={usHelpImage}
              usLabel={usLabel}
              usPlaceholder={usPlaceholder}
            />
          )}

        {isProcessing && (
          <ProcessingStep
            isComplete={isComplete}
            isError={isError}
            isProcessing={isProcessing}
            isSuccess={isSuccess}
            onAnimationCompleted={status => this.onAnimationCompleted(status)}
            onClear={e => this.handleOnClear(e)}
            psButtonText={psButtonText}
            psFailureText={psFailureText}
            psProcessingText={psProcessingText}
            psSuccessText={psSuccessText}
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
            onClear={e => this.handleOnClear(e)}
            csButtonText={csButtonText}
            csFailureText={errorMessage}
            csSuccessText={csSuccessText}
            uploadedImage={uploadedImage}
          />
        )}
        {!isProcessing && (
          <div className="droppable-dropping-card droppable-card">
            <div className="droppable-card-content">
              <div className="circle circle-sm p-t-1 text-info">
                <TopUpIcon />
              </div>
              {usDropMessage && <h4 className="m-t-3">{usDropMessage}</h4>}
            </div>
          </div>
        )}
      </div>
    );
  }
}

Upload.propTypes = {
  animationDelay: Types.number,
  csButtonText: Types.string,
  csFailureText: Types.string,
  csSuccessText: Types.string,
  csTooLargeMessage: Types.string,
  csWrongTypeMessage: Types.string,
  httpOptions: Types.shape({ url: Types.string }),
  maxSize: Types.number,
  onCancel: Types.func,
  onFailure: Types.func,
  onStart: Types.func,
  onSuccess: Types.func,
  psButtonText: Types.string,
  psFailureText: Types.string,
  psProcessingText: Types.string,
  psSuccessText: Types.string,
  size: Types.oneOf(['sm', 'md', 'lg']),
  usAccept: Types.oneOf(ACCEPTED_FORMAT),
  usButtonText: Types.string,
  usDisabled: Types.bool,
  usDropMessage: Types.string,
  usHelpImage: Types.string,
  usLabel: Types.string,
  usPlaceholder: Types.string,
};

Upload.defaultProps = {
  animationDelay: 700,
  csButtonText: 'Select other file?',
  csFailureText: 'Upload failed.Please, try again',
  csSuccessText: 'Upload complete!',
  csTooLargeMessage: 'Please provide a file smaller than 5MB',
  csWrongTypeMessage: 'Please provide a supported format',
  httpOptions: null,
  maxSize: MAX_SIZE_DEFAULT,
  onCancel: null,
  onFailure: null,
  onStart: null,
  onSuccess: null,
  psButtonText: 'Cancel',
  psFailureText: 'Upload failed.Please, try again',
  psProcessingText: 'Uploading...',
  psSuccessText: 'Upload complete!',
  size: 'md',
  usAccept: 'image/*',
  usButtonText: 'Or Select File',
  usDisabled: false,
  usDropMessage: 'Drop file to start upload',
  usHelpImage: '',
  usLabel: '',
  usPlaceholder: 'Drag and drop a file less than 5MB',
};

export default Upload;
