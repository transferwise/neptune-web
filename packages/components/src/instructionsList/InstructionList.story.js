import React from 'react';
import { array } from '@storybook/addon-knobs';
import InstructionsList from './InstructionsList';

export default {
  component: InstructionsList,
  title: 'InstructionsList',
};

export const basic = () => {
  const dos = array('dos', [
    'Do an initial money transfer',
    'Invite at least 3 friends',
    'Convince them to use this amazing product',
  ]);
  const donts = array('donts', [
    <>
      Paying extra <a href="https://wise.com/gb/blog/why-we-care-about-hidden-fees">hidden fees</a>{' '}
      for transfers
    </>,
    'Use bad exchange rate',
  ]);

  return <InstructionsList dos={dos} donts={donts} />;
};
