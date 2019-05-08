# Neptune CSS

## CSS library

[transferwise.github.io/neptune-css](https://transferwise.github.io/neptune-css/)

## How to consume

In the `dist/` directory you can find all the components' CSS

## Run the project

Clone and run in the project directory:

- npm install
- npm run build: "rm -rf dist && node scripts/build.js && rm -rf dist/*.js"
- npm run copy: "rm -rf 'static/assets/**/*' && cp -r dist/* static/assets/ && cp -r public/* static/assets/"
- npm run start: "next dev"
- npm run build-docs: "npm run copy && next build && next export -o docs-build && touch docs-build/.nojekyll"
- npm run deploy-docs-to-dir: "gh-pages -a -d docs-build -e"