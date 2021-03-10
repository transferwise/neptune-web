() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [closed, setClosed] = React.useState(false);

  return !closed ? (
    <FlowNavigation
      done={false}
      avatar={
        <AvatarWrapper
          url="https://github.com/transferwise.png"
          profileType={AvatarWrapper.ProfileType.PERSONAL}
        />
      }
      logo={
        <img
          alt="logo"
          src="./../../static/assets/img/wise_logo.svg"
          width="138"
          width="138"
          height="24"
        />
      }
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
