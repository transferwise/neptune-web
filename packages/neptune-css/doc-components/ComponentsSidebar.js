import React, { Component } from 'react';
import {withRouter} from 'next/router'
import {default as Link} from 'next/link'

import * as components from '../pages/components'

const getLink = router => {
  return Object.values(components).map(({displayName: name, isBeta}) => {
    const isSelected = router.pathname === `/components/${name}`

    return (
      <li key={name}>
        <Link href={`/components/${name}`}>
          <a className={`Nav__Link ${isSelected ? 'active' : ''}`}>
            {name}
            {' '}
            {isBeta && (
              <span className="badge badge-success">new</span>
            )}
          </a>
        </Link>
      </li>
    )
  })
}

class ComponentsSidebar extends Component {
  render() {
    const { router } = this.props;

    return (
      <div className="Sidebar__Fixed">
        <div className="Sidebar__Header">
          <h3 className="Sidebar__Title">Components</h3>
        </div>

        <div className="Sidebar__Inner">
          <ul className="Nav">
            {getLink(router)}
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(ComponentsSidebar)
