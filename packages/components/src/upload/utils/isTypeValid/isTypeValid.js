export const isTypeValid = (file, rule) => {
  if (rule === '*') {
    return true;
  }
  if (file.type === rule) {
    return true;
  }
  const splittedRule = rule.split('/');

  if (splittedRule[1] === '*' && file.type.indexOf(splittedRule[0]) === 0) {
    return true;
  }

  return false;
};
