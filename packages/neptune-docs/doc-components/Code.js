import refractor from 'refractor';
import rehype from 'rehype';
import React from 'react';
import PropTypes from 'prop-types';

const Code = ({ children, lang }, { darkBg } = {}) => (
  <pre className={(darkBg ? 'dark' : '') + (lang ? ` ${lang}` : '')}>
    {lang ? (
      <code
        className={`language-${lang}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: rehype()
            .stringify({
              type: 'root',
              children: refractor.highlight(children, lang),
            })
            .toString(),
        }}
      />
    ) : (
      <code>{children}</code>
    )}
  </pre>
);

Code.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Code;
