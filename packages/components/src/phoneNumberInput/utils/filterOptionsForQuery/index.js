import { isOptionAndFitsQuery } from '../isOptionAndFitsQuery';

/**
 * Filters a set of options based on search string
 * @param options
 * @param query
 * @returns {*}
 */
export const filterOptionsForQuery = (options, query) =>
  options.filter(option => isOptionAndFitsQuery(option, query));
