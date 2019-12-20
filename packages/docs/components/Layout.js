import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { Flex, Box } from '@transferwise/components/lib';
import Link from './Link';

import getPages from '../utils/getPages';
import sections from '../utils/sections';

import Sidebar from './Sidebar';
import Logo from '../static/assets/img/logo_full_inverse.svg';

const githubURL = `https://github.com/transferwise/neptune-web/edit/master/packages/docs/pages`;
const pages = getPages();

const Direction = { xs: 'row', sm: 'row', md: 'row', lg: 'row' };

const Layout = ({ children, router: { pathname } }) => {
  const isIndex = pathname === '/';
  const dir = pathname.split('/')[1];
  const slug = isIndex ? 'index' : pathname.split('/').pop();
  const page = pages.find(p => p.dir === dir && p.slug === slug);
  const editPath = `${githubURL}${isIndex ? '' : `/${dir}`}/${slug}.mdx`;

  return (
    <Flex
      direction={Direction}
      marginX={0}
      paddingX={0}
      paddingY={0}
      marginY={0}
      className="PageLayout__Inner"
    >
      <Box
        size={{
          xs: 0,
          sm: 0,
          md: 0,
          lg: 200,
          xl: 200,
        }}
        justifyContent="flex-start"
        alignItems="flex-start"
        tagHtml="header"
        className="Header"
      >
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
      </Box>
      {page && (
        <Box
          size={{
            xs: 0,
            sm: 200,
            md: 200,
            lg: 200,
            xl: 200,
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          className="Sidebar"
        >
          <Sidebar title={sections.find(section => section.dir === dir).title} slug={dir} />
        </Box>
      )}
      <Flex
        direction={Direction}
        marginX={0}
        paddingX={0}
        paddingY={0}
        marginY={0}
        className="Flex__Container"
      >
        <Box
          size={{
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1,
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          className="Box__Container"
        >
          <div className="Content">
            {page && <h1 className="colored-dot">{page.component.meta.name}</h1>}
            {page && page.component.meta.isBeta && <span className="badge">beta</span>}
            {children}
            <a className="btn btn-default m-t-4" href={editPath}>
              Edit on GitHub
            </a>
          </div>
        </Box>
      </Flex>
    </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

export default withRouter(Layout);
