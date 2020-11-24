import { isNull, isUndefined } from '@transferwise/neptune-validation';
import { getCurrencyFlag } from './availableCurrencyFlags';

export const mapConstSchemaToOption = (schema) => {
  return {
    label: schema.title,
    value: !isUndefined(schema.const) ? schema.const : schema.enum[0],
    ...getOptionDescription(schema.title, schema.description),
    ...mapIcon(schema.icon),
    ...getDisabled(schema.disabled),
  };
};

const mapIcon = (icon) => (icon ? getCurrencyFlag(icon.name) : null);

const getOptionDescription = (title, description) => {
  if (title && description) {
    const keyForDescription = (title + description).length > 50 ? 'secondary' : 'note';
    return { [keyForDescription]: description };
  }
  return undefined;
};

const getDisabled = (disabled) => {
  if (!isUndefined(disabled) && !isNull(disabled)) {
    return { disabled };
  }
  return undefined;
};
