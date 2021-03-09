import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import Avatar from '../avatar';
import Badge from './Badge';

export default {
  component: Badge,
  title: 'Badge',
  excludeStories: ['ExampleBadgeCss'],
};

export const ExampleBadgeCss = {
  background: 'var(--color-positive)',
  width: '100%',
  height: '100%',
  color: 'white',
  fontSize: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const basic = () => {
  const BadgeInnerText = text('Badge Inner Text', 'Content');
  const BadgeText = text('BadgeText', 'B');
  const border = select('Border', [null, Badge.Border.LIGHT, Badge.Border.DARK]);
  const size = select('Size', [null, Badge.Size.SMALL, Badge.Size.MEDIUM, Badge.Size.LARGE]);

  return (
    <Badge badge={<div style={ExampleBadgeCss}>{BadgeText}</div>} border={border} size={size}>
      <div style={{ background: 'var(--color-secondary)', color: 'white', padding: '0.5em 1em' }}>
        {BadgeInnerText}
      </div>
    </Badge>
  );
};

export const avatar = () => {
  const BadgeText = text('BadgeText', 'B');
  const border = select('Border', [null, Badge.Border.LIGHT, Badge.Border.DARK]);
  const size = select('Size', [null, Badge.Size.SMALL, Badge.Size.MEDIUM, Badge.Size.LARGE]);

  return (
    <Badge badge={<div style={ExampleBadgeCss}>{BadgeText}</div>} border={border} size={size}>
      <Avatar type={Avatar.Type.INITIALS} size={Avatar.Size.LARGE}>
        AA
      </Avatar>
    </Badge>
  );
};
