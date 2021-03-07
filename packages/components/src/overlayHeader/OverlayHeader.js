import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
// Avatar and Logo to be refactored and exposed DS-274 DS-275
import AvatarWrapper from '../flowNavigation/avatarWrapper';
import Logo from '../flowNavigation/logo';
import Header from '../header';
import CloseButton from '../common/CloseButton';
import { Theme, ProfileType } from '../common';

import '../flowNavigation/FlowNavigation.css';

/**
 * OverlayHeader is a header component that provides a logo, avatar and close button, for use in overlay screens.
 *
 * @param {object} [avatar] - avatar object containing the avatar url. If null is provided avatar won't show. If avatar with null url is provided default placeholder will be shown
 * @param {function} [onClose] - Callback for the close button. If not present, no close button will be rendered.
 * @param {string} [theme=THEME.light] - Theme to use
 * @param {string} profileType - ProfileType to use. If Business is provided default business placeholder will be shown no matter what avatr is provided.
 *
 * @usage `<OverlayHeader avatar={{ url: 'someurl' }} profileType={a profile type} onClose={fn} theme={a theme} />`
 * */

const OverlayHeader = ({ avatar, profileType, onClose, theme }) => {
  const closeButton = onClose && (
    <CloseButton onClick={onClose} className="m-l-3 close-button-with-avatar" />
  );
  return (
    <Header
      leftContent={
        <div className="m-lg-t-1">
          <Logo theme={theme} onGoBack={null} />
        </div>
      }
      rightContent={
        <div className="tw-flow-navigation__right-content m-lg-t-1">
          {avatar && <AvatarWrapper url={avatar.url} profileType={profileType} />}
          {closeButton}
        </div>
      }
      className={classNames('tw-flow-navigation', 'tw-flow-navigation__wrapper', {
        'tw-flow-navigation--inverse': theme === OverlayHeader.Theme.DARK,
        'tw-flow-navigation--done': !avatar,
      })}
    />
  );
};

OverlayHeader.ProfileType = ProfileType;
OverlayHeader.Theme = Theme;

OverlayHeader.defaultProps = {
  avatar: {
    url: null,
  },
  profileType: OverlayHeader.ProfileType.PERSONAL,
  onClose: null,
  theme: Theme.LIGHT,
};

OverlayHeader.propTypes = {
  avatar: Types.oneOfType([
    Types.shape({
      url: Types.string,
    }),
    Types.instanceOf(null),
  ]),
  profileType: Types.oneOf([
    OverlayHeader.ProfileType.PERSONAL,
    OverlayHeader.ProfileType.BUSINESS,
  ]),
  onClose: Types.func,
  theme: Types.oneOf([OverlayHeader.Theme.LIGHT, OverlayHeader.Theme.DARK]),
};

export default OverlayHeader;
