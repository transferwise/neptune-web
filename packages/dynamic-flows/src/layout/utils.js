const getMarginBottom = (size) => {
  switch (size) {
    case 'xs':
      return 'm-b-0';
    case 'sm':
      return 'm-b-1';
    case 'md':
      return 'm-b-2';
    case 'lg':
      return 'm-b-3';
    case 'xl':
      return 'm-b-5';
    default:
      return '';
  }
};

const getTextAlignment = (align) => {
  switch (align) {
    case 'right':
      return 'text-xs-right';
    case 'center':
      return 'text-xs-center';
    case 'left':
    default:
      return '';
  }
};

const getTextAlignmentAndMargin = (component) => {
  return `${getTextAlignment(component.align)} ${getMarginBottom(component.margin)}`;
};

export { getMarginBottom, getTextAlignmentAndMargin };
