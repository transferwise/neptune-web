// Spot Platform's Media API only support these MIME types
const SUPPORTED_MIME_TYPES = ['image/jpeg', 'video/*', 'application/pdf'];

export const getSupportedSpotMimeTypes = (mimeTypes) => {
  if (mimeTypes === '*') {
    return SUPPORTED_MIME_TYPES;
  }

  const mimeTypesArray = mimeTypes.split(',');
  const mimeMapping = {
    'image/*': 'image/jpeg',
    'application/*': 'application/pdf',
  };

  const mapSupportedMimeTypes = mimeTypesArray.map((type) => mimeMapping[type] || type);

  const supportedMimeTypes = mapSupportedMimeTypes.filter(
    (type) => SUPPORTED_MIME_TYPES.indexOf(type) > -1,
  );

  return supportedMimeTypes;
};
