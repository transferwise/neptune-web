import { isNull, isNumber, isUndefined } from '@transferwise/neptune-validation';

function isSyntheticEvent(value) {
  return (
    !isNull(value) &&
    !isUndefined(value) &&
    !!value.nativeEvent &&
    value.nativeEvent instanceof Event
  );
}

const normalizeEvent = (event, type) => {
  let value = event;

  if (event) {
    if (isSyntheticEvent(event)) {
      value = type === 'number' ? parseFloat(event.target.value) : event.target.value;
    } else if (isNumber(event.value) || !isUndefined(event.value)) {
      // Checkbox,Select
      value = event.value;
    }
  }
  return value;
};

export { isSyntheticEvent, normalizeEvent };
