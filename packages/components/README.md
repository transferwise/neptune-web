[![CircleCI](https://circleci.com/gh/transferwise/neptune-web.svg?style=shield)](https://circleci.com/gh/transferwise/neptune-web) [![NPM](https://badge.fury.io/js/%40transferwise%2Fcomponents.svg)](https://www.npmjs.com/package/@transferwise/components)

# Neptune Web React Components

Neptune is the Design System built by and used at TransferWise. Neptune Web is the Neptune framework for Web. Neptune Web provides a way to build high quality, consistent user experiences on the web with ease.

This is the Neptune Web React component library. It works well with [Neptune CSS](https://github.com/transferwise/neptune-web/tree/master/packages/css).

## Usage

Neptune Components are published to npm as [@transferwise/components](https://www.npmjs.com/package/@transferwise/components).

Install `@transferwise/components` and its peer dependencies. **Note:** currency-flags is only required if you're using the [Money Input](https://transferwise.github.io/neptune-web/components/MoneyInput) or if you're using flags on the [Select](https://transferwise.github.io/neptune-web/components/Select).

```
# yarn
yarn add @transferwise/components react react-dom prop-types transferwise/bootstrap currency-flags

# npm
npm install @transferwise/components react react-dom prop-types transferwise/bootstrap currency-flags
```

```js
// This line only needs to be imported once in your application
import 'bootstrap/dist/css/bootstrap.css';

import { Button } from '@transferwise/components';

export default function Hello() {
  return (
    <Button size={Button.Size.SMALL} block={true}>
      Hello Neptune
    </Button>
  );
}
```

## Documentation

Visit the [docs](https://transferwise.github.io/neptune-web) for information on getting started, usage information and examples for each component.

## Contributing

We love contribution! 🙏 Read [the guide](https://github.com/transferwise/neptune-web/blob/master/packages/components/CONTRIBUTING.md) to get started.
