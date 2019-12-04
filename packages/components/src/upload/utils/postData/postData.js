export const postData = (httpOptions, data = {}) =>
  fetch(`${httpOptions.url}`, {
    ...httpOptions,
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...httpOptions.headers,
    },
  })
    .then(response => {
      if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        error.response = response;
        throw error;
      }
      return response;
    })
    .catch(e => {
      throw e;
    });
