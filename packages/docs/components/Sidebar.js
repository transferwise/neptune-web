import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { parseISO } from 'date-fns';
import Link from './Link';
import Badge from './Badge';

import { getPagesInSection } from '../utils/pageUtils';

const getLinks = ({ pathname, section }) => {
  return getPagesInSection(section).map(({ group, component, path }, index) => {
    const key = index.toString();
    if (group) {
      return {
        content: (
          <li className="Nav__Group m-t-2" key={key}>
            {group}
          </li>
        ),
      };
    }
    const isSelected = pathname === path;
    const name = component.meta.linkText || component.meta.name;
    const { badge } = component.meta;

    return {
      content: (
        <li key={key}>
          <Link href={path}>
            <a className={`Nav__Link ${isSelected ? 'active' : ''}`}>
              {name}
              {badge ? (
                <Badge expiryDate={parseISO(badge.expiryDate)} className="m-l-1">
                  {badge.type}
                </Badge>
              ) : null}
            </a>
          </Link>
        </li>
      ),
      name: name.toLowerCase(),
    };
  });
};

const Sidebar = ({ router: { pathname }, section }) => {
  const [links, updateLinks] = useState(getLinks({ pathname, section }));
  const [filteredLinks, updateFilteredLinks] = useState(links.map(({ content }) => content));

  const [searchInput, updateSearchInput] = useState('');
  const searchEl = useRef(null);
  const scrollableNavEl = useRef(null);

  useEffect(() => {
    // @TODO
    // We need to show the user a cookie banner before we do this. Because it's used solely for the purposes
    // of making the site run well, we don't need to ask for consent, but we do need to inform them.
    // const top = localStorage.getItem('sidebar-scroll');
    // if (top !== null) {
    //   scrollableNavEl.current.scrollTop = parseInt(top, 10);
    // }
    if (window) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (window) {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  useEffect(() => {
    if (searchInput) {
      const searchString = searchInput.toLowerCase();
      updateFilteredLinks(
        links
          .filter(({ name }) => typeof name !== 'string' || name.indexOf(searchString) !== -1)
          .map(({ content }) => content),
      );
    } else {
      updateFilteredLinks(links.map(({ content }) => content));
    }
  }, [searchInput, links]);

  useEffect(() => {
    updateSearchInput('');
    updateLinks(getLinks({ pathname, section }));
  }, [section]);

  useEffect(() => {
    updateLinks(getLinks({ pathname, section }));
  }, [pathname]);

  const handleKeyDown = (event) => {
    // Allow user to type slash into liveEditor.
    if (event.target.className !== 'npm__react-simple-code-editor__textarea') {
      if (event.code === 'Slash' || event.keyCode === 191) {
        event.preventDefault();
        if (searchEl && searchEl.current) {
          searchEl.current.focus();
        }
      }
    }
  };

  return (
    <div className="Sidebar__Fixed" role="navigation" aria-label="Secondary navigation">
      <div className="Sidebar__Header">
        <h5 className="Sidebar__Title">{section.title}</h5>
      </div>
      {section.searchable && (
        <input
          className="Sidebar__Search"
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => updateSearchInput(e.target.value)}
          ref={searchEl}
        />
      )}
      <div className="Sidebar__Inner">
        <ul className="Nav" ref={scrollableNavEl}>
          {filteredLinks}
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  router: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(
      PropTypes.shape({ title: PropTypes.string.isRequired, dir: PropTypes.string.isRequired }),
    ),
    searchable: PropTypes.bool,
  }).isRequired,
};

export default withRouter(Sidebar);
