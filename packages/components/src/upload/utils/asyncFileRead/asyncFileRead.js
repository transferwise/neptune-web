export const asyncFileRead = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = event => {
      resolve(event.target.result);
    };
    reader.onerror = event => {
      reject(event);
    };
  });
