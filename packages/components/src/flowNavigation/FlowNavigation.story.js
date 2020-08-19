import React from 'react';
import FlowNavigation from './FlowNavigation';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: FlowNavigation,
  title: 'FlowNavigation',
};

export const basic = () => {
  const activeStep = select('activeStep', [0, 1, 2, 3]);
  const done = boolean('done', false);
  const theme = select('theme', Object.values(FlowNavigation.Theme), FlowNavigation.Theme.LIGHT);
  const profileType = select(
    'profileType',
    Object.values(FlowNavigation.ProfileType),
    FlowNavigation.ProfileType.BUSINESS,
  );

  return (
    <FlowNavigation
      done={done}
      profileType={profileType}
      avatarProps={{
        url: 'https://github.com/transferwise.png',
        'aria-label': 'Some text',
      }}
      stepperProps={{
        activeStep,
        steps: [
          {
            label: 'Amount',
            'aria-label': 'Amount',
            hoverLabel: (
              <>
                <div>
                  <strong>100 GBP</strong>
                </div>
                0.2351 ETH
              </>
            ),
          },
          {
            label: 'My details',
            'aria-label': 'My details',
            hoverLabel: (
              <>
                <div>
                  <strong>Diana Jaramillo</strong>
                </div>
                dianajarm123@gmail.com
              </>
            ),
          },
          { label: 'Recipient', hoverLabel: 'Some person/dog' },
          { label: 'Something', hoverLabel: 'Cool' },
        ],
      }}
      closeButtonProps={{ onClick: action('Close clicked'), 'aria-label': 'Hello there!' }}
      onGoBack={action('go back')}
      theme={theme}
    />
  );
};
