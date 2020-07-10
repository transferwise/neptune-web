import React, { Children } from 'react';
import Types from 'prop-types';

import './NavigationOptionsList.css';

export default function NavigationOptionList({ children }) {
  return (
    <ul className="tw-navigation-options-list">
      {Children.map(children, (child) => (
        <li className="tw-navigation-options-list__item" key={child.key}>
          {child}
        </li>
      ))}
    </ul>
  );
}

NavigationOptionList.propTypes = {
  children: Types.node.isRequired,
};
