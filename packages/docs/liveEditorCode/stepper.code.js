<Stepper
  activeStep={1}
  steps={[
    {
      label: 'One',
      onClick() {
        alert('You clicked on step 1, which triggered this function, which alerted you.');
      },
    },
    {
      label: 'Two',
      hoverLabel: (
        <>
          <div>
            <strong>Diana Jaramillo</strong>
          </div>
          dianajarm123@gmail.com
        </>
      ),
    },
    { label: 'Recipient' },
    { label: 'Smellification' },
    { label: 'Battle' },
  ]}
/>;
