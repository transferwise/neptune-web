import { ControlType, Priority } from '../common';

export const typeClassMap = {
  [ControlType.ACCENT]: 'btn-accent',
  [ControlType.POSITIVE]: 'btn-positive',
  [ControlType.NEGATIVE]: 'btn-negative',
};

export const priorityClassMap = {
  [Priority.PRIMARY]: 'btn-priority-1',
  [Priority.SECONDARY]: 'btn-priority-2',
  [Priority.TERTIARY]: 'btn-priority-3',
};
