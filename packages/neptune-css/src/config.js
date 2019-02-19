const getValue = key =>
  typeof window !== "undefined" &&
  window.config &&
  Object.hasOwnProperty.call(window.config, key)
    ? window.config[key]
    : null;

export { getValue };
