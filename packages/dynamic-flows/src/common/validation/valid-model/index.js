import {
  isString,
  isNumber,
  isInteger,
  isBoolean,
  isObject,
  isArray,
  isUndefined,
  isNull,
  isEmpty,
} from '@transferwise/neptune-validation';

function getValidModelParts(model, schema) {
  if (schema.allOf) {
    return cleanModelWithAllOfSchema(model, schema);
  }

  if (schema.oneOf) {
    return cleanModelWithOneOfSchema(model, schema);
  }

  if (schema.enum && schema.enum.indexOf(model) >= 0) {
    return model;
  }

  if (!isUndefined(schema.const) && model === schema.const) {
    return model;
  }

  if (schema.type) {
    switch (schema.type) {
      case 'object':
        return cleanModelWithObjectSchema(model, schema);
      case 'array':
        return cleanModelWithArraySchema(model, schema);
      case 'string':
        return cleanModelWithStringSchema(model);
      case 'number':
        return cleanModelWithNumberSchema(model);
      case 'integer':
        return cleanModelWithIntegerSchema(model);
      case 'boolean':
        return cleanModelWithBooleanSchema(model);
      default:
        return null;
    }
  }

  // Unrecognised schema
  return null;
}

function cleanModelWithObjectSchema(model, schema) {
  const cleanedModel = {};
  Object.keys(schema.properties).forEach((property) => {
    // If the property exists in the model, clean it, and add it
    if (model && !isUndefined(model[property])) {
      const newValue = getValidModelParts(model[property], schema.properties[property]);
      if (!isNull(newValue)) {
        cleanedModel[property] = newValue;
      }
    }
  });
  return cleanedModel;
}

function cleanModelWithArraySchema(model, schema) {
  if (isArray(model)) {
    return model.map((childModel) => getValidModelParts(childModel, schema));
  }
  return null;
}

function cleanModelWithStringSchema(model) {
  if (isString(model)) {
    if (isEmpty(model)) {
      return null;
    }
    return model;
  }
  return null;
}

function cleanModelWithNumberSchema(model) {
  if (isNumber(model)) {
    return model;
  }
  return null;
}

function cleanModelWithIntegerSchema(model) {
  if (isInteger(model)) {
    return model;
  }
  return null;
}

function cleanModelWithBooleanSchema(model) {
  if (isBoolean(model)) {
    return model;
  }
  return null;
}

function cleanModelWithAllOfSchema(model, schema) {
  let cleanedModel = {};
  let validSubsetOfModel;

  schema.allOf.forEach((nestedSchema) => {
    validSubsetOfModel = getValidModelParts(model, nestedSchema);

    if (typeof validSubsetOfModel === 'object') {
      // Extend model with valid subset
      cleanedModel = { ...cleanedModel, ...validSubsetOfModel };
    }
  });
  return cleanedModel;
}

function cleanModelWithOneOfSchema(model, schema) {
  return schema.oneOf
    .map((nestedSchema) => getValidModelParts(model, nestedSchema))
    .reduce((combined, current) => {
      // If we didn't find anything valid yet, and current is good, return it
      if (isNull(combined)) {
        return current;
      }

      // If we're dealing with two objects, deep merge them into one
      if (isObject(combined) && isObject(current)) {
        return deepMergeObject(combined, current);
      }

      // If the current one is null, return what we already had
      if (isNull(current)) {
        return combined;
      }

      return current;
    }, null);
}

function deepMergeObject(object1, object2) {
  const combined = { ...object1 };
  Object.keys(object2).forEach((property) => {
    if (isObject(object1[property]) && isObject(object2[property])) {
      combined[property] = deepMergeObject(object1[property], object2[property]);
    } else {
      combined[property] = object2[property];
    }
  });
  return combined;
}

export { getValidModelParts }; // eslint-disable-line
