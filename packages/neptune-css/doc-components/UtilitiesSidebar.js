import React, { Component } from 'react';
import {withRouter} from 'next/router'
import {default as Link} from 'next/link'

import * as utilities from '../pages/utilities'

const getLink = router => {
  return Object.values(utilities).map(({displayName: name, isBeta}) => {
    const isSelected = router.pathname === `/utilities/${name}`

    return (
      <li key={name}>
        <Link href={`/utilities/${name}`}>
          <a className={`Nav__Link ${isSelected ? 'active' : ''}`}>
            {name}
            {' '}
            {isBeta && (
              <span className="badge">beta</span>
            )}
          </a>
        </Link>
      </li>
    )
  })
}

class UtilitiesSidebar extends Component {
  render() {
    const { router } = this.props;

    return (
      <div className="Sidebar__Fixed">
        <div className="Sidebar__Header">
          <h3 className="Sidebar__Title">Utilities</h3>
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

export default withRouter(UtilitiesSidebar)
