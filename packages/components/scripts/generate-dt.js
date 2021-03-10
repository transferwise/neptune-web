const tool = require('react-to-typescript-definitions');

const output = tool.generateFromFile(null, 'src/lab/mobileNav/MobileNav.js');

// eslint-disable-next-line no-console
console.log(output);
