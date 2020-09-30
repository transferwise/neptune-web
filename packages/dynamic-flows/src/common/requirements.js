/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

const prepRequirements = (alternatives) => {
  if (!alternatives || !alternatives.length) {
    return [];
  }

  const preppedAlternatives = copyOf(alternatives);

  preppedAlternatives.forEach((alternative) => {
    if (alternative.prepared) {
      return;
    }

    prepLegacyAlternatives(alternative);

    alternative.properties = prepFields(alternative.properties || alternative.fields);

    // If we're still treating type as a special case, move it to a hidden value
    if (alternative.type && alternative.type !== 'object' && !alternative.types) {
      alternative.properties.type = {
        type: 'string',
        enum: [alternative.type],
        required: true,
        hidden: true,
      };

      alternative.type = 'object';
    }

    alternative.prepared = true;
  });

  return preppedAlternatives;
};

const prepFields = (fields, model, validationMessages) => {
  if (!fields) {
    return {};
  }

  let preparedFields = copyOf(fields);

  preparedFields = flattenFieldsWithGroups(preparedFields);
  preparedFields = transformFieldArrayToMap(preparedFields);
  preparedFields = transformNestedKeysToNestedSpecs(preparedFields);

  Object.keys(preparedFields).forEach((key) => {
    preparedFields[key] = prepField(preparedFields[key], model, validationMessages);
  });

  return preparedFields;
};

const prepField = (field, model, validationMessages) => {
  const preparedField = copyOf(field);

  prepLegacyProps(preparedField);
  prepType(preparedField);
  prepPattern(preparedField);
  prepValidationMessages(preparedField, validationMessages);

  return preparedField;
};

/**
 * In an older format we had an extra fieldGroup level, here we flatten that out
 * So the inner arrays of fields within the different field groups are flattened
 * to a single array, which is returned.
 */
const flattenFieldsWithGroups = (fields) => {
  if (fields instanceof Array) {
    let flattenedFields = [];
    fields.forEach((field) => {
      // If we've been given a group with nested fields, break them out.
      if (field.fields) {
        flattenedFields = flattenedFields.concat(flattenFieldWithGroup(field, field.fields));
      } else if (field.group) {
        flattenedFields = flattenedFields.concat(flattenFieldWithGroup(field, field.group));
      } else {
        // Otherwise it's a regular field, just add it.
        flattenedFields.push(field);
      }
    });
    return flattenedFields;
  }
  return fields;
};

const flattenFieldWithGroup = (field, subFields) => {
  // If first field doesn't have a label, use the one from the group
  if (field.name && subFields.length && !subFields[0].name) {
    subFields[0].name = field.name;
  }

  if (field.width && subFields.length && !subFields[0].width) {
    subFields[0].width = field.width;
  }

  // If there was a tooltip at fieldGroup level move it to first field.
  if (field.tooltip && subFields.length && !subFields[0].help) {
    subFields[0].help = { message: field.tooltip };
  }

  if (field.info && subFields.length && !subFields[0].help) {
    subFields[0].help = { message: field.info };
  }

  // If there are two parts of this group, render them side by side
  if (subFields.length === 2) {
    subFields.forEach((nestedField) => {
      nestedField.width = 'md';
    });
  }

  // If there are three parts, render the first two side by side
  if (subFields.length === 3) {
    subFields[0].width = 'md';
    subFields[1].width = 'md';
  }

  return subFields;
};

/*
 * Some older requirements return an array of fields, where it should be a map
 * from the property name to the spec.  This converts arrays to maps.
 */
const transformFieldArrayToMap = (fields) => {
  if (fields instanceof Array) {
    const fieldMap = {};
    fields.forEach((field) => {
      const key = field.key || field.name;
      delete field.key;

      fieldMap[key] = copyOf(field);
    });
    return fieldMap;
  }
  return fields;
};

/*
 * Some older format return keys like 'address.city', expecting the value of
 * city to be nested inside an address object.  This function creates a spec of
 * type 'object', and nests such fields inside of it.  When we render we pass
 * this object spec to a nested fieldset.
 */
const transformNestedKeysToNestedSpecs = (fieldMap) => {
  if (fieldMap instanceof Array) {
    throw new Error('Expecting a map of fields, not an array');
  }

  const nestedFields = {};
  Object.keys(fieldMap).forEach((key) => {
    if (key.indexOf('.') > 0) {
      // If the key contains a period we need to nest the fields in another object
      const pathSections = key.split('.');
      const nestedKey = pathSections[0];

      // If this sub object doesn't exist yet, create it
      if (!nestedFields[nestedKey]) {
        nestedFields[nestedKey] = {
          type: 'object',
          properties: {},
        };
      }
      nestedFields[nestedKey].properties[pathSections[1]] = fieldMap[key];
    } else {
      nestedFields[key] = fieldMap[key];
    }
  });
  return nestedFields;
};

const prepType = (field) => {
  const type = field.type && field.type.toLowerCase && field.type.toLowerCase();

  switch (type) {
    case 'text':
      field.type = 'string';
      break;
    case 'date':
      field.type = 'string';
      field.format = 'date';
      break;
    case 'password':
      field.type = 'string';
      field.control = 'password';
      break;
    case 'checkbox':
      field.type = 'boolean';
      break;
    case 'select':
      if (!field.control) {
        field.control = 'select';
      }
      delete field.type;
      break;
    case 'radio':
      field.control = 'radio';
      delete field.type;
      break;
    case 'upload':
      field.type = 'string';
      field.format = 'base64url';
      break;
    case 'tel':
      field.type = 'string';
      field.format = 'phone';
      break;
    case 'textarea':
      field.type = 'string';
      field.control = 'textarea';
      break;
    default:
  }

  if (!field.control && field.type !== 'object') {
    field.control = getControlType(field);
  }
};

const prepLegacyAlternatives = (alternative) => {
  if (!alternative.title && alternative.label) {
    alternative.title = alternative.label;
  }
  if (!alternative.title) {
    alternative.title = getNameFromType(alternative.type);
  }
  if (!alternative.type && alternative.name) {
    alternative.type = alternative.name;
  }
  if (!alternative.description && alternative.tooltip) {
    alternative.description = alternative.tooltip;
  }
  if (alternative.fieldGroups && !alternative.fields) {
    alternative.fields = flattenFieldsWithGroups(alternative.fieldGroups);
    delete alternative.fieldGroups;
  }
};

const prepLegacyProps = (field) => {
  if (field.name && !field.title) {
    field.title = field.name;
    delete field.name;
  }

  if (field.validationRegexp) {
    field.pattern = field.validationRegexp;
    delete field.validationRegexp;
  }

  if (field.min) {
    field.minimum = field.min;
    delete field.min;
  }

  if (field.max) {
    field.maximum = field.max;
    delete field.max;
  }

  if (field.example && !field.placeholder) {
    field.placeholder = field.example;
    delete field.example;
  }

  if (field.tooltip && !field.help) {
    field.help = { message: field.tooltip };
    delete field.tooltip;
  }

  if (field.valuesAllowed && !field.values) {
    field.values = field.valuesAllowed;
    delete field.valuesAllowed;
  }

  if (field.values && field.values.map) {
    field.values = prepLegacyValues(field.values);
  }

  if (field.value && !field.default) {
    field.default = field.value;
    delete field.value;
  }

  if (field.values) {
    // In some legacy arrays the first value is a placeholder, extract it.
    if (
      field.values &&
      field.values.length &&
      field.values[0] &&
      !field.values[0].value &&
      field.values[0].label &&
      !field.placeholder
    ) {
      field.placeholder = field.values[0].label;
      field.values = field.values.slice(1);
    }
  }
};

const prepLegacyValues = (values) => values.map(prepLegacyValue);

const prepLegacyValue = (value) => {
  if (!value.label && value.title) {
    value.label = value.title;
    delete value.title;
  }
  if (!value.label && value.name) {
    value.label = value.name;
    delete value.name;
  }

  if (!value.value && value.code) {
    value.value = value.code;
    delete value.code;
  }
  if (!value.value && value.key) {
    value.value = value.key;
    delete value.key;
  }

  return value;
};

const prepPattern = (field) => {
  if (field.pattern) {
    try {
      RegExp(field.pattern);
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.warn('API regexp is invalid');
      delete field.pattern;
    }
  } else {
    delete field.pattern;
  }
};

const prepValidationMessages = (field, validationMessages) => {
  field.validationMessages = field.validationMessages
    ? field.validationMessages
    : validationMessages;

  if (!field.validationMessages) {
    delete field.validationMessages;
    return;
  }

  if (field.validationMessages.minimum) {
    field.validationMessages.min = field.validationMessages.minimum;
    delete field.validationMessages.minimum;
  }
  if (field.validationMessages.maximum) {
    field.validationMessages.max = field.validationMessages.maximum;
    delete field.validationMessages.maximum;
  }
};

const getControlType = (field) => {
  if (field.control) {
    return field.control.toLowerCase();
  }
  if (field.hidden) {
    return 'hidden';
  }
  if (field.values && field.values.length) {
    return getSelectionType(field);
  }

  switch (field.type) {
    case 'string':
      return getControlForStringFormat(field.format);
    case 'number':
    case 'integer':
      return 'number';
    case 'boolean':
      return 'checkbox';
    default:
      return 'text';
  }
};

const getControlForStringFormat = (format) => {
  switch (format) {
    case 'date':
      return 'date';
    case 'base64url':
      return 'file';
    case 'password':
      return 'password';
    case 'uri':
      return 'text'; // 'url'; - not implemented
    case 'email':
      return 'text'; // 'email'; - not implemented
    case 'phone':
      return 'tel';
    default:
      return 'text';
  }
};

const getSelectionType = (field) => {
  if (field.control) {
    return field.control;
  }
  if (field.type === 'select') {
    return 'select';
  }
  if (field.type === 'radio') {
    return 'radio';
  }

  if (field.values) {
    return field.values.length > 3 ? 'select' : 'radio';
  }
  return 'select';
};

const copyOf = (obj) => JSON.parse(JSON.stringify(obj));

/**
 * Some older requirments formats do not include a label for alternatives
 */
const getNameFromType = (tabType) => {
  if (tabType && tabType.length > 0) {
    const tabNameWithSpaces = tabType.toLowerCase().split('_').join(' '); // String.replace method only replaces first instance
    return tabNameWithSpaces.charAt(0).toUpperCase() + tabNameWithSpaces.slice(1);
  }
  return '';
};

export { prepFields, getControlType };
