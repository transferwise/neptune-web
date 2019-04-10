export const postData = (httpOptions, data = {}) =>
  fetch(`${httpOptions.url}`, {
    ...httpOptions,
    body: data,
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
