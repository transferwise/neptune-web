() => {
  const [dismissed, setDismissed] = React.useState(false);
  return dismissed ? null : (
    <Alert
      dismissible
      size={Alert.Size.SMALL}
      arrow={Alert.ArrowPosition.TOP_LEFT}
      type={Alert.Type.WARNING}
      onDismiss={() => setDismissed(true)}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s when an unknown printer
    </Alert>
  );
};
