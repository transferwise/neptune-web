// At the moment in order to have emotion working on ssr webpack needs to be configured to target:'node'.
// Since our library needs to work on browser too this is not a suitable solution. The alternative would be to create
// two bundles one for ssr and one for web. As part of this issue https://github.com/emotion-js/emotion/issues/1246 the
// following script has been written and I test the generated bundle on nextjs with ssr and works fine. Potentially
// this can be removed depending on the outcome of the issue above.

const fs = require('fs');
const { sync } = require('glob');

sync('./node_modules/@emotion/*/package.json').forEach(src => {
  const package = JSON.parse(fs.readFileSync(src, 'utf-8'));
  const browser = package.browser;
  delete package.browser;
  if (browser) {
    package._browser = browser;
  }
  fs.writeFileSync(src, JSON.stringify(package, null, 2));
});
