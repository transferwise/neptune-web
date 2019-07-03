import Types from 'prop-types';

export const dialogPropTypes = {
  title: Types.node,
  body: Types.node.isRequired,
  footer: Types.node,
  size: Types.oneOf(['xl', 'lg', 'md', 'sm']),
  onClose: Types.func.isRequired,
  role: Types.string,
  className: Types.string,
};

export const dialogDefaultProps = {
  footer: null,
  size: 'md',
  role: 'dialog',
  className: '',
};
