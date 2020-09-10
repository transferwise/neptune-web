import React, { PureComponent } from 'react';
import Types from 'prop-types';

import DefinitionList from '../definitionList';
import { prepFields } from '../common/requirements';
import createDefinitions from './utils/createDefinitions';

import { Layout } from '../common';

class DynamicFieldDefinitionList extends PureComponent {
  static Layout = Layout;

  static Layout = Layout;

  constructor(props) {
    super(props);
    this.state = {
      fields: prepFields(props.fields),
    };
  }

  render() {
    const { model, locale, title, layout } = this.props;
    const { fields } = this.state;

    return (
      <>
        {title && (
          <div className="m-t-1">
            <h4 className="page-header p-t-3">{title}</h4>
          </div>
        )}

        <DefinitionList layout={layout} definitions={createDefinitions(fields, model, locale)} />
      </>
    );
  }
}

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
