import React from 'react';
import Types from 'prop-types';

import DefinitionList from '../definitionList';
import { prepFields } from '../common/requirements';
import createDefinitions from './utils/createDefinitions';

import { Layout } from '../common';

const DynamicFieldDefinitionList = ({ model, locale, title, layout, fields }) => (
  <>
    {title && (
      <div className="m-t-1">
        <div className="p-t-3 h4">{title}</div>
      </div>
    )}

    <DefinitionList
      layout={layout}
      definitions={createDefinitions(prepFields(fields), model, locale)}
    />
  </>
);

DynamicFieldDefinitionList.Layout = Layout;

DynamicFieldDefinitionList.propTypes = {
  model: Types.shape({}).isRequired,
  fields: Types.shape({}).isRequired,
  locale: Types.string,
  title: Types.string,
  layout: Types.oneOf([
    DynamicFieldDefinitionList.Layout.VERTICAL_TWO_COLUMN,
    DynamicFieldDefinitionList.Layout.VERTICAL_ONE_COLUMN,
    DynamicFieldDefinitionList.Layout.HORIZONTAL_JUSTIFIED,
    DynamicFieldDefinitionList.Layout.HORIZONTAL_LEFT_ALIGNED,
  ]),
};

DynamicFieldDefinitionList.defaultProps = {
  locale: 'en-GB',
  title: null,
  layout: DynamicFieldDefinitionList.Layout.VERTICAL_TWO_COLUMN,
};

export default DynamicFieldDefinitionList;
