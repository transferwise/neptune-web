import React from 'react';
import Link from 'next/link'
import {withRouter} from 'next/router'
import getConfig from 'next/config'

import * as foundations from '../pages/foundations'
import * as layout from '../pages/layout'
import * as components from '../pages/components'
import * as utilities from '../pages/utilities'
import * as docComponents from '.'
import Logo from '../static/assets/img/logo_full_inverse.svg'

const {ComponentsSidebar, FoundationsSidebar, GitHubLink, LayoutSidebar, UtilitiesSidebar} = docComponents

const pages = {
  ...foundations,
  ...layout,
  ...components,
  ...utilities,
}

const {pageMap} = getConfig().publicRuntimeConfig

const getTitle = page => page && (
  <h1 className="colored-dot">
    {page.displayName}.
  </h1>);

const getBetaBadge = page => page && page.isBeta && (
  <span className="badge">beta</span>);

const getSize = page => page && page.size && (
  <p>{page.size} minified</p>);

const editBaseURL = `https://github.com/transferwise/neptune-css/edit/master/pages`

const Layout = ({ children, router }) => {
  const {pathname} = router
  const filename = pageMap[pathname]
  if (!filename) {
    // eslint-disable-next-line no-console
    console.warn(`pathname "${pathname}" doesn't exist in pageMap:`, pageMap)
  }
  const isIndex = pathname === '/'

  const getPage = componentName => {
    return Object.values(pages)
      .find(n => n.displayName === componentName)
  }

  const foundation = getPage(pathname.replace('/foundations/', ''))
  const layout = getPage(pathname.replace('/layout/', ''))
  const component = getPage(pathname.replace('/components/', ''))
  const utility = getPage(pathname.replace('/utilities/', ''))
  const page = foundation || layout || component || utility;

  return (
    <div id="top" className="PageLayout">
      <header className="Header">
        <div className="Header__Fixed">
          <Link href={process.env.NODE_ENV === "production" ? "/neptune-css/" : "/"}>
            <a className="Logo"><Logo /></a>
          </Link>

          <div className="Header__Inner">
            <ul className="Nav Nav--dark">
              <li>
                <Link href={process.env.NODE_ENV === "production" ? "/neptune-css/foundations/Colours" : "/foundations/Colours"}>
                  <a className={`Nav__Link ${foundation ? 'active' : null}`}>Foundations</a>
                </Link>{' '}
              </li>
              <li>
                <Link href={process.env.NODE_ENV === "production" ? "/neptune-css/layout/Flex" : "/layout/Flex"}>
                  <a className={`Nav__Link ${layout ? 'active' : null}`}>Layout</a>
                </Link>{' '}
              </li>
              <li>
                <Link href={process.env.NODE_ENV === "production" ? "/neptune-css/components/Alerts" : "/components/Alerts"}>
                  <a className={`Nav__Link ${component ? 'active' : null}`}>Components</a>
                </Link>{' '}
              </li>
              <li>
                <Link href={process.env.NODE_ENV === "production" ? "/neptune-css/utilities/Background" : "/utilities/Background"}>
                  <a className={`Nav__Link ${utility ? 'active' : null}`}>Utilities</a>
                </Link>{' '}
              </li>
            </ul>
          </div>
        </div>
      </header>

      {page && (
        <div className="PageLayout__Inner">
          <div className="Sidebar">
            {component &&
              <ComponentsSidebar />
            }

            {foundation &&
              <FoundationsSidebar />
            }

            {layout &&
              <LayoutSidebar />
            }

            {utility &&
              <UtilitiesSidebar />
            }
          </div>

          <div className="Content">
            {getTitle(page)}
            {getBetaBadge(page)}
            {getSize(page)}

            {children}

            {filename && (
              <GitHubLink url={`${editBaseURL}${filename}`} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default withRouter(Layout)
