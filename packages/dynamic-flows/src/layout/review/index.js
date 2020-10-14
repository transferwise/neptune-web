import React from 'react';
import Types from 'prop-types';

import { DefinitionList } from '@transferwise/components';
import { marginModel, actionModel, orientationModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicReview = (props) => {
  const review = props.component;

  const mapDefinition = ({ label, value }, index) => {
    return { key: String(index), title: label, value };
  };

  const getReviewLayout = (orientation) => {
    if (orientation === 'horizontal') {
      return DefinitionList.Layout.HORIZONTAL_RIGHT_ALIGNED;
    }
    return DefinitionList.Layout.VERTICAL_ONE_COLUMN;
  };

  const margin = getMarginBottom(review.margin || 'lg');

  const onActionClick = (event) => {
    event.preventDefault();
    props.onAction(review.action);
  };

  const getReviewAction = (action) => {
    return (
      <a href={action.url} className="pull-right" onClick={onActionClick} role="button">
        {action.label}
      </a>
    );
  };

  return (
    <>
      <h6 className="m-b-2">
        {review.text}
        {review.action && getReviewAction(review.action)}
      </h6>
      <div className={margin}>
        <DefinitionList
          layout={getReviewLayout(review.orientation)}
          definitions={review.definitions.map(mapDefinition)}
        />
      </div>
    </>
  );
};

DynamicReview.propTypes = {
  onAction: Types.func.isRequired,
  component: Types.shape({
    text: Types.string,
    definitions: Types.arrayOf(
      Types.shape({
        label: Types.string,
        value: Types.string,
      }),
    ).isRequired,
    margin: marginModel,
    action: actionModel,
    orientation: orientationModel,
  }).isRequired,
};

export default DynamicReview;
