const code = `<Typeahead
  id="typeahead"
  name="typeahead-input-name"
  size='md'
  maxHeight={100}
  footer={<div>Want a footer? Style it!</div>}
  multiple={true}
  clearable={true}
  allowNew={true}
  showSuggestions={true}
  placeholder='placeholder'
  chipSeparators={[',', ' ']}
  validateChip={null}
  alert={{ message: 'alert message', type:'success' }}
  onSearch={() => {}}
  onChange={() => {}}
  addon={<i className="input-group-text icon icon-search"/>}
  onBlur={() => {}}
  options={[
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
      label: 'British Pound',
    },
    {
      label: 'Euro',
    },
    {
      label: 'Something else',
    },
  ]}
/>`;

export default code;
