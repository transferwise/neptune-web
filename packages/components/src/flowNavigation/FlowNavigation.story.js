import React, { useState } from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';
import FlowNavigation from './FlowNavigation';
import Avatar from '../avatar';

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
  const [activeStep, setActiveStep] = useState(0);
  const [closed, setClosed] = useState(false);
  const showAvatar = select('avatar', Object.keys(avatarProfiles), 'Profile');
  const showCloseButton = boolean('show closeButton', true);
  const showMobileBackButton = boolean('show mobile backButton', true);

  return !closed ? (
    <FlowNavigation
      avatar={
        !showAvatar ? null : (
          <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
            {avatarProfiles[showAvatar]}
          </Avatar>
        )
      }
      logo={{
        desktop: (
          <img
            alt="logo"
            src="https://transferwise.com/public-resources/assets/logos/transferwise/logo.svg"
            width="138"
            height="24"
          />
        ),
        mobile: (
          <img
            alt="logo"
            src="https://transferwise.com/public-resources/assets/logos/transferwise/flag.svg"
            height="32"
            width="24"
          />
        ),
      }}
      onClose={showCloseButton && (() => setClosed(true))}
      onGoBack={showMobileBackButton && (() => setActiveStep(activeStep > 0 ? activeStep - 1 : 0))}
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

export const withCustomAvatarImage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [closed, setClosed] = useState(false);
  const showAvatar = boolean('show avatar', true);
  const showCloseButton = boolean('show closeButton', true);
  const showMobileBackButton = boolean('show mobile backButton', true);

  return !closed ? (
    <FlowNavigation
      avatar={
        !showAvatar ? null : (
          <Avatar type={Avatar.Type.THUMBNAIL} size={Avatar.Size.MEDIUM}>
            <img src="https://github.com/transferwise.png" alt="avatar" />
          </Avatar>
        )
      }
      logo={{
        desktop: (
          <img
            alt="logo"
            src="https://transferwise.com/public-resources/assets/logos/transferwise/logo.svg"
            width="138"
            height="24"
          />
        ),
        mobile: (
          <img
            alt="logo"
            src="https://transferwise.com/public-resources/assets/logos/transferwise/flag.svg"
            height="32"
            width="24"
          />
        ),
      }}
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
