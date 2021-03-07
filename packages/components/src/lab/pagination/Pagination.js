import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import { ChevronLeft, ChevronRight } from '@transferwise/icons';

import PaginationLink from './paginationLink';

import './Pagination.css';

const Type = {
  NUMBERS_ONLY: 'numbersOnly',
  ARROWS_ONLY: 'arrowsOnly',
  FULL: 'full',
};

const Pagination = ({
  type,
  numberOfPages,
  currentPageIndex,
  onClick,
  canFetchMorePages,
  className,
}) => {
  const showArrows = type !== Type.NUMBERS_ONLY;
  const disableLeftArrow = currentPageIndex === 0;
  const disableRightArrow = !canFetchMorePages && currentPageIndex === numberOfPages - 1;

  const pages = [];
  if (type !== Type.ARROWS_ONLY) {
    switch (currentPageIndex) {
      case 0:
        pages.push({ index: 0, active: true });
        if (numberOfPages > 1) {
          pages.push({ index: 1 });
        }
        if (numberOfPages > 2) {
          pages.push({ index: 2 });
        }
        break;
      case numberOfPages - 1:
        if (numberOfPages > 2) {
          pages.push({ index: numberOfPages - 3 });
        }
        if (numberOfPages > 1) {
          pages.push({ index: numberOfPages - 2 });
        }
        pages.push({ index: numberOfPages - 1, active: true });
        break;
      default:
        pages.push(
          { index: currentPageIndex - 1 },
          { index: currentPageIndex, active: true },
          { index: currentPageIndex + 1 },
        );
        break;
    }

    const firstPageIndex = pages[0].index;
    if (firstPageIndex > 0) {
      if (firstPageIndex > 2) {
        pages.unshift({ label: '...', index: firstPageIndex - 1 });
      } else if (firstPageIndex === 2) {
        pages.unshift({ index: 1 });
      }
      pages.unshift({ index: 0 });
    }

    const lastPageIndex = pages[pages.length - 1].index;
    if (lastPageIndex < numberOfPages - 1) {
      if (lastPageIndex < numberOfPages - 3) {
        pages.push({ label: '...', index: lastPageIndex + 1 });
      } else if (lastPageIndex === numberOfPages - 3) {
        pages.push({ index: numberOfPages - 2 });
      }
      pages.push({ index: numberOfPages - 1 });
    }

    if (canFetchMorePages) {
      pages.push({ label: '...', index: numberOfPages });
    }
  }

  return (
    <nav role="navigation" aria-label="Pagination navigation">
      <ul className={classNames('tw-pagination', className)}>
        {showArrows && (
          <PaginationLink
            pageNumber={currentPageIndex - 1}
            onClick={onClick}
            disabled={disableLeftArrow}
          >
            <ChevronLeft />
          </PaginationLink>
        )}

        {pages.map((page) => {
          const label = page.label || page.index + 1;
          return (
            <PaginationLink
              key={page.index}
              pageNumber={page.index}
              onClick={onClick}
              active={page.active}
            >
              {label}
            </PaginationLink>
          );
        })}

        {showArrows && (
          <PaginationLink
            pageNumber={currentPageIndex + 1}
            onClick={onClick}
            disabled={disableRightArrow}
          >
            <ChevronRight />
          </PaginationLink>
        )}
      </ul>
    </nav>
  );
};

Pagination.Type = Type;

Pagination.propTypes = {
  type: Types.oneOf(
    Pagination.Type.NUMBERS_ONLY,
    Pagination.Type.ARROWS_ONLY,
    Pagination.Type.FULL,
  ),
  numberOfPages: Types.number.isRequired,
  currentPageIndex: Types.number.isRequired,
  onClick: Types.func.isRequired,
  canFetchMorePages: Types.bool,
  className: Types.string,
};

Pagination.defaultProps = {
  type: Pagination.Type.FULL,
  canFetchMorePages: false,
  className: undefined,
};

export default Pagination;
