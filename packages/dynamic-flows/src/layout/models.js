import Types from 'prop-types';

const actionModel = Types.shape({
  label: Types.string.isRequired,
  url: Types.string.isRequired,
  method: Types.oneOf(['GET', 'POST', 'PUT', 'PATCH']).isRequired,
  disabled: Types.boolean,
  // eslint-disable-next-line react/forbid-prop-types
  data: Types.object,
});

const optionModel = Types.shape({
  text: Types.string,
  action: actionModel.isRequired,
  icon: Types.string,
});

const definitionModel = Types.shape({
  label: Types.string.isRequired,
  value: Types.string.isRequired,
});

const itemModel = Types.shape({
  icon: Types.string,
  components: Types.arrayOf(Types.object),
});

const sizeModel = Types.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);
const alignModel = Types.oneOf(['left', 'right', 'center']);
const marginModel = Types.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);
const contextModel = Types.oneOf(['success', 'failure', 'warning', 'info', 'primary']);
const orientationModel = Types.oneOf(['horizontal', 'vertical']);

const componentTypes = Types.oneOf([
  'alert',
  'box',
  'button',
  'columns',
  'decision',
  'divider',
  'form',
  'heading',
  'info',
  'image',
  'paragraph',
  'review',
]);

const componentModel = Types.shape({
  type: componentTypes.isRequired,
  text: Types.string,
  components: Types.arrayOf(Types.object),
  definitions: Types.arrayOf(definitionModel),
  options: Types.arrayOf(optionModel),
  items: Types.arrayOf(itemModel),
  size: sizeModel,
  margin: marginModel,
  context: contextModel,
  align: alignModel,
  action: actionModel,
});

export {
  actionModel,
  sizeModel,
  alignModel,
  marginModel,
  contextModel,
  orientationModel,
  optionModel,
  itemModel,
  componentModel,
};
