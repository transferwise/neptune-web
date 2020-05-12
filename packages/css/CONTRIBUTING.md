# Contributing

Please start by reading the [general contribution guide](<(https://github.com/transferwise/neptune-web/blob/master/CONTRIBUTING.md)>) to get set up and familiarise yourself with our process. Then read on for specific information about working with the CSS.

# Bundles

We officially support three bundles:

- `neptune-core.less`
- `neptune-tokens.less`
- `neptune-addons.less`

`neptune-legacy.bundle.less` is also in use by some teams, but we will soon be deprecating this.

# Naming conventions

File naming should follow `kebab-case`.

E.g. `link-callout.(css|less)`

# FAQ

## How are the bundles built?

`less` in `src` files are run through less and then postcss, and copied to the `dist` folder.

PostCSS runs a number of transformations on the CSS:

- imports are inlined
- vendor prefixes are automatically applied, based on our browser support policy
- backup rules are generated for custom properties
- transpiles custom media queries
- minifies CSS

Refer to `postcss.config.js`.

**Note:** while we only officially support the three bundles mentioned above, all less files are built into the `dist` folder. We may change this in the future.

## How can I test changes to CSS?

We don't have a specific test environment, but you can test changes in the docs environment. This is the documentation that will be [published](https://transferwise.github.io/neptune-web/) when your changes are merged.

Please read [the guide](https://github.com/transferwise/neptune-web/blob/master/CONTRIBUTING.md) for detailed instructions on how to run this environment.
