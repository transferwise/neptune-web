import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import getConfig from 'next/config';

import Sidebar from './Sidebar';
import getBasePath from './getBasePath';
import GitHubLink from './GitHubLink';
import Logo from '../static/assets/img/logo_full_inverse.svg';
import getPages from './getPages';

const { pageMap } = getConfig().publicRuntimeConfig;

const editBaseURL = `https://github.com/transferwise/neptune-docs/edit/master/pages`;
const pages = getPages();

const Layout = ({ children, router: { pathname } }) => {
  const filename = pageMap[pathname];

  if (!filename) {
    // eslint-disable-next-line no-console
    console.warn(`pathname "${pathname}" doesn't exist in pageMap`);
  }

  const isIndex = pathname === '/';
  const dir = pathname.split('/')[1];
  const slug = isIndex ? 'index' : pathname.split('/').pop();

  const sections = [
    { title: 'Getting started', dir: '' },
    { title: 'Foundations', dir: 'foundations' },
    { title: 'Components', dir: 'components' },
    { title: 'Assets', dir: 'assets' },
    { title: 'Brand', dir: 'brand' },
    { title: 'Copy', dir: 'copy' },
    { title: 'Layout', dir: 'layout' },
    { title: 'Utilities', dir: 'utilities' },
  ];

  const page = pages.find(p => {
    return p.dir === dir && p.slug === slug;
  });

  return (
    <div id="top" className="PageLayout">
      <header className="Header">
        <div className="Header__Fixed">
          <a className="Logo" href={getBasePath('/')}>
            <Logo />
          </a>

          <div className="Header__Inner">
            <ul className="Nav Nav--dark">
              {sections.map(section => (
                <li key={section.title}>
                  <a
                    className={`Nav__Link ${dir === section.dir ? 'active' : null}`}
                    href={getBasePath(
                      section.dir === ''
                        ? '/'
                        : `/${section.dir}/${pages.find(p => p.dir === section.dir).slug}`,
                    )}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {isIndex && (
        <div className="PageLayout__Inner PageLayout__Inner--nosidebar">
          <div className="Content">
            <div className="Content__Inner">{children}</div>

            {filename && <GitHubLink url={`${editBaseURL}${filename}`} />}
          </div>
        </div>
      )}

      {page && (
        <div className="PageLayout__Inner">
          <div className="Sidebar">
            <Sidebar title={sections.find(section => section.dir === dir).title} slug={dir} />
          </div>

          <div className="Content">
            <h1 className="colored-dot">{page.component.meta.displayName}</h1>

            {page.component.meta.isBeta && <span className="badge">beta</span>}
            {page.component.meta.size && <p>{page.component.size} minified</p>}

            {children}

            {filename && <GitHubLink url={`${editBaseURL}${filename}`} />}
          </div>
        </div>
      )}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};
export default withRouter(Layout);
