import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Upload as UploadIcon } from '@transferwise/icons';

import { getSupportedSpotMimeTypes, requestMedia } from '../../utils';

const MediaUploadStep = ({
  isComplete,
  usAccept,
  usButtonText,
  usDisabled,
  usHelpImage,
  usLabel,
  usPlaceholder,
  fileDropped,
}) => {
  const getMediaFile = () => {
    const allowedMimeTypes = getSupportedSpotMimeTypes(usAccept);

    if (allowedMimeTypes.length === 0) {
      throw new Error('provided mimeTypes not supported');
    }

    const mediaRequest = { allowedMimeTypes };
    requestMedia(mediaRequest).then((file) => fileDropped(file));
  };

  const getImage = () => {
    if (!usHelpImage) {
      return (
        <div className="circle circle-sm circle-inverse p-t-1">
          <UploadIcon size={24} />
        </div>
      );
    }

    if (typeof usHelpImage === 'string') {
      return <img src={usHelpImage} alt={usLabel} className="thumbnail text-xs-center" />;
    }

    return usHelpImage;
  };

  return (
    <div>
      <div className="droppable-default-card" aria-hidden={isComplete}>
        <div className="droppable-card-content">
          <div className="m-b-3">{getImage()}</div>
          {usLabel && <h4 className="m-b-1">{usLabel}</h4>}
          {usPlaceholder && <p className="m-b-3">{`${usPlaceholder}`}</p>}
          <button
            type="button"
            className={classNames('btn btn-primary btn-sm', { disabled: usDisabled })}
            disabled={usDisabled}
            onClick={getMediaFile}
          >
            {usButtonText || <UploadIcon size={24} className="m-r-0" />}
          </button>
        </div>
      </div>
    </div>
  );
};

MediaUploadStep.propTypes = {
  fileDropped: Types.func.isRequired,
  isComplete: Types.bool.isRequired,
  usAccept: Types.string.isRequired,
  usButtonText: Types.string.isRequired,
  usDisabled: Types.bool.isRequired,
  usHelpImage: Types.node.isRequired,
  usLabel: Types.string.isRequired,
  usPlaceholder: Types.string.isRequired,
};

export default MediaUploadStep;
