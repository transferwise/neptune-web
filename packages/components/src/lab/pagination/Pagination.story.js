import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import Pagination from './Pagination';

export default {
  component: Pagination,
  title: 'Pagination',
};

export const basic = () => {
  const canFetchMorePages = boolean('Can fetch more pages', false);
  const inverse = boolean('Inverse', false);
  const type = select(
    'Type',
    {
      Full: Pagination.Type.FULL,
      'Arrows Only': Pagination.Type.ARROWS_ONLY,
      'Numbers Only': Pagination.Type.NUMBERS_ONLY,
    },
    Pagination.Type.FULL,
  );
  const numberOfPages = number('Number of pages', 10, { min: 1 });
  const currentPageIndex = number('Current page index', 0, { min: 0, max: numberOfPages - 1 });
  return (
    <div style={{ background: inverse ? '#f2f5f7' : undefined }}>
      <Pagination
        canFetchMorePages={canFetchMorePages}
        type={type}
        numberOfPages={numberOfPages}
        currentPageIndex={currentPageIndex}
        onClick={action('Page selected')}
        inverse={inverse}
      />
    </div>
  );
};
