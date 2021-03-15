import { ControlType, Priority, Size, Type } from '../../common';
import { logActionRequiredIf } from '../../utilities';

const deprecatedTypeMap = {
  [Type.PRIMARY]: ControlType.ACCENT,
  [Type.SECONDARY]: ControlType.ACCENT,
  [Type.LINK]: ControlType.ACCENT,
  [Type.PAY]: ControlType.POSITIVE,
  [Type.DANGER]: ControlType.NEGATIVE,
};

const oldTypePriorityMap = {
  [Type.DANGER]: Priority.SECONDARY,
  [Type.LINK]: Priority.TERTIARY,
  [Type.SECONDARY]: Priority.SECONDARY,
};

const deprecatedTypeMapMessage = {
  [Type.DANGER]: 'Button.Type.NEGATIVE',
  [Type.LINK]: 'Button.Type.ACCENT with priority Button.Priority.TERTIARY',
  [Type.PAY]: 'Button.Type.POSITIVE',
  [Type.PRIMARY]: 'Button.Type.ACCENT',
  [Type.SECONDARY]: 'Button.Type.ACCENT with priority Button.Priority.SECONDARY',
};

const deprecatedTypes = Object.keys(deprecatedTypeMap);

export const establishNewType = (originalType) => deprecatedTypeMap[originalType] || originalType;

export const establishNewPriority = (originalPriority, originalType) => {
  const type = establishNewType(originalType);

  // The old SECONDARY and LINK types now map to priorities. If they're still using one of
  // these old types, ignore whatever priority they've passed and use this instead.
  if (oldTypePriorityMap[originalType]) {
    return oldTypePriorityMap[originalType];
  }
  // Only ControlType.ACCENT supports tertiary styles
  if (originalPriority === Priority.TERTIARY && type !== ControlType.ACCENT) {
    return Priority.SECONDARY;
  }
  return originalPriority;
};

export const logDeprecationNotices = ({ size, type }) => {
  logActionRequiredIf(
    'Button has deprecated the `Button.Size.EXTRA_SMALL` value for the `size` prop. Please use Button.Size.SMALL instead.',
    size === Size.EXTRA_SMALL,
  );
  logActionRequiredIf(
    `Button has deprecated the ${type} value for the \`type\` prop. Please update to ${deprecatedTypeMapMessage[type]}.`,
    deprecatedTypes.includes(type),
  );
};
