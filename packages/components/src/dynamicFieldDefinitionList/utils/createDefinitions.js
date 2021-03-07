import React from 'react';
import toPairs from 'lodash.topairs';

import FormattedValue from '../FormattedValue';

export default function createDefinitions(fields, model, locale) {
  return toPairs(fields)
    .map(([name, field]) => createDefinition(name, field, model, locale))
    .filter((definition) => !!definition);
}

function createDefinition(name, field, model, locale) {
  const { title, group, hidden } = field;

  if (!model[name] || hidden) {
    return null;
  }

  return {
    title,
    value: group ? (
      group.map((groupField, groupFieldIndex) => (
        <FormattedValue
          key={groupFieldIndex} // eslint-disable-line react/no-array-index-key
          field={groupField}
          value={model[name]}
          locale={locale}
        />
      ))
    ) : (
      <FormattedValue field={field} value={model[name]} locale={locale} />
    ),
    key: name,
  };
}
