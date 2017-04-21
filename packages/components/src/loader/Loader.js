import React from 'react';
import Types from 'prop-types';

const Loader = ({ small }) => {
  if (small) {
    return <span className="btn-loader" />
  }
  return (
    <div className="loader">
      <div className="loader-spinner" />
      <div className="loader-flag">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="-2 -2 56 56">
          <polygon
            className="loader-flag-stroke"
            stroke="#00B9FF"
            strokeWidth="2"
            strokeLinejoin="miter"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray="300"
            strokeDashoffset="300"
            fill="none"
            points="24.6,27.3 0,27.3 14.3,13.7 6.1,0 48.2,0 26.3,52 19.5,52 39.2,5.5 16.8,5.5 21.6,13.6 13.4,21.8 27,21.8" />
        </svg>
        <svg
          className="loader-flag-fill"
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 2 52 48">
          <polygon
            fill="#00B9FF"
            points="6.1,0 14.3,13.7 0,27.3 24.6,27.3 27,21.8 13.4,21.8 21.6,13.6 16.8,5.5 39.2,5.5 19.5,52 26.3,52 48.2,0 " />
        </svg>
      </div>
    </div>
  );
};

Loader.propTypes = { small: Types.bool };

export default Loader;
