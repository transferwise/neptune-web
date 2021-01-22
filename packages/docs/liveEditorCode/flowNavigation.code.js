() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [closed, setClosed] = React.useState(false);

  return !closed ? (
    <FlowNavigation
      avatar={
        <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
          <ProfileIcon />
        </Avatar>
      }
      logo={{
        desktop: (
          <img
            alt="logo"
            src="https://transferwise.com/public-resources/assets/logos/transferwise/logo.svg"
            width="138"
            height="24"
          />
        ),
        mobile: (
          <img
            alt="logo"
            src="https://transferwise.com/public-resources/assets/logos/transferwise/flag.svg"
            height="32"
            width="24"
          />
        ),
      }}
      onClose={() => setClosed(true)}
      onGoBack={() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0)}
      steps={[
        {
          label: 'Amount',
          hoverLabel: (
            <>
              <div>
                <strong>100 GBP</strong>
              </div>
              0.2351 ETH
            </>
          ),
          onClick: () => setActiveStep(0),
        },
        {
          label: 'You',
          hoverLabel: (
            <>
              <div>
                <strong>Elena Durante</strong>
              </div>
              elenadurante@test.com
            </>
          ),
          onClick: () => setActiveStep(1),
        },
        { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },
        { label: 'Review', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },
        {
          label: 'Pay',
          hoverLabel: 'Enrico Gusso II',
          onClick: () => setActiveStep(4),
        },
      ]}
      activeStep={activeStep}
    />
  ) : null;
};
