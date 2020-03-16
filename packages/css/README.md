# CSS

[![CircleCI](https://circleci.com/gh/transferwise/neptune-web.svg?style=shield)](https://circleci.com/gh/transferwise/neptune-web) [![NPM](https://badge.fury.io/js/%40transferwise%2Fneptune-css.svg)](https://www.npmjs.com/package/@transferwise/neptune-css)

The CSS library provides css styles for common components and utilities reused across the web platform.

### Install

```
yarn add @transferwise/css
```

### Use

In the `dist` directory you can find individual files for components, variables, and other common utilities. They can be used individually or as the whole `neptune.css` bundle.

```jsx
// Individual
import '@transferwise/neptune-css/dist/css/buttons.css';

// Full bundle
import '@transferwise/neptune-css/dist/css/neptune.css';
```

## Contributing

Please refer to this [file](https://github.com/transferwise/neptune-web/blob/master/README.md) for contribution's guideline.

### Create a new style

1. Create a new file for it in `./src/less/my-component.less`
2. Decide about the component style's level (1,2,3 or 4)

### Naming convention

File naming should follow `kebab-case`.

E.g. `link-callout.(css|less)`

### Dev

To find instructions on how to spin up the dev environment please refer to this [file](https://github.com/transferwise/neptune-web/blob/master/README.md)
