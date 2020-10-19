export const getFileType = (file, file64) => {
  if (!file && !file64) {
    return null;
  }

  if (file && file.type && file.type !== '') {
    return file.type;
  }

  if (file64) {
    const regex = /^data:([a-z]+\/[a-z]+);/;
    const typeFromEncoded = file64.match(regex);

    if (typeFromEncoded && typeFromEncoded[1]) {
      return typeFromEncoded[1];
    }
  }
  return null;
};
