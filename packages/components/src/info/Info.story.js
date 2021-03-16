import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import Info from '.';

export default {
  component: Info,
  title: 'Info',
};

export const basic = () => {
  const content = text(
    'Content',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  );
  const title = text('Title', 'title');
  const presentation = select('Presentation', [Info.Presentation.POPOVER, Info.Presentation.MODAL]);
  const size = select('Size', [Info.Size.SMALL, Info.Size.LARGE]);

  return (
    <Info
      aria-label="Click here for more details"
      content={content}
      presentation={presentation}
      size={size}
      title={title}
    />
  );
};
