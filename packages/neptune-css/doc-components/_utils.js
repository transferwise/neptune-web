export const assetPath = `${process.env.NODE_ENV === "production" ? "/neptune-css" : ""}/static/assets/`;
export const getAssetPath = path => `${assetPath}${path}`
