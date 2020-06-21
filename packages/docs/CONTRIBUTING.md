# Contributing

Please start by reading the [general contribution guide](https://github.com/transferwise/neptune-web/blob/master/CONTRIBUTING.md) to get set up and familiarise yourself with our process. Then read on for specific information about working with the Components.

# Get started

To run the docs environment, work **from the root of the monorepo**, not from here. This is because the docs require the other packages to be built.

Before you start, ensure you've run `yarn setup`. This will ensure that all packages are built (e.g. the CSS that some components use from the `css` package). Then run `docs`:

```
yarn setup
yarn docs
```

This will start the development environment. Changes you make inside `docs` will be live reloaded. If you make a change in another package, you'll have to stop and run `yarn docs` again.

## All available commands

The following commands can be run from inside `docs`:

- `build` - builds the docs (builds of all other packages must have also been executed for this to be useful)
- `lint` - lints pages
- `lint:fix` - lints pages and fixes any errors that can be automatically fixed

As a reminder: to load the docs, run `docs` **from the root of the monorepo**, not from here.

# Adding documentation

Each page in the documentation is represented by an [`.mdx`](https://mdxjs.com) file in `pages`. To add a new page, add a new file in the section you'd like it to appear in.

To embed a live code example and demo, you can use the `LiveCodeEditor`. Add the code sample to a new file in the `liveCodeEditor` folder:

```js
// liveCodeEditor/button.code.js
<Button onClick={() => alert('clicked')}>I'm a pretty buton</Button>
```

You can then use it in your page as follows:

```jsx
// pages/components/Button.mdx
import { LiveEditorBlock } from '../../utils';
import { Button } from '@transferwise/components';
import code from '../../liveEditorCode/button.code';

<LiveEditorBlock code={code} scope={{ Button }} />;
```

You can generate a table of supported component props using the `GeneratePropsTable` utility.

```jsx
// pages/components/Button.mdx
import { GeneratePropsTable } from '../../utils';

<GeneratePropsTable componentName="Button" />;
```

This will read the component PropTypes and generate a table showing what is supported and the defaults.
