export function logActionRequired(message) {
  if (['development', 'test'].indexOf(process?.env?.NODE_ENV) >= 0) {
    // eslint-disable-next-line
    console.warn(message);
  }
}

export function logActionRequiredIf(message, conditional) {
  if (conditional) {
    logActionRequired(message);
  }
}
