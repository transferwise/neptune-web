import React, { PureComponent } from 'react';
import Types from 'prop-types';
import Upload from '@transferwise/icons/react/upload';

class UploadImageStep extends PureComponent {
  static propTypes = {
    fileDropped: Types.func.isRequired,
    isComplete: Types.bool.isRequired,
    usAccept: Types.string.isRequired,
    usButtonText: Types.string.isRequired,
    usDisabled: Types.bool.isRequired,
    usHelpImage: Types.string.isRequired,
    usLabel: Types.string.isRequired,
    usPlaceholder: Types.string.isRequired,
  };

  constructor() {
    super();
    this.uploadInputRef = React.createRef();
  }

  onManualUpload = () => {
    const { fileDropped } = this.props;
    if (this.uploadInputRef && this.uploadInputRef.current) {
      const file = this.uploadInputRef.current.files[0];
      fileDropped(file);
    }
  };

  render() {
    const {
      isComplete,
      usAccept,
      usButtonText,
      usDisabled,
      usHelpImage,
      usLabel,
      usPlaceholder,
    } = this.props;

    return (
      <div>
        <div className="droppable-default-card" aria-hidden={isComplete}>
          <div className="droppable-card-content">
            <div className="m-b-3">
              {usHelpImage && (
                <img src={usHelpImage} alt={usLabel} className="thumbnail text-xs-center" />
              )}
              {!usHelpImage && (
                <div className="circle circle-sm circle-inverse p-t-1">
                  <Upload size="md" />
                </div>
              )}
            </div>
            {usLabel && <h4 className="m-b-1">{usLabel}</h4>}
            {usPlaceholder && <p className="m-b-3">{`${usPlaceholder}`}</p>}
            <label className={`btn btn-primary btn-sm ${usDisabled ? 'disabled' : ''}`}>
              {usButtonText ? (
                <span>{usButtonText}</span>
              ) : (
                <span className="icon icon-upload m-r-0" />
              )}
              <input
                type="file"
                accept={usAccept === '*' ? null : usAccept}
                className="tw-droppable-input hidden"
                disabled={usDisabled}
                name="file-upload"
                onChange={() => this.onManualUpload()}
                ref={this.uploadInputRef}
                value=""
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadImageStep;
