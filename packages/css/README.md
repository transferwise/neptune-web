# Neptune CSS 🔱

The CSS library of TransferWise's Design System: Neptune

To document the components please use the [Neptune Docs](https://github.com/transferwise/neptune-web/tree/master/packages/docs).

### How to consume the CSS

Install the NPM package as a dependency to your project

```
npm install @transferwise/neptune-css
```

Import the styles for your components in your app. E.g.

```
import '@transferwise/neptune-css/dist/css/chevron.css'
```

In the `dist/` directory you can find all the components' CSS. Use them as individual components (e.g. alerts.css) or call the whole library (neptune.css).

### Build the project

- `npm run build`

### How to contribute

Do you want to contribute? Great! Please take a look at our `Contributing` guideline:
[CONTRIBUTING.md](https://github.com/transferwise/neptune-css/blob/master/CONTRIBUTING.md)

### Spin up dev environment

- `npm run dev`

This command will generate the intial build and add a watcher to the less files. The first iterations won't be cached and will be slower but after the firsts one only affected files and dependent will be updated.
