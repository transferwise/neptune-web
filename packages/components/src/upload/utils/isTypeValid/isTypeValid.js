import { getFileType } from '../getFileType';

export const isTypeValid = (file, rule, file64) => {
  if (!file || !rule) {
    return false;
  }
  const fileType = getFileType(file, file64);

  if (rule === '*' || fileType === rule) {
    return true;
  }

  const splittedRule = rule.split('/');
  const typeAllowed = splittedRule[0];
  const extensionAllowed = splittedRule[1];

  if (extensionAllowed !== '*') {
    return false;
  }

  return fileType.indexOf(typeAllowed) === 0;
};
