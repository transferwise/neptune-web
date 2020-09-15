() => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card
      title="Title"
      details="Some more context"
      isExpanded={isExpanded}
      onClick={isExpanded => setIsExpanded(isExpanded)}
      icon={<FastFlagIcon />}
    >
      <div>Can be almost anything. Edit me :)</div>
    </Card>
  );
};
