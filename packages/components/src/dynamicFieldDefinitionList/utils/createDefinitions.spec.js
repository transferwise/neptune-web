import createDefinitions from './createDefinitions';

const FIELD = { title: 'First', control: 'control', type: 'type' };

describe('createDefinitions', () => {
  it('creates definitions with titles', () => {
    const fields = {
      first: { ...FIELD, title: 'First' },
      second: { ...FIELD, title: 'Second' },
    };
    const model = { first: 'first value', second: 'second value' };

    const definitions = createDefinitions(fields, model);

    const titles = definitions.map(({ title }) => title);
    expect(titles).toStrictEqual(['First', 'Second']);
  });

  it('creates definitions with non-group and group values', () => {
    const FIRST_SOLO = { ...FIELD, title: 'Solo title' };
    const FIRST_GROUP = { ...FIELD, title: 'First group title' };
    const SECOND_GROUP = { ...FIELD, title: 'Second group title' };

    const fields = {
      first: FIRST_SOLO,
      second: {
        group: [FIRST_GROUP, SECOND_GROUP],
      },
    };

    const model = {
      first: 'first value',
      second: 'second value',
    };

    const definitions = createDefinitions(fields, model);

    const values = definitions.map(({ value }) => value);

    expect(values).toHaveLength(2);

    const [first, [groupFirst, groupSecond]] = values;

    expect(first.props.field).toStrictEqual(FIRST_SOLO);
    expect(first.props.value).toBe('first value');

    expect(groupFirst.props.field).toStrictEqual(FIRST_GROUP);
    expect(groupFirst.props.value).toBe('second value');

    expect(groupSecond.props.field).toStrictEqual(SECOND_GROUP);
    expect(groupSecond.props.value).toBe('second value');
  });

  it('creates definitions with keys from names', () => {
    const fields = {
      first: { ...FIELD, title: 'First' },
      second: { ...FIELD, title: 'Second' },
    };
    const model = { first: 'first value', second: 'second value' };

    const definitions = createDefinitions(fields, model);

    const keys = definitions.map(({ key }) => key);
    expect(keys).toStrictEqual(['first', 'second']);
  });

  it('creates definitions without fields hidden or missing from model', () => {
    const fields = {
      hidden: { ...FIELD, title: 'Hidden', hidden: true },
      present: { ...FIELD, title: 'Present' },
      missing: { ...FIELD, title: 'Missing' },
    };
    const model = {
      hidden: 'hidden value',
      present: 'present value',
    };

    const definitions = createDefinitions(fields, model);

    expect(definitions.length).toBe(1);
    expect(definitions[0].key).toBe('present');
  });
});
