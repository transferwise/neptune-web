import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { formatDate, formatNumber } from '@transferwise/formatting';
import { formatUsingPattern } from './utils/text-format';

import './DefinitionListItem.css';

/**
 *
 * @param {Array} options
 * @param {string|number} value
 */
const getValueLabel = (options, value) => {
  const option = options.find(currentOption => currentOption.value === value);
  return option && option.label ? option.label : value;
};

/**
 *
 * @param {string} value
 */
const mask = value => new Array(value.length + 1).join('*');

const DefinitionListItem = ({ field, value, locale }) => {
  const style = [];
  if (field.tagClassName && field.tagClassName.h3) {
    style.push('h3');
    style.push('definition-list-item__h3-custom-alignment');
  }

  switch (field.control) {
    case 'select':
    case 'radio':
      return <span>{getValueLabel(field.values, value)}</span>;
    case 'date':
      return <span>{formatDate(value instanceof Date ? value : new Date(value), locale)}</span>;
    case 'number':
      return <span>{formatNumber(value, locale)}</span>;
    case 'password':
      return <span>{mask(value)}</span>;
    case 'file':
      return (
        <div className="thumbnail">
          <img alt={field.title} src={value} />
        </div>
      );
    case 'checkbox':
      return <span>{JSON.stringify(value)}</span>;
    default:
      return (
        <span className={classNames(style)}>{formatUsingPattern(value, field.displayFormat)}</span>
      );
  }
};

DefinitionListItem.propTypes = {
  field: Types.shape({
    control: Types.string.isRequired,
    displayFormat: Types.string,
    refreshRequirementsOnChange: Types.bool,
    title: Types.string.isRequired,
    type: Types.string.isRequired,
    width: Types.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: Types.any.isRequired,
  locale: Types.string,
};

DefinitionListItem.defaultProps = {
  locale: 'en-GB',
};

export default DefinitionListItem;
