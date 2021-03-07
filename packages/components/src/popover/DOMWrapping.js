import React from 'react';

export function wrapInDOMElementIfNecessary(node) {
  return isNativeDOMElement(node) ? node : <span>{node}</span>;
}

function isNativeDOMElement(node) {
  return typeof node.type === 'string';
}
