# React Components

[![CircleCI](https://circleci.com/gh/transferwise/neptune-web.svg?style=shield)](https://circleci.com/gh/transferwise/neptune-web) [![NPM](https://badge.fury.io/js/%40transferwise%2Fcomponents.svg)](https://www.npmjs.com/package/@transferwise/components)

Neptune React components provides a library with common used components across the web platform.
The library is tree-shakable, ensuring your app is only bundling the components you imported. Styles for the component are automatically imported to your page when you use it.

### Install

```
yarn add @transferwise/components
```

### Use

```js
import { Button } from '@transferwise/components';
```

## Contributing

Please refer to this [file](https://github.com/transferwise/neptune-web/blob/master/README.md) for contribution's guideline.

### Component styles

CSS files should live inside the component source folder, next to your JavaScript, and imported on your component file. This goes against the previous recommendation of the Neptune team, we will give further guidance on the CSS library soon.

### Test

Please use [react-testing-library](https://github.com/testing-library/react-testing-library) for testing components.

Historically we've used Enzyme so most of tests built using it's API but we encourage you to use react-testing-library when creating a new component
also, feel free to update tests of existing components (e.g when you do some changes) and flag about this during code review.

### Dev

To find instructions on how to spin up the dev environment please refer to this [file](https://github.com/transferwise/neptune-web/blob/master/README.md)
