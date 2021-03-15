import React from 'react';
import { parseISO } from 'date-fns';
import { DocLink, getPagesInSection } from '../../utils/pageUtils';
import Meta from '../../components/Meta';

const isBlogPost = (page) => !page?.linkText;

export default function Home() {
  const posts = getPagesInSection({ dir: 'blog' })
    .map(({ component: { meta } }) => meta)
    .filter(isBlogPost)
    .sort((post1, post2) => parseISO(post2.date) - parseISO(post1.date));
  return (
    <>
      {posts.map(({ name, date, authors }, index) => {
        const fileName = `${date}-${name.toLowerCase().replace(/ /g, '-')}`;
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div className="m-b-3" key={`${index}`}>
            <h2>
              <DocLink href={`/blog/${fileName}`}>{name}</DocLink>
            </h2>
            <Meta {...{ date, authors }} />
          </div>
        );
      })}
    </>
  );
}
