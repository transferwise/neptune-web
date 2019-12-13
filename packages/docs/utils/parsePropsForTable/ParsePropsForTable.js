import { isObject, isArray } from 'util';

const cleanValue = value => {
  let newValue = value;
  if (typeof value === 'object') {
    /* eslint-disable-next-line */
    newValue = Object.values(value)[0];
  }
  return newValue && typeof newValue === 'string' ? newValue.replace(/"|'/gi, '') : newValue;
};

const parsePropsForTable = ({ type, required, defaultValue }) => {
  const getAllowedValues = propType => {
    switch (propType.name) {
      case 'arrayOf':
        if (propType.value.value) {
          return `{${Object.keys(propType.value.value).join(', ')}}`;
        }
        return `{${Object.keys(propType.value).join(', ')}}`;

      case 'enum':
        if (isArray(propType.value)) {
          return propType.value.map(({ value }) => cleanValue(value));
        }
        return cleanValue(propType.value) || '–';

      case 'union':
        if (isArray(propType.value)) {
          return propType.value.map(({ name }) => name);
        }
        return cleanValue(propType.value) || '–';

      case 'shape':
        if (isObject(propType.value)) {
          return JSON.stringify(
            Object.keys(propType.value).map(key => ({
              [key]: cleanValue(propType.value[key].name),
            })),
          );
        }
        return cleanValue(propType.value) || '–';

      default:
        return cleanValue(propType.value) || '–';
    }
  };

  return {
    type: type.name || '–',
    allowedValues: getAllowedValues(type),
    required,
    defaultValue: (defaultValue && cleanValue(defaultValue.value)) || '–',
  };
};

export default parsePropsForTable;
