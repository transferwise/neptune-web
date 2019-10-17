const basePath = process.env.NODE_ENV === 'production' ? '/neptune' : '';

export default function getBasePath(path) {
  return `${basePath}${path}`;
}
