export const postData = (httpOptions, data = {}) =>
  fetch(`${httpOptions.url}`, {
    method: 'POST',
    body: data,
    ...httpOptions,
  })
    .then((response) => {
      if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        error.response = response;
        throw error;
      }
      return response;
    })
    .catch((e) => {
      throw e;
    });
