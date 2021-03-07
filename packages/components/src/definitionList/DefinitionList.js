import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import { Layout } from '../common';

import './DefinitionList.css';

const isLayoutHorizontal = (layout) =>
  [
    Layout.HORIZONTAL_LEFT_ALIGNED,
    Layout.HORIZONTAL_RIGHT_ALIGNED,
    Layout.HORIZONTAL_JUSTIFIED,
  ].indexOf(layout) >= 0;

const alignmentClassMap = {
  [Layout.HORIZONTAL_RIGHT_ALIGNED]: 'text-sm-right',
  [Layout.HORIZONTAL_JUSTIFIED]: 'text-sm-justify',
};

const DefinitionList = ({ definitions, layout, muted }) => (
  <dl
    className={classNames('tw-definition-list d-flex ', {
      'text-muted': muted,
      'flex-column': layout === Layout.VERTICAL_ONE_COLUMN,
      'tw-definition-list--columns flex-column flex-row--sm': layout === Layout.VERTICAL_TWO_COLUMN,
      'tw-definition-list--horizontal flex-column': isLayoutHorizontal(layout),
    })}
  >
    {definitions.map(({ title, value, key }) => (
      <div className="tw-definition-list__item" key={key}>
        <dt>{title}</dt>
        <dd className={alignmentClassMap[layout] || ''}>{value}</dd>
      </div>
    ))}
  </dl>
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
    DefinitionList.Layout.HORIZONTAL_RIGHT_ALIGNED,
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
