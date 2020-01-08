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
  const showCloseButton = boolean('showCloseButton', true);
  const theme = select('theme', ['light', 'dark'], 'light');

  return (
    <FlowNavigation
      activeStep={activeStep}
      onClose={action('Close clicked')}
      avatarUrl="https://github.com/transferwise.png"
      done={done}
      profileType={{ value: 'PERSONAL', label: 'Personal' }}
      onGoBack={action('go back')}
      showCloseButton={showCloseButton}
      theme={theme}
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
        },
        {
          label: 'My details',
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
      ]}
    />
  );
};
