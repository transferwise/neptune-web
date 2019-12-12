import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import { Layout } from '../common';

const DefinitionList = ({ definitions, layout, muted }) => (
  <div className={classNames({ row: layout === Layout.VERTICAL_TWO_COLUMN })}>
    {definitions.map(({ title, value, key }) => (
      <div className={classNames({ 'col-sm-6': layout === Layout.VERTICAL_TWO_COLUMN })} key={key}>
        <dl
          className={classNames({
            'dl-horizontal':
              layout === Layout.HORIZONTAL_JUSTIFIED || layout === Layout.HORIZONTAL_LEFT_ALIGNED,
          })}
        >
          <dt className={classNames({ 'text-muted': muted })}>{title}</dt>
          <dd
            className={classNames('text-word-break', {
              'text-muted': muted,
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

DefinitionList.Layout = Layout;

DefinitionList.propTypes = {
  definitions: Types.arrayOf(
    Types.shape({
      title: Types.node.isRequired,
      value: Types.node.isRequired,
      key: Types.string.isRequired,
    }),
  ),
  layout: Types.oneOf([
    DefinitionList.Layout.VERTICAL_TWO_COLUMN,
    DefinitionList.Layout.VERTICAL_ONE_COLUMN,
    DefinitionList.Layout.HORIZONTAL_JUSTIFIED,
    DefinitionList.Layout.HORIZONTAL_LEFT_ALIGNED,
  ]),
  muted: Types.bool,
};

DefinitionList.defaultProps = {
  definitions: [],
  layout: DefinitionList.Layout.VERTICAL_TWO_COLUMN,
  muted: false,
};

DefinitionList.Layout = Layout;

export default DefinitionList;
