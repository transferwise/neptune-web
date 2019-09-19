import React from 'react';
import PropTypes from 'prop-types';

const GitHubLink = ({ url }) => (
  <p>
    <a className="btn btn-default" href={url}>
      Edit this page on GitHub
    </a>
  </p>
);

GitHubLink.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GitHubLink;
