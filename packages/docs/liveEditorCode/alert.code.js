() => {
  const [dismissed, setDismissed] = React.useState(false);
  return dismissed ? null : (
    <Alert
      action={{
        'aria-label': 'Learn more about expected payment times',
        text: 'Learn more',
        href: 'https://www.wise.com',
      }}
      message="Payments sent to your bank details **today** might not arrive in time for the holidays."
      onDismiss={() => setDismissed(true)}
      type={Alert.Type.POSITIVE}
    />
  );
};
