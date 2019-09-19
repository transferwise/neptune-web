const basePath = process.env.NODE_ENV === 'production' ? '/neptune-docs' : '';
export default function getBasePath(path) {
  return `${basePath}${path}`;
}
