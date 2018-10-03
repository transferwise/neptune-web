import React from 'react';
import Types from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';

const TRANSITION_DURATION_IN_MILLISECONDS = 150;

const WithInTransition = ({ isIn, children }) => (
  <CSSTransition
    in={isIn}
    classNames={{ enterDone: 'in' }}
    timeout={TRANSITION_DURATION_IN_MILLISECONDS}
    unmountOnExit
  >
    {children}
  </CSSTransition>
);

WithInTransition.propTypes = {
  isIn: Types.bool,
  children: Types.node.isRequired,
};

WithInTransition.defaultProps = {
  isIn: false,
};

export default WithInTransition;
