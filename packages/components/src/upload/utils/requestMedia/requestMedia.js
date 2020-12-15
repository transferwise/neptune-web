export const requestMedia = (mediaRequest) =>
  new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || typeof window.microapps === 'undefined') {
      reject(`microapps must be available in window to use Spot Platform's Media API`);
    }

    window.microapps
      .requestMedia(mediaRequest)
      .then((response) => {
        const fileByteArray = base64ToByteArray(response.bytes);
        const blob = new Blob([fileByteArray], { type: response.mimeType });
        resolve(blob);
      })
      .catch((error) => reject(error));
  });

const base64ToByteArray = (base64String) => {
  const byteCharacters = atob(base64String);
  const byteCharactersLength = byteCharacters.length;
  const byteArray = new Array(byteCharactersLength);

  for (let i = 0; i < byteCharactersLength; i += 1) {
    byteArray[i] = byteCharacters.charCodeAt(i);
  }
  return new Uint8Array(byteArray);
};
