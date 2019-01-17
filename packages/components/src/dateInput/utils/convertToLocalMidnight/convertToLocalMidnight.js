export const convertToLocalMidnight = date => {
  const utcDate = new Date(date.split('T')[0]); // using YYYY-MM-DD creates UTC date

  return new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
};
