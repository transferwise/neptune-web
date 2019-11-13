export const postData = (httpOptions, data = {}) =>
  fetch(`${httpOptions.url}`, {
    ...httpOptions,
    body: data,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...httpOptions.headers,
    },
  })
    .then(response => {
      if (!response.ok) {
        const errorMessage = { status: response.status, statusText: response.statusText };
        throw errorMessage;
      }
      return response;
    })
    .catch(e => {
      throw e;
    });
