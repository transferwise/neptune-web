import { isObject, isUndefined, isNull } from '../type-validators';

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
      case 'integer':
        return cleanModelWithNumberSchema(model);
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
    if (model && typeof model[property] !== 'undefined') {
      const newValue = getValidModelParts(model[property], schema.properties[property]);
      if (newValue !== null) {
        cleanedModel[property] = newValue;
      }
    }
  });
  return cleanedModel;
}

function cleanModelWithArraySchema(model, schema) {
  if (Array.isArray(model)) {
    return model.map((childModel) => getValidModelParts(childModel, schema));
  }
  return null;
}

function cleanModelWithStringSchema(model) {
  if (typeof model === 'string') {
    return model;
  }
  return null;
}

function cleanModelWithNumberSchema(model) {
  // eslint-disable-next-line
  if (typeof model === 'number' && !isNaN(model)) {
    return model;
  }
  return null;
}

function cleanModelWithBooleanSchema(model) {
  if (typeof model === 'boolean') {
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

      // If we're dealing with two objects, combine them into one
      if (isObject(combined) && isObject(current)) {
        return { ...combined, ...current };
      }

      // If the current one is null, return what we already had
      if (isNull(current)) {
        return combined;
      }

      return current;
    }, null);
}

export { getValidModelParts }; // eslint-disable-line
