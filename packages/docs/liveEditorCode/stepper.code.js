<Stepper
  activeStep={1}
  steps={[
    {
      label: 'Labels',
      value: 'labels',
      steps: [
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
        },
        { label: 'Recipient', hoverLabel: 'Some person/dog' },
        { label: 'Something', hoverLabel: 'Cool' },
      ],
    },
    {
      label: 'With actions',
      value: 'with-actions',
      steps: [
        {
          label: 'One',
          onClick() {
            alert('You clicked on step 1, which triggered this function, which alerted you.'); // eslint-disable-line
          },
        },
        {
          label: 'Two',
          onClick() {
            alert('You clicked on step 2, which triggered this function, which alerted you.'); // eslint-disable-line
          },
        },
        { label: 'Recipient' },
        { label: 'Smellification' },
        { label: 'Battle' },
      ],
    },
    {
      label: 'Back and Forth between visited steps',
      value: 'back-and-forth',
      steps: () => alert('clicked back'),
    },
  ]}
/>;
