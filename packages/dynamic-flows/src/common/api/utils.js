export function isStatus2xx(status) {
  return status >= 200 && status < 300;
}

export function isStatus422(status) {
  return status === 422;
}

export function QueryablePromise(promise) {
  if (promise.isResolved) {
    return promise;
  }

  let isPending = true;
  let isRejected = false;
  let isFulfilled = false;

  const result = promise.then(
    (value) => {
      isFulfilled = true;
      isPending = false;
      return value;
    },
    (exception) => {
      isRejected = true;
      isPending = false;
      throw exception;
    },
  );

  result.isFulfilled = () => {
    return isFulfilled;
  };

  result.isPending = () => {
    return isPending;
  };

  result.isRejected = () => {
    return isRejected;
  };

  return result;
}
