import React from 'react';

import { Home as HomeIcon, Id as IdIcon, Money as MoneyIcon } from '@transferwise/icons';

import Summary from './Summary';

export default {
  component: Summary,
  title: 'Summary',
};

export const basic = () => {
  return (
    <>
      <Summary icon={<MoneyIcon size={24} />} title="An item with a short title" />
      <Summary
        icon={<MoneyIcon size={24} />}
        title="An item with a short title and help"
        help={{
          title: 'Add money to your account',
          content: (
            <>
              To open your account, you’ll need to add money to it at least once.
              <br />
              This isn’t a fee — it’s still your money. It just means that you’re ready to go once
              you’re verified.
            </>
          ),
        }}
      />
      <Summary
        icon={<IdIcon size={24} />}
        title="An item with a really long title that goes over several lines because maybe the window is too small or maybe because we have a lot to say to the customer"
        help={{
          title: 'Enter your card address',
          content: 'When your card is ready we’ll post it to your home address.',
        }}
      />
      <Summary
        icon={<HomeIcon size={24} />}
        title="An item with some content and a longer title"
        content={
          <>
            Flat 3 Chaplin House, Shepperton Road
            <br />
            London N1 2NE
            <br />
            <a href="#foo">Edit address</a>
          </>
        }
      />
      <Summary
        icon={<HomeIcon size={24} />}
        title="Short title"
        content={
          <>
            Flat 3 Chaplin House, Shepperton Road
            <br />
            London N1 2NE
            <br />
            <a href="#foo">Edit address</a>
          </>
        }
        help={{
          title: 'Enter your card address',
          content: 'When your card is ready we’ll post it to your home address.',
        }}
      />
    </>
  );
};
