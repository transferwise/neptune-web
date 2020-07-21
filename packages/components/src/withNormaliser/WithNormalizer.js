import React from 'react';

import { normalizeEvent } from './validation/event-utilities';

const methodsToExtend = ['onChange', 'onBlur', 'onFocus', 'onSuccess', 'onFailure'];
/**
 *
 * This function is a temporary function used to normalize the returned values from our form related components. Please DO NOT USE THIS COMPONENT.
 */
const WithNormaliser = ({ children }) => {
  const handleChildEvent = (childHandler) => (event) => {
    const value = normalizeEvent(event, children.props.type);

    childHandler(value);
  };

  const eventHandlers = {};

  methodsToExtend.forEach((method) => {
    if (children.props[method]) {
      eventHandlers[method] = handleChildEvent(children.props[method]);
    }
  });

  return React.cloneElement(children, {
    ...eventHandlers,
  });
};

export default WithNormaliser;
