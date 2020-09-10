import React from 'react';
import { text } from '@storybook/addon-knobs';
import Markdown from './Markdown';

export default {
  component: Markdown,
  title: 'Markdwon',
};

export const basic = () => {
  const markdown = text(
    'markdown',
    `# Heading
  1. item one
  2. item two
     - sublist
     - sublist`,
  );
  return <Markdown className="classname1">{markdown}</Markdown>;
};
