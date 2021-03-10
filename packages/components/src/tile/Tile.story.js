import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Tile from '.';
import Avatar from '../avatar';

export default {
  component: Tile,
  title: 'Tile',
};

export const basic = () => {
  const description = text('Description', 'Click here to send money to Mr. Miller');
  const disabled = boolean('Disabled', false);
  const medium = boolean('Medium', true);
  const title = text('Title', 'Hank Miller');

  return (
    <div className="d-flex">
      <Tile
        description={description}
        disabled={disabled}
        href="#href1"
        media={
          <img
            src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
            alt="illustration"
            style={{ width: '100%' }}
          />
        }
        onClick={action('onClick')}
        size={medium ? Tile.Size.MEDIUM : Tile.Size.SMALL}
        title={title}
      />
      <Tile
        description={description}
        disabled={disabled}
        href="#href1"
        media={
          <Avatar size="md" type="initials">
            HM
          </Avatar>
        }
        onClick={action('onClick')}
        size={medium ? Tile.Size.MEDIUM : Tile.Size.SMALL}
        title={title}
      />
    </div>
  );
};
