import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from './Link';

import { getPagesInSection } from '../utils/pageUtils';

const getLinks = ({ pathname, section }) => {
  return getPagesInSection(section).map(({ group, component, path }, index) => {
    const key = index.toString();
    if (group) {
      return (
        <li className="Nav__Group" key={key}>
          {group}
        </li>
      );
    }
    const isSelected = pathname === path;

    return (
      <li key={key}>
        <Link href={path}>
          <a className={`Nav__Link ${isSelected ? 'active' : ''}`}>
            {component.meta.linkText || component.meta.name} {component.meta.isPlaceholder && '*'}
            {component.meta.isBeta && <span className="badge badge-success">beta</span>}
          </a>
        </Link>
      </li>
    );
  });
};

const Sidebar = ({ router: { pathname }, section }) => (
  <div className="Sidebar__Fixed" role="navigation" aria-label="Secondary navigation">
    <div className="Sidebar__Header">
      <h5 className="Sidebar__Title">{section.title}</h5>
    </div>
    <div className="Sidebar__Inner">
      <ul className="Nav">{getLinks({ pathname, section })}</ul>
    </div>
  </div>
);

Sidebar.propTypes = {
  router: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(
      PropTypes.shape({ title: PropTypes.string.isRequired, dir: PropTypes.string.isRequired }),
    ),
  }).isRequired,
};

export default withRouter(Sidebar);
