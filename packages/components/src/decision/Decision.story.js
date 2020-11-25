import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Decision from './Decision';
import Avatar from '../avatar';

export default {
  component: Decision,
  title: 'Decision',
};

export const basic = () => {
  const presentation = select(
    'presentation',
    Decision.Presentation,
    Decision.Presentation.LIST_BLOCK,
  );
  const disabled = boolean('disabled', false);

  return (
    <>
      <Decision
        options={[
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",
            onClick: action('clicked'),
            href: '#href1',
            disabled,
            media: {
              block: (
                <img
                  src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            title: 'Hank Miller',
          },
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Han Miller's multi-currency account.",
            onClick: action('clicked'),
            disabled,
            href: '#href2',
            media: {
              block: (
                <img
                  src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            title: 'Hank Miller',
          },
          {
            description:
              "Click here to send money to Hank Miller. Money will be sent directly to Han Miller's multi-currency account.",
            onClick: action('clicked'),
            href: '#href3',
            media: {
              block: (
                <img
                  src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
                  alt="alt"
                />
              ),
              list: (
                <Avatar size="md" type="initials">
                  HM
                </Avatar>
              ),
            },
            disabled,
            title: 'Hank Miller',
          },
        ]}
        presentation={presentation}
        type={Decision.Type.NAVIGATION}
      />
    </>
  );
};
