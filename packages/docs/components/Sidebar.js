import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from './Link';

import getPages from '../utils/getPages';

const getLink = (pathname, sectionSlug) => {
  const pages = getPages().filter((page) => page.dir === sectionSlug);

  return pages.map(({ component }, index) => {
    const path = `/${sectionSlug}/${component.meta.name.replace(/[^A-Z0-9]+/gi, '')}`;
    const isSelected = pathname === path;

    return (
      <li key={index.toString()}>
        <Link href={path}>
          <a className={`Nav__Link ${isSelected ? 'active' : null}`}>
            {component.meta.name} {component.meta.isPlaceholder && '*'}
            {component.meta.isBeta && <span className="badge badge-success">beta</span>}
          </a>
        </Link>
      </li>
    );
  });
};

const Sidebar = ({ router: { pathname }, title, slug }) => (
  <div className="Sidebar__Fixed">
    <div className="Sidebar__Header">
      <h5 className="Sidebar__Title">{title}</h5>
    </div>
    <div className="Sidebar__Inner">
      <ul className="Nav">{getLink(pathname, slug)}</ul>
    </div>
  </div>
);

Sidebar.propTypes = {
  router: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default withRouter(Sidebar);
