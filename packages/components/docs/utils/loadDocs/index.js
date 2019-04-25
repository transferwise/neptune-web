// In this two lines we go through the src folder and load all the files with extension .docs.js into an array that we
// can loop after to load the components.
const req = require.context('../../../src', true, /\.docs\.js$/);
export const loadDocs = () => req.keys().map(filename => req(filename));
