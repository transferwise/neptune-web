import React from 'react';
import { object, select } from '@storybook/addon-knobs';
import { FastFlag as FastFlagIcon, Check } from '@transferwise/icons';
import Accordion from './Accordion';
import Modal from '../modal';

export default {
  component: Accordion,
  title: 'Accordion',
};

export const basic = () => {
  const items = [
    {
      title: 'Item 1',
      content: 'I can be text',
      id: 'Item 1',
    },
    {
      title: 'Item 2',
      content: 'I can be text',
      id: 'Item 2',
    },
    {
      title: 'Item 3',
      content: 'I can be text',
      id: 'Item 3',
    },
  ];

  const indexOpen = select('indexOpen', [0, 1, 2], 0);
  const value = object('items', items);

  return <Accordion items={value} indexOpen={indexOpen} />;
};

export const inModal = () => {
  const items = [
    {
      title: 'If you have a deadline, set up your transfer early',
      content:
        'Most large transfers take around 2–4 working days from start to finish. So set up your transfer early if you have a deadline coming up.',
      id: 'Item 1',
      icon: <Check size={24} />,
    },
    {
      title: 'Have documents on hand to speed things up',
      content:
        'When you set up your transfer, we might ask for documents that show where your money comes from. Documents you might need (opens in a new tab)',
      id: 'Item 2',
      icon: <FastFlagIcon size={24} />,
    },
    {
      title: 'Item 3',
      content:
        'I can be text I can be tex I can be tex I can be ex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex  n be tex I can be tex I can be t n be tex ex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex  n be tex I can be tex I can be t n be tex ex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex  n be tex I can be tex I can be t n be textex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex  n be tex I can be tex I can be t n be tex I can be tex I can be t n be tex I can be tex I can be tend ',
      id: 'Item 3',
    },
  ];

  const indexOpen = select('indexOpen', [0, 1, 2], 0);

  return (
    <Modal
      body={
        <div className="p-a-1">
          <h3 className="m-t-2 m-b-4 text-xs-center">large transfer tips</h3>
          <Accordion items={items} indexOpen={indexOpen} />
        </div>
      }
      closeOnClick
      scroll={Modal.Scroll.CONTENT}
      size={Modal.Size.LARGE}
      open
      footer={
        <div className="p-a-3 text-xs-center">
          <a href="/large-amounts">learn more</a>
        </div>
      }
    />
  );
};
