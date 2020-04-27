import React from 'react';
import Types from 'prop-types';
import commonmark from 'commonmark';

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer({ safe: true });

/**
 * Markdown accepts a markdown string and returns the corresponding html markup.
 *
 * @param {object} [as] - html wrapper for the parsed markdown.
 * @param {string} [children] - the string markdown to be converted.
 *
 * @usage `<Markdown>'# Some valid markdown'</Markdown>`
 * */

const Markdown = ({ as: Element, children }) => {
  if (!children) {
    return null;
  }

  const createMarkup = () => {
    const parsed = reader.parse(children);

    return writer.render(parsed);
  };

  return <Element dangerouslySetInnerHTML={{ __html: createMarkup() }} />;
};

Markdown.propTypes = {
  children: Types.string.isRequired,
  as: Types.elementType,
};

Markdown.defaultProps = {
  as: 'div',
};

export default Markdown;
