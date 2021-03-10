import React, { ReactElement } from 'react';
import { DocLink } from '../../utils/pageUtils';

export const meta = {
  name: 'Neptune Web March Release',
  date: '2021-03-10',
  authors: [
    {
      name: 'Helen Durrant',
      githubUsername: 'helendurranttw',
    },
  ],
};

export default function PageContent(): ReactElement {
  return (
    <div>
      <DocLink href="/blog/2021-03-08-popover-api-upgrade-guide">Popover Upgrade Page</DocLink>
      <br />
      <DocLink href="/blog/2021-03-09-button-upgrade-guide">Button Upgrade Page</DocLink>
    </div>
  );
}
