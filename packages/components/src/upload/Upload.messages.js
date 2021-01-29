import { defineMessages } from 'react-intl';

export default defineMessages({
  csButtonText: {
    id: 'neptune.Upload.csButtonText',
    defaultMessage: 'Upload another file?',
  },
  csFailureText: {
    id: 'neptune.Upload.csFailureText',
    defaultMessage: 'Upload failed. Please, try again',
  },
  csSuccessText: {
    id: 'neptune.Upload.csSuccessText',
    defaultMessage: 'Upload complete!',
  },
  csTooLargeMessage: {
    id: 'neptune.Upload.csTooLargeMessage',
    defaultMessage: 'Please provide a file smaller than 5MB',
  },
  csWrongTypeMessage: {
    id: 'neptune.Upload.csWrongTypeMessage',
    defaultMessage: 'File type not supported. Please try again with a different file',
  },
  psButtonText: {
    id: 'neptune.Upload.psButtonText',
    defaultMessage: 'Cancel',
  },
  psProcessingText: {
    id: 'neptune.Upload.psProcessingText',
    defaultMessage: 'Uploading...',
  },
  usButtonText: {
    id: 'neptune.Upload.usButtonText',
    defaultMessage: 'Or select a file',
  },
  usDropMessage: {
    id: 'neptune.Upload.usDropMessage',
    defaultMessage: 'Drop file to start upload',
  },
  usPlaceholder: {
    id: 'neptune.Upload.usPlaceholder',
    defaultMessage: 'Drag and drop a file less than 5MB',
  },
});
