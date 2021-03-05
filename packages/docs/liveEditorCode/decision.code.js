() => (
  <Decision
    options={[
      {
        description:
          "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",
        onClick: () => console.log('clicked'),
        disabled: false,
        href: '#href1',
        media: {
          block: (
            <img
              src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
              alt="alt"
            />
          ),
          list: (
            <Avatar size="md" type="initials">
              HM
            </Avatar>
          ),
        },
        title: 'Hank Miller',
      },
      {
        description:
          "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",
        onClick: () => console.log('clicked'),
        disabled: false,
        href: '#href2',
        media: {
          block: (
            <img
              src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
              alt="alt"
            />
          ),
          list: (
            <Avatar size="md" type="initials">
              HM
            </Avatar>
          ),
        },
        title: 'Hank Miller',
      },
      {
        description:
          "Click here to send money to Hank Miller. Money will be sent directly to Hank Miller's multi-currency account.",
        onClick: () => console.log('clicked'),
        href: '#href3',
        media: {
          block: (
            <img
              src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
              alt="alt"
            />
          ),
          list: (
            <Avatar size="md" type="initials">
              HM
            </Avatar>
          ),
        },
        disabled: false,
        title: 'Hank Miller',
      },
    ]}
    presentation={Decision.Presentation.LIST_BLOCK}
    type={Decision.Type.NAVIGATION}
  />
);
