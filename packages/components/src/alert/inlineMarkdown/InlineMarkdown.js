import React from 'react';
import Types from 'prop-types';
import Markdown from '../../markdown';
import { MarkdownNodeTypes } from '../../common/markdownNodeTypes';

const allowList = [MarkdownNodeTypes.STRONG];

const InlineMarkdown = (props) => {
  return <Markdown {...props} as="span" allowList={allowList} blockList={undefined} />;
};

InlineMarkdown.propTypes = {
  children: Types.string.isRequired,
  className: Types.string,
};

InlineMarkdown.defaultProps = {
  className: undefined,
};

export default InlineMarkdown;
