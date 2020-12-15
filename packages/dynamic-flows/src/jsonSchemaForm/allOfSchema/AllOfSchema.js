import React, { useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import GenericSchema from '../genericSchema';
import { getValidModelParts } from '../../common/validation/valid-model';

const AllOfSchema = (props) => {
  const onChangeModelIndex = (index, model, triggerSchema, triggerModel) => {
    const modelSchema = props.schema.allOf[index];
    models[index] = getValidModelParts(model, modelSchema);
    setModels(models);
    props.onChange(combineModels(models), triggerSchema, triggerModel);
  };

  const splitModel = (model, schemas) => {
    // If we receive a model, break it down to parts valid for each schema
    return schemas.map((schema) => getValidModelParts(model, schema) || {});
  };

  const combineModels = (models) => {
    return models.reduce((current, combined) => {
      return { ...combined, ...current };
    }, {});
  };

  const getSchemaColumnClasses = (width) => {
    return {
      'col-xs-12': true,
      'col-sm-6': width === 'md',
      'col-sm-4': width === 'sm',
    };
  };

  const [models, setModels] = useState(splitModel(props.model, props.schema.allOf));

  return (
    <>
      {props.schema.title && <h3 className="page-header">{props.schema.title}</h3>}
      {props.schema.description && <p>{props.schema.description}</p>}
      <div className="row">
        {props.schema.allOf.map((schema, index) => (
          <div
            key={index} // eslint-disable-line
            className={classNames(getSchemaColumnClasses(schema.width))}
          >
            <GenericSchema
              schema={schema}
              model={models[index]}
              errors={props.errors}
              locale={props.locale}
              translations={props.translations}
              onChange={(model, triggerSchema, triggerModel) =>
                onChangeModelIndex(index, model, triggerSchema, triggerModel)
              }
              submitted={props.submitted}
              disabled={props.disabled}
              onPersistAsync={props.onPersistAsync}
            />
          </div>
        ))}
      </div>
    </>
  );
};

AllOfSchema.propTypes = {
  schema: Types.shape({
    title: Types.string,
    description: Types.string,
    allOf: Types.arrayOf(Types.object).isRequired,
    width: Types.string,
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  locale: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  disabled: Types.bool,
  onPersistAsync: Types.func.isRequired,
};

AllOfSchema.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
  disabled: false,
};

export default AllOfSchema;
