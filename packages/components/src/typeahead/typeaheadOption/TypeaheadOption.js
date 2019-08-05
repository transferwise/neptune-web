/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import hightlight from '../util/highlight';
import './TypeaheadOption.less';

const Option = props => {
  const { option, selected, onClick, query } = props;
  const { label, note, secondary } = option;

  return (
    <li
      role="option"
      aria-selected="false"
      className={classNames('typeahead__option tw-dropdown-item tw-dropdown-item--clickable', {
        'tw-dropdown-item--focused': selected,
      })}
    >
      <a className="dropdown-item" href="#" onClick={onClick}>
        <span>{hightlight(label, query)}</span>
        {note && <span className="small m-l-1">{note}</span>}
        {secondary && <span className="small text-ellipsis">{secondary}</span>}
      </a>
    </li>
  );
};

Option.propTypes = {
  option: Types.shape({
    label: Types.string.isRequired,
    note: Types.string,
    secondary: Types.string,
  }).isRequired,
  query: Types.string,
  selected: Types.bool,
  onClick: Types.func,
};

Option.defaultProps = {
  selected: false,
  query: '',
  onClick: () => {},
};

export default Option;
