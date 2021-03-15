import React from 'react';
import { text } from '@storybook/addon-knobs';

import { Home as HomeIcon } from '@transferwise/icons';

import Summary from './Summary';
import Info from '../info';

export default {
  component: Summary,
  title: 'Summary',
};

export const basic = () => {
  const actionText = text('ActionText', 'Change address');

  const title = text('Title', 'Verify your address');
  const description = text('Description', '10 Downing Street, Westminster, London SW1A 2AA.');

  return (
    <ul>
      <Summary
        action={{
          text: actionText,
          href: '#change-address',
          'aria-label': ' Click here to change address',
        }}
        as="li"
        description={description}
        icon={<HomeIcon size={24} />}
        title={title}
        status={Summary.Status.NOT_DONE}
      />
      <Summary
        action={{
          text: 'Change address',
          href: '#change-address',
          'aria-label': ' Click here to change address',
        }}
        as="li"
        description="10 Downing Street, Westminster, London SW1A 2AA."
        info={{
          title: 'You entered your address',
          content: 'Your address has been verified, no more actions are required.',
          'aria-label': 'Please click here to know more about your address update status',
        }}
        icon={<HomeIcon size={24} />}
        title="You verified your address"
        status={Summary.Status.DONE}
      />
      <Summary
        action={{
          text: 'Change address',
          href: '#change-address',
          'aria-label': ' Click here to change address',
        }}
        as="li"
        description="10 Downing Street, Westminster, London SW1A 2AA."
        info={{
          title: 'Address verification pending',
          content:
            'Your address change is currently being processed. Please allow 48 hours for verification.',
          presentation: Info.Presentation.MODAL,
          'aria-label': 'Please click here to know more about your address update status',
        }}
        icon={<HomeIcon size={24} />}
        title="We’re verifying your address"
        status={Summary.Status.PENDING}
      />
      <Summary
        action={{
          text: 'Open in new tab',
          href: '#change-address',
          target: '_blank',
          callback: () => {},
        }}
        as="li"
        description="10 Downing Street, Westminster, London SW1A 2AA."
        icon={<HomeIcon size={24} />}
        title="We’re verifying your address"
        status={Summary.Status.PENDING}
      />
    </ul>
  );
};
