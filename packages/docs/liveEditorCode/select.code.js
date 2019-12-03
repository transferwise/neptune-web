const code = `() => {
const [check, setCheck] = React.useState(false);
const [searchValue, setSearchValue] = React.useState('');
const [selected, setSelected] = React.useState({ value: 0, label: 'A thing', note: 'with a note' });
return <Select
  size='md'
  placeholder='placeholder'
  dropdownRight='xs'
  dropdownWidth='lg'
  inverse={false}
  block={true}
  selected={selected}
  disabled={false}
  onChange={v =>setSelected(v)}
  required={false}
  searchValue={searchValue}
  searchPlaceholder='searchplaceholder'
  onSearchChange={v => setSearchValue(v)}
  dropdownUp={false}
  options={[
    { header: 'Basic' },
    { value: 0, label: 'A thing', note: 'with a note' },
    { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
    { value: 2, label: 'A disabled thing', disabled: true },
    { header: 'Icons' },
    { value: 3, label: 'Profile', icon: 'icon-profile' },
    { value: 4, label: 'Globe', icon: 'icon-globe' },
    { header: 'Currencies' },
    { value: 5, label: 'British Pound', currency: 'gbp' },
    { value: 6, label: 'Euro', currency: 'eur' },
    { separator: true },
    { value: 7, label: 'Something else' },
  ].filter((option) => option.label && option.label.toLowerCase().indexOf(searchValue) !== -1 ) }
/>
}`;

export default code;
