import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { parseISO } from 'date-fns';
import Link from './Link';
import Badge from './Badge';
import Meta from './Meta';

import { getFirstPageInSection, getPageFromPath } from '../utils/pageUtils';
import sections from '../utils/sections';

import Sidebar from './Sidebar';
import ThreeColumnLayout from './layout/threeColumnLayout';

const githubURL = `https://github.com/transferwise/neptune-web/edit/main/packages/docs/pages`;

const Layout = ({ children, router: { pathname } }) => {
  const pathParts = pathname.split('/');
  const rootDir = pathParts[1];
  const page = getPageFromPath(pathname);
  const editPath = `${githubURL}${pathname}.mdx`;

  const firstContent = (
    <div className="Header__Fixed" role="navigation" aria-label="Primary navigation">
      <div className="Header__Brand">
        <Link href="/">
          <a className="Logo">
            <img
              src={`${process.env.ASSET_PREFIX}/static/assets/img/wise_logo.svg`}
              alt="Wise Logo"
            />
            <span className="sr-only">Wise</span>
          </a>
        </Link>
      </div>
      <ul className="Nav Nav--dark">
        <li className="Nav__Group">Neptune</li>
        {sections
          .filter((sec) => !sec.hidden)
          .map((section) => (
            <li key={section.title}>
              <Link href={getFirstPageInSection(section).path}>
                <a className={`Nav__Link ${rootDir === section.dir ? 'active' : ''}`}>
                  {section.title}
                  {section.badge ? (
                    <Badge expiryDate={parseISO(section.badge.expiryDate)} className="m-l-1">
                      {section.badge.type}
                    </Badge>
                  ) : null}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );

  let secondContent = null;
  if (page) {
    const section = sections.find(({ dir }) => dir === rootDir);
    if (section.sidebar !== false) {
      secondContent = <Sidebar {...{ section }} />;
    }
  }

  const thirdContent = (
    <div className="Content" role="main">
      {page ? (
        <>
          <h1 className="colored-dot">{page.component.meta.name}</h1>
          {page.component.meta.date ? (
            <Meta {...{ date: page.component.meta.date, authors: page.component.meta.authors }} />
          ) : null}
        </>
      ) : null}
      {children}
      <a className="btn btn-default m-t-4" href={editPath}>
        Edit these docs on Github
      </a>
    </div>
  );

  return (
    <ThreeColumnLayout
      firstContent={firstContent}
      secondContent={secondContent}
      thirdContent={thirdContent}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

export default withRouter(Layout);
