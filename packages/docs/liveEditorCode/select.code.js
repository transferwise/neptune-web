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
      /**
       * Search Parameter:
       *
       * if `true` default search functionality being enabled
       * (not case sensitive search in option labels & currency props)
       *
       * if `function` you can define your own search function
       * to implement custom search experience.
       * This search function used while filtering the options array.
       * The custom search function takes two parameters.
       * First is the option the second is the keyword.
       */
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
          /**
           * searchStrings is an array of strings that maps additional searchable terms to a given option.
           */
          searchStrings: ['abbreviation', 'acronym', 'nickname'],
        },
      ]}
    />
  );
};
