import { isArray } from '@transferwise/neptune-validation';
/**
 * Checks if query is contained into object properties.
 * @param {object} option - the select option
 * @param {string} query - the current search query
 * @returns {boolean}
 */
export const isOptionAndFitsQuery = (option, query) =>
  startsWith(option.iso3, query) ||
  startsWith(option.iso2, query) ||
  startsWith(option.name, query) ||
  startsWith(option.phone, query);

export const startsWith = (property, query) => {
  if (isArray(property)) {
    return (
      property.filter((proper) => normalizeValue(proper).indexOf(normalizeValue(query)) === 0)
        .length > 0
    );
  }
  return normalizeValue(property).indexOf(normalizeValue(query)) === 0;
};

const normalizeValue = (value) => value.toLowerCase().replace('+', '');
