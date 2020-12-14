import { logActionRequired } from '../logActionRequired';

const deprecatedMessage = ({ component, propName, message, expiryDate }) => {
  const messages = [`${component} has deprecated the use of ${propName}.`];

  if (message) {
    messages.push(message);
  }

  if (expiryDate) {
    messages.push(
      `${propName} will be removed on or after ${expiryDate.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })}`,
    );
  }

  return messages.join(' ');
};

const deprecated = (validator, { component, message = '', newProp = null, expiryDate = null }) => (
  props,
  propName,
  ...rest
) => {
  const newPropMessage = newProp ? `Please use ${newProp} instead.` : message;

  if (props[propName] != null && typeof props[propName] !== 'undefined') {
    logActionRequired(
      deprecatedMessage({ component, propName, message: newPropMessage, expiryDate }),
    );
  }
  return validator(props, propName, ...rest);
};

export default deprecated;
