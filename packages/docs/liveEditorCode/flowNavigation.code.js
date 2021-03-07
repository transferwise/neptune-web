() => {
  const [activeStep, setActiveStep] = React.useState(1);
  const updateActiveStep = (step) => () => setActiveStep(step);

  return (
    <FlowNavigation
      activeStep={activeStep}
      onClose={() => alert('Close clicked')}
      avatarUrl="https://github.com/transferwise.png"
      done={false}
      profileType={FlowNavigation.ProfileType.BUSINESS}
      theme={FlowNavigation.Theme.LIGHT}
      onGoBack={() => alert('If onGoBack is null, the arrow is replaced with a flag')}
      showCloseButton
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
          onClick: updateActiveStep(0),
        },
        {
          label: 'My details',
          hoverLabel: (
            <>
              <div>
                <strong>Diana Jaramillo</strong>
              </div>
              dianajarm123@gmail.com
            </>
          ),
          onClick: updateActiveStep(1),
        },
        { label: 'Recipient', hoverLabel: 'Some person/dog', onClick: updateActiveStep(2) },
        { label: 'Something', hoverLabel: 'Cool', onClick: updateActiveStep(3) },
      ]}
    />
  );
};
