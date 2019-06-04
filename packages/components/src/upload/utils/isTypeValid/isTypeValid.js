export const isTypeValid = (file, rule) => {
  if (rule === '*' || file.type === rule) {
    return true;
  }
  const splittedRule = rule.split('/');

  return splittedRule[1] === '*' && file.type.indexOf(splittedRule[0]) === 0;
};
