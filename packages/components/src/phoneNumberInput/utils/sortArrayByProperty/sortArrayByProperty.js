// Reference fro localeCompare : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
export const sortArrayByProperty = (arrayToSort, property) =>
  [...arrayToSort].sort((a, b) => a[property].localeCompare(b[property]));
