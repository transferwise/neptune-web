import React from 'react';

import { wrapInDOMElementIfNecessary as wrap } from './DOMWrapping';

const Message = ({ children }) => <>{children}</>; // eslint-disable-line react/prop-types

describe('DOM wrapping', () => {
  it('wraps string in span', () => {
    expect(wrap('Some string')).toEqual(<span>Some string</span>);
  });

  it('wraps fragment in span', () => {
    expect(
      wrap(
        <>
          Some content
          <strong>Some strong content</strong>
        </>,
      ),
    ).toEqual(
      <span>
        <>
          Some content
          <strong>Some strong content</strong>
        </>
      </span>,
    );
  });

  it('wraps react component in span', () => {
    expect(wrap(<Message>some key</Message>)).toEqual(
      <span>
        <Message>some key</Message>
      </span>,
    );
  });

  it('does not wrap native dom element', () => {
    expect(wrap(<div>Some content</div>)).toEqual(<div>Some content</div>);
  });
});
