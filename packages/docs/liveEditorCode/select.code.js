() => {
  const [selected, setSelected] = React.useState({
    value: 0,
    label: 'A thing',
    note: 'with a note',
  });

  return (
    <Select
      size="md"
      placeholder="Placeholder"
      dropdownRight="xs"
      dropdownWidth="lg"
      inverse={false}
      block
      selected={selected}
      disabled={false}
      onChange={(v) => setSelected(v)}
      required={false}
      searchPlaceholder="Search placeholder"
      dropdownUp={false}
      search
      options={[
        { header: 'Basic' },
        { value: 0, label: 'A thing', note: 'with a note' },
        { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
        { value: 2, label: 'A disabled thing', disabled: true },
        { header: 'Icons' },
        { value: 3, label: 'Profile', icon: <ProfileIcon /> },
        { value: 4, label: 'Globe', icon: <GlobeIcon /> },
        { header: 'Currencies' },
        { value: 5, label: 'British pound', currency: 'gbp' },
        { value: 6, label: 'Euro', currency: 'eur' },
        { separator: true },
        { value: 7, label: 'Something else' },
        { header: 'Options with searchable alternatives' },
        {
          value: 8,
          label: 'A thing with searchable alternatives',
          searchStrings: ['abbreviation', 'acronym', 'nickname'],
        },
      ]}
    />
  );
};
