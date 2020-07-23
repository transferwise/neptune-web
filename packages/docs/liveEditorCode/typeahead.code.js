() => {
  const [options, setOptions] = React.useState([
    {
      label: 'A thing',
      note: 'with a note',
    },
    {
      label: 'Another thing',
      secondary: 'with secondary text this time',
    },
    {
      label: 'Profile',
    },
    {
      label: 'Globe',
    },
    {
      label: 'British pound',
    },
    {
      label: 'Euro',
    },
    {
      label: 'Something else',
    },
  ]);
  const multiple = false;
  const showNewEntry = false;
  const allowNew = true;
  const validateChip =
    multiple && allowNew
      ? (option) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            option.label,
          )
      : undefined;

  return (
    <Typeahead
      id="typeahead"
      name="typeahead-input-name"
      size="md"
      maxHeight={100}
      footer={<div>Want a footer? Style it!</div>}
      multiple={multiple}
      clearable={false}
      allowNew={allowNew}
      showSuggestions
      placeholder="placeholder"
      chipSeparators={[',', ' ']}
      validateChip={validateChip}
      alert={{ message: 'alert message', type: 'success' }}
      onSearch={() => {
        setTimeout(() => setOptions(options), 1500);
      }}
      showNewEntry={showNewEntry}
      onChange={() => {}}
      addon={<SearchIcon />}
      onBlur={() => {}}
      options={options}
    />
  );
};
