import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

const Layout = {
  VERTICAL_TWO_COLUMN: 'VERTICAL_TWO_COLUMN',
  VERTICAL_ONE_COLUMN: 'VERTICAL_ONE_COLUMN',
  HORIZONTAL_JUSTIFIED: 'HORIZONTAL_JUSTIFIED',
  HORIZONTAL_LEFT_ALIGNED: 'HORIZONTAL_LEFT_ALIGNED',
};

const DefinitionList = ({ definitions, layout }) => (
  <div className={classNames({ row: layout === Layout.VERTICAL_TWO_COLUMN })}>
    {definitions.map(({ title, value, key }) => (
      <div className={classNames({ 'col-sm-6': layout === Layout.VERTICAL_TWO_COLUMN })} key={key}>
        <dl
          className={classNames({
            'dl-horizontal':
              layout === Layout.HORIZONTAL_JUSTIFIED || layout === Layout.HORIZONTAL_LEFT_ALIGNED,
          })}
        >
          <dt>{title}</dt>
          <dd
            className={classNames('text-word-break', {
              'text-sm-right': layout === Layout.HORIZONTAL_JUSTIFIED,
            })}
          >
            {value}
          </dd>
        </dl>
      </div>
    ))}
  </div>
);

const LayoutValues = Object.keys(Layout).map(key => Layout[key]);

DefinitionList.propTypes = {
  definitions: Types.arrayOf(
    Types.shape({
      title: Types.node.isRequired,
      value: Types.node.isRequired,
      key: Types.string.isRequired,
    }),
  ),
  layout: Types.oneOf(LayoutValues),
};

DefinitionList.defaultProps = {
  definitions: [],
  layout: Layout.VERTICAL_TWO_COLUMN,
};

DefinitionList.Layout = Layout;

export default DefinitionList;
