import React from 'react';
import Types from 'prop-types';
import { parseISO } from 'date-fns';
import { printDate } from '../utils/pageUtils';

export default function Meta({ date, authors }) {
  const renderAuthors = () => (
    <>
      {authors?.map(({ name, githubUsername }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={`${index}`}>
          {index === 0 && 'by '}
          <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">
            {name}
          </a>
          {index < authors.length - 1 && ', '}
          {index === authors.length - 2 && ' and '}
        </span>
      ))}
    </>
  );
  const createdDate = parseISO(date);
  return (
    <small>
      {printDate(createdDate)} {renderAuthors()}
    </small>
  );
}

Meta.propTypes = {
  date: Types.string.isRequired,
  authors: Types.arrayOf(
    Types.shape({
      name: Types.string.isRequired,
      githubUsername: Types.string.isRequired,
    }),
  ).isRequired,
};
