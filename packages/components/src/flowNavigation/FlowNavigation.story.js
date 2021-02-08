import React, { useState } from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';
import FlowNavigation from './FlowNavigation';
import OverlayHeader from '../overlayHeader';
import Avatar from '../avatar';
import demoLogo from '../../public/assets/logo_full.svg';
import AvatarWrapper from '../common/avatarWrapper';

export default {
  component: FlowNavigation,
  title: 'FlowNavigation',
};
const avatarProfiles = {
  '': null,
  Business: <BriefcaseIcon />,
  Profile: <ProfileIcon />,
};

export const withAvatarIcon = () => {
  const [activeStep, setActiveStep] = useState(4);
  const [closed, setClosed] = useState(false);
  const showAvatar = select('avatar', Object.keys(avatarProfiles), 'Profile');
  const showCloseButton = boolean('show closeButton', true);
  const showMobileBackButton = boolean('show mobile backButton', true);
  const done = boolean('done', false);

  return !closed ? (
    <FlowNavigation
      avatar={
        !showAvatar ? null : (
          <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
            {avatarProfiles[showAvatar]}
          </Avatar>
        )
      }
      logo={<img alt="logo" src={demoLogo} width="138" />}
      onClose={showCloseButton && (() => setClosed(true))}
      onGoBack={showMobileBackButton && (() => setActiveStep(activeStep > 0 ? activeStep - 1 : 0))}
      activeStep={activeStep}
      done={done}
      steps={[
        {
          label: 'Amount',
          hoverLabel: (
            <>
              <div>
                <strong>100 GBP</strong>
              </div>
              0.2351 ETH
            </>
          ),
          onClick: () => setActiveStep(0),
        },
        {
          label: 'You',
          hoverLabel: (
            <>
              <div>
                <strong>Elena Durante</strong>
              </div>
              elenadurante@test.com
            </>
          ),
          onClick: () => setActiveStep(1),
        },
        { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },
        { label: 'Review', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },
        {
          label: 'Pay',
          hoverLabel: 'Enrico Gusso II',
          onClick: () => setActiveStep(4),
        },
      ]}
    />
  ) : null;
};

export const withCustomAvatarImage = () => {
  const [activeStep, setActiveStep] = useState(4);
  const [closed, setClosed] = useState(false);
  const showAvatar = boolean('show avatar', true);
  const showCloseButton = boolean('show closeButton', true);
  const showMobileBackButton = boolean('show mobile backButton', true);
  const done = boolean('done', false);

  return !closed ? (
    <FlowNavigation
      done={done}
      avatar={
        !showAvatar ? null : (
          <Avatar type={Avatar.Type.THUMBNAIL} size={Avatar.Size.MEDIUM}>
            <img src="https://github.com/transferwise.png" alt="avatar" />
          </Avatar>
        )
      }
      logo={<img alt="logo" src={demoLogo} width="138" />}
      onClose={showCloseButton && (() => setClosed(true))}
      onGoBack={
        showMobileBackButton && (() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0))
      }
      activeStep={activeStep}
      steps={[
        {
          label: 'Amount',
          hoverLabel: (
            <>
              <div>
                <strong>100 GBP</strong>
              </div>
              0.2351 ETH
            </>
          ),
          onClick: () => setActiveStep(0),
        },
        {
          label: 'You',
          hoverLabel: (
            <>
              <div>
                <strong>Elena Durante</strong>
              </div>
              elenadurante@test.com
            </>
          ),
          onClick: () => setActiveStep(1),
        },
        { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },
        { label: 'Review', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },
        {
          label: 'Pay',
          hoverLabel: 'Enrico Gusso II',
          onClick: () => setActiveStep(4),
        },
      ]}
    />
  ) : null;
};

export const withAvatar = () => {
  const [activeStep, setActiveStep] = useState(4);
  const [closed, setClosed] = useState(false);
  const showAvatar = boolean('show avatar', true);
  const showCloseButton = boolean('show closeButton', true);
  const showMobileBackButton = boolean('show mobile backButton', true);
  const done = boolean('done', false);

  return !closed ? (
    <FlowNavigation
      done={done}
      avatar={
        !showAvatar ? null : (
          <Avatar type={Avatar.Type.THUMBNAIL} size={Avatar.Size.MEDIUM}>
            <img src="https://github.com/transferwise.png" alt="avatar" />
          </Avatar>
        )
      }
      logo={<img alt="logo" src={demoLogo} width="138" />}
      onClose={showCloseButton && (() => setClosed(true))}
      onGoBack={
        showMobileBackButton && (() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0))
      }
      activeStep={activeStep}
      steps={[
        {
          label: 'Amount',
          hoverLabel: (
            <>
              <div>
                <strong>100 GBP</strong>
              </div>
              0.2351 ETH
            </>
          ),
          onClick: () => setActiveStep(0),
        },
        {
          label: 'You',
          hoverLabel: (
            <>
              <div>
                <strong>Elena Durante</strong>
              </div>
              elenadurante@test.com
            </>
          ),
          onClick: () => setActiveStep(1),
        },
        { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },
        { label: 'Review', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },
        {
          label: 'Pay',
          hoverLabel: 'Enrico Gusso II',
          onClick: () => setActiveStep(4),
        },
      ]}
    />
  ) : null;
};

export const withAvatarWrapper = () => {
  const [activeStep, setActiveStep] = useState(4);
  const [closed, setClosed] = useState(false);
  const profileType = select('profileType', Object.keys(AvatarWrapper.ProfileType));
  const showCloseButton = boolean('show closeButton', true);
  const showMobileBackButton = boolean('show mobile backButton', true);
  const avatarURL = text('avatarURL', 'https://github.com/transferwise.png');
  const done = boolean('done', false);

  return !closed ? (
    <FlowNavigation
      done={done}
      avatar={<AvatarWrapper url={avatarURL} profileType={profileType} />}
      logo={<img alt="logo" src={demoLogo} width="138" />}
      onClose={showCloseButton && (() => setClosed(true))}
      onGoBack={
        showMobileBackButton && (() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0))
      }
      activeStep={activeStep}
      steps={[
        {
          label: 'Amount',
          hoverLabel: (
            <>
              <div>
                <strong>100 GBP</strong>
              </div>
              0.2351 ETH
            </>
          ),
          onClick: () => setActiveStep(0),
        },
        {
          label: 'You',
          hoverLabel: (
            <>
              <div>
                <strong>Elena Durante</strong>
              </div>
              elenadurante@test.com
            </>
          ),
          onClick: () => setActiveStep(1),
        },
        { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },
        { label: 'Review', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },
        {
          label: 'Pay',
          hoverLabel: 'Enrico Gusso II',
          onClick: () => setActiveStep(4),
        },
      ]}
    />
  ) : null;
};

export const withOverlayHeaderComparison = () => {
  const [activeStep, setActiveStep] = useState(4);
  const [closed, setClosed] = useState(false);
  const showAvatar = select('avatar', Object.keys(avatarProfiles), 'Profile');
  const showCloseButton = boolean('show closeButton', true);
  const showMobileBackButton = boolean('show mobile backButton', true);
  const done = boolean('done', false);

  return !closed ? (
    <>
      <div style={{ border: '1px solid #e8e8e8' }}>
        <FlowNavigation
          avatar={
            showAvatar ? (
              <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
                {avatarProfiles[showAvatar]}
              </Avatar>
            ) : null
          }
          logo={<img alt="logo" src={demoLogo} width="138" />}
          onClose={showCloseButton && (() => setClosed(true))}
          onGoBack={
            showMobileBackButton && (() => setActiveStep(activeStep > 0 ? activeStep - 1 : 0))
          }
          activeStep={activeStep}
          done={done}
          steps={[]}
        />
      </div>
      <div style={{ border: '1px solid #e8e8e8' }}>
        <OverlayHeader
          logo={<img alt="logo" src={demoLogo} width="138" />}
          onClose={showCloseButton && (() => setClosed(true))}
          avatar={
            showAvatar ? (
              <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
                {avatarProfiles[showAvatar]}
              </Avatar>
            ) : null
          }
        />
      </div>
    </>
  ) : null;
};
