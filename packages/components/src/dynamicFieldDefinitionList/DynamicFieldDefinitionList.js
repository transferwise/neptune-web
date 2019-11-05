import React, { PureComponent } from 'react';
import Types from 'prop-types';

import DefinitionList from '../definitionList';
import { prepFields } from '../common/requirements';
import createDefinitions from './utils/createDefinitions';

const LAYOUTS = ['vertical', 'horizontal', 'justified'];

class DynamicFieldDefinitionList extends PureComponent {
  static propTypes = {
    model: Types.shape({}).isRequired,
    fields: Types.shape({}).isRequired,
    locale: Types.string,
    title: Types.string,
    narrow: Types.bool,
    layout: Types.string,
  };

  static defaultProps = {
    locale: 'en-GB',
    title: null,
    narrow: false,
    layout: LAYOUTS[0],
  };

  state = {
    fields: prepFields(this.props.fields),
  };

  render() {
    const { model, locale, title, narrow, layout } = this.props;
    const { fields } = this.state;

    return (
      <>
        {title && (
          <div className="m-t-1">
            <h4 className="page-header p-t-3">{title}</h4>
          </div>
        )}

        <DefinitionList
          layout={getDefinitionListLayout(layout, narrow)}
          definitions={createDefinitions(fields, model, locale)}
        />
      </>
    );
  }
}

function getDefinitionListLayout(layout, narrow) {
  const { Layout } = DefinitionList;

  switch (layout) {
    case 'vertical':
      return narrow ? Layout.VERTICAL_ONE_COLUMN : Layout.VERTICAL_TWO_COLUMN;
    case 'horizontal':
      return Layout.HORIZONTAL_UNJUSTIFIED;
    case 'justified':
      return Layout.HORIZONTAL_JUSTIFIED;
    default:
      return undefined;
  }
}

export default DynamicFieldDefinitionList;
