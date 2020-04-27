import React from 'react';
import Markdown from './Markdown';

import { text } from '@storybook/addon-knobs';

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
  return <Markdown>{markdown}</Markdown>;
};
