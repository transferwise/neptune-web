export const generateErrorMessage = (type, errorMessages = {}) => {
  let errorMessage = '';
  switch (type) {
    case 413:
      errorMessage = errorMessages[413] || 'Please provide a smaller file';
      break;
    case 415:
      errorMessage = errorMessages[415] || 'Please provide a supported format';
      break;
    case 404:
      errorMessage = errorMessages[404] || 'Bad URL';
      break;
    default:
      errorMessage = errorMessages.unknownError || 'Unknown error';
      break;
  }
  return errorMessage;
};
