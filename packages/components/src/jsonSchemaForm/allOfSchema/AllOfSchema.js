import React, { useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import GenericSchema from '../genericSchema';
import { getValidModelParts } from '../validation/valid-model';

const AllOfSchema = (props) => {
  const onChange = (index, model, schema) => {
    models[index] = getValidModelParts(model, schema);
    setModels(models);
    props.onChange(combineModels(models), schema);
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
              onChange={(model) => onChange(index, model, schema)}
              submitted={props.submitted}
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
};

AllOfSchema.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
};

export default AllOfSchema;
