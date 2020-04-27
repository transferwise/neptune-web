import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from './Link';

import getPages from '../utils/getPages';
import sections from '../utils/sections';

import Sidebar from './Sidebar';
import Logo from '../static/assets/img/logo_full_inverse.svg';
import ThreeColumnLayout from './layout/threeColumnLayout';

const githubURL = `https://github.com/transferwise/neptune-web/edit/master/packages/docs/pages`;
const pages = getPages();

const Layout = ({ children, router: { pathname } }) => {
  const isIndex = pathname === '/';
  const dir = pathname.split('/')[1];
  const slug = isIndex ? 'index' : pathname.split('/').pop();
  const page = pages.find(p => p.dir === dir && p.slug === slug);
  const editPath = `${githubURL}${isIndex ? '' : `/${dir}`}/${slug}.mdx`;

  const firstContent = (
    <div className="Header__Fixed">
      <Link href="/">
        <a className="Logo">
          <Logo />
        </a>
      </Link>
      <ul className="Nav Nav--dark">
        {sections.map(section => (
          <li key={section.title}>
            <Link
              href={
                section.dir === ''
                  ? '/'
                  : `/${section.dir}/${pages.find(p => p.dir === section.dir).slug}`
              }
            >
              <a className={`Nav__Link ${dir === section.dir ? 'active' : null}`}>
                {section.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const secondContent = page && (
    <Sidebar title={sections.find(section => section.dir === dir).title} slug={dir} />
  );

  const thirdContent = (
    <div className="Content">
      {page && <h1 className="colored-dot">{page.component.meta.name}</h1>}
      {page && page.component.meta.isBeta && <span className="badge">beta</span>}
      {children}
      <a className="btn btn-default m-t-4" href={editPath}>
        Edit on GitHub
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
