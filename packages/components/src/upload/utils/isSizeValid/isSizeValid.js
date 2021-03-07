export const isSizeValid = (file, maxSize) => Number.isInteger(maxSize) && file.size <= maxSize;
