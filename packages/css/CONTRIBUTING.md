# Contributing

Please start by reading the [general contribution guide](<(https://github.com/transferwise/neptune-web/blob/main/CONTRIBUTING.md)>) to get set up and familiarise yourself with our process. Then read on for specific information about working with the CSS.

# Get started

We have a Next based test app where you can test your changes with LiveReload. To run the playground please:

- Run `yarn setup` from **the root of the monorepo**, if you haven't already
- Run `yarn dev` from **here** to start your dev environment and watch for changes

# Naming conventions

File naming should follow `kebab-case`.

E.g. `link-callout.(css|less)`

# Published Bundles

We officially support three bundles:

- `neptune.css`
- `neptune-core.css`
- `neptune-addons.less`

We also expose some less variables and props, which can be found in `dist/less` and `dist/props` respectively.

# How are the bundles built?

`less` in `src` files are run through less and then postcss, and copied to the `dist` folder.

PostCSS runs a number of transformations on the CSS:

- imports are inlined
- vendor prefixes are automatically applied, based on our browser support policy
- backup rules are generated for custom properties
- transpiles custom media queries
- minifies CSS

Refer to `postcss.config.js`.

**Note:** while we only officially support the three bundles mentioned above, all less files are built into the `dist` folder. We may change this in the future.
