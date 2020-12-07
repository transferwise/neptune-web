import React, { useState, useEffect } from 'react';
import isEqual from 'lodash.isequal';
import Types from 'prop-types';
import classNames from 'classnames';
import GenericSchema from '../genericSchema';
import { getValidModelParts } from '../../common/validation/valid-model';
import DynamicAlert from '../../layout/alert';

const ObjectSchema = (props) => {
  const [model, setModel] = useState({ ...(props.model || {}) });

  const onChangeProperty = (propertyName, propertyModel, triggerSchema, triggerModel) => {
    if (propertyModel !== null) {
      model[propertyName] = propertyModel;
    } else {
      delete model[propertyName];
    }
    setModel(model);
    props.onChange(model, triggerSchema, triggerModel);
  };

  const getSchemaColumnClasses = (width) => {
    return {
      'col-xs-12': true,
      'col-sm-6': width === 'md',
      'col-sm-4': width === 'sm',
    };
  };

  const isRequired = (propertyName) =>
    props.schema.required && props.schema.required.indexOf(propertyName) >= 0;

  useEffect(() => {
    // When the schema changes, only retain valid parts of the model
    const newModel = getValidModelParts(model, props.schema);
    setModel(newModel);
    if (!isEqual(newModel, model)) {
      const triggerModel = newModel;
      props.onChange(newModel, props.schema, triggerModel);
    }
  }, [props.schema]);

  const orderedPropertyNames = [
    ...new Set([...(props.schema.displayOrder || []), ...Object.keys(props.schema.properties)]),
  ];

  return (
    <fieldset>
      {props.schema.title && !props.hideTitle && <legend> {props.schema.title} </legend>}
      {props.schema.description && !props.hideTitle && <p> {props.schema.description} </p>}

      {props.schema.alert && <DynamicAlert component={props.schema.alert} />}

      <div className="row">
        {orderedPropertyNames.map((propertyName) => (
          <div
            key={propertyName}
            className={classNames(
              getSchemaColumnClasses(props.schema.properties[propertyName].width),
            )}
          >
            <GenericSchema
              schema={props.schema.properties[propertyName]}
              model={props.model && props.model[propertyName]}
              errors={props.errors && props.errors[propertyName]}
              locale={props.locale}
              translations={props.translations}
              onChange={(newModel, triggerSchema, triggerModel) =>
                onChangeProperty(propertyName, newModel, triggerSchema, triggerModel)
              }
              submitted={props.submitted}
              required={isRequired(propertyName)}
              disabled={props.disabled}
              onPersistAsync={props.onPersistAsync}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
};

ObjectSchema.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['object']).isRequired,
    alert: Types.shape({
      context: Types.string,
      markdown: Types.string,
    }),
    properties: Types.shape({}).isRequired,
    required: Types.arrayOf(Types.string),
    title: Types.string,
    description: Types.string,
    width: Types.oneOf(['sm', 'md', 'lg']),
    displayOrder: Types.arrayOf(Types.string),
  }).isRequired,
  model: Types.shape({}),
  errors: Types.shape({}),
  locale: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  hideTitle: Types.bool,
  disabled: Types.bool,
  onPersistAsync: Types.func.isRequired,
};

ObjectSchema.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
  hideTitle: false,
  disabled: false,
};

export default ObjectSchema;
