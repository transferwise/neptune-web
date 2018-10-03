import Types from 'prop-types';

export const dialogPropTypes = {
  title: Types.node.isRequired,
  body: Types.node.isRequired,
  footer: Types.node,
  size: Types.oneOf(['lg', 'md', 'sm']),
  onClose: Types.func.isRequired,
  role: Types.string,
};

export const dialogDefaultProps = {
  footer: null,
  size: 'md',
  role: 'dialog',
};
