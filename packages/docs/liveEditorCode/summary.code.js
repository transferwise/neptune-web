<ul>
  <Summary
    action={{
      text: 'Change address',
      href: '#change-address',
      'aria-label': ' Click here to change address',
    }}
    as="li"
    description="10 Downing Street, Westminster, London SW1A 2AA."
    icon={<HomeIcon size={24} />}
    title="Verify your address"
  />
  <Summary
    action={{
      text: 'Change address',
      href: '#change-address',
      'aria-label': ' Click here to change address',
    }}
    as="li"
    description="10 Downing Street, Westminster, London SW1A 2AA."
    info={{
      title: 'You entered your address',
      content: 'Your address has been verified, no more actions are required.',
      'aria-label': 'Please click here to know more about your address update status',
    }}
    icon={<HomeIcon size={24} />}
    title="You verified your address"
    status={Summary.Status.DONE}
  />
  <Summary
    action={{
      text: 'Change address',
      href: '#change-address',
      'aria-label': ' Click here to change address',
    }}
    as="li"
    description="10 Downing Street, Westminster, London SW1A 2AA."
    info={{
      title: 'Address verification pending',
      content:
        'Your address change is currently being processed. Please allow 48 hours for verification.',
      presentation: 'MODAL',
      'aria-label': 'Please click here to know more about your address update status',
    }}
    icon={<HomeIcon size={24} />}
    title="We’re verifying your address"
    status={Summary.Status.PENDING}
  />
</ul>;
