import React from 'react';
import Types from 'prop-types';
import commonmark from 'commonmark';
import difference from 'lodash.difference';
import { MarkdownNodeTypes } from '../common/markdownNodeTypes';
import { logActionRequired } from '../utilities';

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer({ safe: true });

const NODE_TYPE_LIST = Object.values(MarkdownNodeTypes);

const Markdown = ({ as: Element, children, className, allowList, blockList }) => {
  if (!children) {
    return null;
  }

  if (allowList?.length && blockList?.length) {
    logActionRequired(
      'Markdown supports only one of `allowList` or `blockList` to be used at a time. `blockList` will be ignored.',
    );
  }

  const parser = (nodes) => {
    const parsed = reader.parse(nodes);

    if (allowList || blockList) {
      const toExclude = allowList ? difference(NODE_TYPE_LIST, allowList) : blockList;

      return stripNodes({ parsed, blockList: toExclude });
    }
    return parsed;
  };

  const createMarkup = () => {
    const parsed = parser(children);
    return writer.render(parsed);
  };

  return <Element className={className} dangerouslySetInnerHTML={{ __html: createMarkup() }} />;
};

function stripNodes({ blockList, parsed }) {
  if (!parsed) {
    return parsed;
  }

  const walker = parsed.walker();
  let event = walker.next();

  while (event) {
    const { node } = event;
    if (blockList.includes(node.type)) {
      if (!event.entering) {
        while (node.firstChild) {
          node.insertBefore(node.firstChild);
        }
        node.unlink();
      }
    }
    event = walker.next();
  }
  return walker.root;
}

Markdown.propTypes = {
  children: Types.string.isRequired,
  as: Types.elementType,
  className: Types.string,
  allowList: Types.arrayOf(Types.oneOf(NODE_TYPE_LIST)),
  blockList: Types.arrayOf(Types.oneOf(NODE_TYPE_LIST)),
};

Markdown.defaultProps = {
  as: 'div',
  className: undefined,
  allowList: null,
  blockList: null,
};

export default Markdown;
