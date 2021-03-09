import React, { useEffect, useCallback, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { isIpadOsSafari, isMobileSafari } from './utils';

import './MobileNav.css';

function useMobileNavRef() {
  const [mobileNav, setMobileNav] = useState(null);
  const ref = useCallback((node) => {
    if (node !== null) {
      setMobileNav(node);
    }
  }, []);
  return [mobileNav, ref];
}

const mobileNavType = { CALL_TO_ACTION: 'call-to-action' };

const MobileNav = ({ items, activeItemPath }) => {
  const [hasBanner, setHasBanner] = useState(false);
  const [mobileNav, ref] = useMobileNavRef();

  useEffect(() => {
    /**
     * This attempts to reposition the Mobile Nav when iOS Safari "Open in App" Banner is visible.
     * The Banner appears due to Universal Links. https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html
     * Essentially when a path matches in https://wise.com/.well-known/apple-app-site-association the banner is shown.
     * The banner isn't injected into the page yet pushes the page frame down and thus the mobile nav is not visible due to its fixed positioning.
     * Luckily window.innerHeight changes when the banner is in view so we use this to calculate if we need to adjust the mobile nav positioning.
     */
    let timeout;
    const OPEN_IN_APP_BANNER_HEIGHT = 44;
    const checkForBanner = () => {
      // debounce
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
      timeout = window.requestAnimationFrame(() => {
        // Banner only possible at top of page or at negative page scroll
        if (window.scrollY > 0) {
          setHasBanner(false);
          return;
        }

        const { bottom } = mobileNav.getBoundingClientRect(); // measure position of mobile nav relative to the viewport
        const bannerOffset = hasBanner ? OPEN_IN_APP_BANNER_HEIGHT : 0;
        const isMobileNavOffScreen =
          Math.floor(bottom) + bannerOffset + window.scrollY > window.innerHeight;

        // Will the nav be "off screen"?
        // if position of mobile nav (including offset), minus any negative scroll, is greater than the current inner height the nav is considered to be offscreen and the adjustment is applied.
        if (isMobileNavOffScreen) {
          if (window.scrollY === 0) {
            setHasBanner(true);
          }
          // At negative scroll values we want to keep the current hasBanner value so there is no update to hasBanner here.
        } else {
          setHasBanner(false);
        }
      });
    };

    let prevHeight = window.innerHeight;
    const onVisibilityChange = () => {
      if (!document.hidden) {
        if (prevHeight !== window.innerHeight) {
          // if banner is in view when swapping tabs in safari it hides the banner going back to the tab 🤷‍♂️
          setHasBanner(false);
        }
        // other occurrences (when app switching and swapping tabs)
        checkForBanner();
      } else {
        prevHeight = window.innerHeight;
      }
    };

    if ((isMobileSafari() || isIpadOsSafari()) && mobileNav !== null) {
      checkForBanner(); // fire on mount.
      window.addEventListener('resize', checkForBanner);
      window.addEventListener('scroll', checkForBanner);
      document.addEventListener('visibilitychange', onVisibilityChange);
    }

    return () => {
      window.removeEventListener('resize', checkForBanner);
      window.removeEventListener('scroll', checkForBanner);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [mobileNav, hasBanner]);

  return (
    <div
      ref={ref}
      className={classNames('mobileNav', { 'mobileNav--with-open-in-app-banner': hasBanner })}
    >
      <ul className="mobileNav__items">
        {items.map((item) => (
          <li
            key={item.path}
            className={classNames('mobileNavItem', {
              'mobileNavItem--call-to-action': item.type === mobileNavType.CALL_TO_ACTION,
              'mobileNavItem--active': activeItemPath === item.path,
            })}
          >
            {item.path && (
              <a className="mobileNavItem__link" onClick={item.onClick} href={item.path}>
                <span className="mobileNavItem__icon">{item.icon}</span>
                <span className="mobileNavItem__label">{item.label}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

MobileNav.mobileNavType = mobileNavType;

MobileNav.propTypes = {
  activeItemPath: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      type: PropTypes.oneOf([mobileNavType.CALL_TO_ACTION]),
      hidden: PropTypes.bool,
    }),
  ).isRequired,
};

MobileNav.defaultProps = {
  activeItemPath: null,
};

export default MobileNav;
