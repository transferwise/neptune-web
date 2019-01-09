/**
 * Checks if query is contained into object properties.
 * @param {object} option - the select option
 * @param {string} query - the current search query
 * @returns {boolean}
 */
export const isOptionAndFitsQuery = (option, query) =>
  contains(option.iso3, query) ||
  contains(option.iso2, query) ||
  contains(option.note, query) ||
  contains(option.name, query);

export const contains = (property, query) =>
  property && property.toLowerCase().indexOf(query.toLowerCase()) !== -1;
