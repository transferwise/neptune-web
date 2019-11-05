import createDefinitions from './createDefinitions';

describe('createDefinitions', () => {
  it('creates definitions with titles', () => {
    const fields = { first: { title: 'First' }, second: { title: 'Second' } };
    const model = { first: 'first value', second: 'second value' };

    const definitions = createDefinitions(fields, model);

    const titles = definitions.map(({ title }) => title);
    expect(titles).toStrictEqual(['First', 'Second']);
  });

  it('creates definitions with non-group and group values', () => {
    const fields = {
      first: { title: 'Solo title' },
      second: {
        group: [{ title: 'First group title' }, { title: 'Second group title' }],
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

    expect(first.props.field).toStrictEqual({ title: 'Solo title' });
    expect(first.props.value).toBe('first value');

    expect(groupFirst.props.field).toStrictEqual({ title: 'First group title' });
    expect(groupFirst.props.value).toBe('second value');

    expect(groupSecond.props.field).toStrictEqual({ title: 'Second group title' });
    expect(groupSecond.props.value).toBe('second value');
  });

  it('creates definitions with keys from names', () => {
    const fields = { first: { title: 'First' }, second: { title: 'Second' } };
    const model = { first: 'first value', second: 'second value' };

    const definitions = createDefinitions(fields, model);

    const keys = definitions.map(({ key }) => key);
    expect(keys).toStrictEqual(['first', 'second']);
  });

  it('creates definitions without fields hidden or missing from model', () => {
    const fields = {
      hidden: { title: 'Hidden', hidden: true },
      present: { title: 'Present' },
      missing: { title: 'Missing' },
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
