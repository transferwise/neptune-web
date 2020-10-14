# Upgrading Guide

## Recommended setup

Most users will only need one import:

```js
import '@transferwise/neptune-css/dist/css/neptune.css';
```

This contains **component CSS**, a number of **utility classes** and **custom properties**.

## Using custom properties and less variables

We expose a number of useful custom properties and less variables.

```js
css
 | dist
   | css
     - neptune.css                  // css bundles
   | less                           // less variables
     - legacy-variables.less
     - neptune-tokens.less
     - zindex.less
   | props                          // custom properties 
     - custom-media.css
     - legacy-custom-props.css
     - neptune-tokens.css          // (these are bundled in neptune.css)
```

In order, we recommend using:

1. Custom properties from `props/neptune-tokens.css`
1. Semantic less variables from `less/neptune-tokens.less`
1. Base colour less variables from `less/neptune-tokens.less`
1. Less variables from other exposed less files such as `zindex.less`
1. Less variables from `less/legacy-variables.less` (these contain all Bootstrap variables)

### Custom properties

If everyone uses the same set of semantic custom properties it will make things much easier to roll out changes to colours and other tokens in the application. Their dynamic nature could be used in the future to support theming. All officially supported custom properties are in [@transferwise/neptune-tokens](https://www.npmjs.com/package/@transferwise/neptune-tokens). For convenience, these are bundled into `neptune.css`.

**IMPORTANT: Custom properties require extra postcss config.** If you want to use custom properties (which we recommend!) you need to set up your postcss config correctly, in order to generate fallbacks for older browsers. [Read the guide to get set up](https://transferwise.github.io/neptune-web/about/Styles#tokens-custom-properties).

**Custom media custom properties are experimental, and require extra (different from the above) postcss config.** If you want to use these, [read the documentation](https://transferwise.github.io/neptune-web/styles/tokens/Breakpoints). Alternatively, these screen breakpoints are available in `less/legacy-variables.less` as less variables.

### Less variables

If you don't want to use custom properties, you can use less variables. All semantic custom properties are also available in `less/neptune-tokens.less`. This file also contains a number of base colours which we haven't yet been made available as semantic tokens.

Bootstrap variables are all available in `less/legacy-variables.less`.

## Migrating from Bootstrap or old Neptune CSS versions

1. If you still use Bootstrap, first remove all Bootstrap imports and remove Bootstrap as a dependency (**unless** you still depend on bootstrap.js).

```less
// DELETE THESE - you probably only have one or the other
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'bootstrap/dist/less/bootstrap.less';
```

2. Import Neptune. We recommend a single Neptune import in your code. **Note: there is no need to run Neptune CSS through your CSS processor**.

  ```js
  import '@transferwise/neptune-css/dist/css/neptune.css';
  ```

3. If you import Bootstrap variables directly, swap them for the equivalent Neptune CSS file (or see step 5 for modern alternatives):

  ```less
  // DELETE
  @import 'bootstrap/less/variables';
  @import (reference) 'bootstrap/less/variables.less';

  // USE INSTEAD
  @import '~@transferwise/neptune-css/dist/less/legacy-variables.less';
  ```

4. If you were already importing `legacy-variables.less` from Neptune, change the import path (this changed from Neptune 2 => 3):

 ```less
  // DELETE
  @import '~@transferwise/neptune-css/dist/css/variables/legacy-variables.less';

  // USE INSTEAD
  @import '~@transferwise/neptune-css/dist/less/legacy-variables.less';
  ```

5. If you used any of the deprecated custom properties in the table below you need to either:

* Import `props/legacy-custom-props.css` **once** in your application **or**
* **(Recommended)** Replace the custom property with one of the below

You can use any of the replacements, remembering to import the less file if you are using a less variable - though they are listed in order of preference. `legacy-variables.less` should only be used as a last resort.

If you are swapping to a new semantic variable (e.g. `--color-text-inactive`) - ensure the variable matches the use (i.e you are using the colour to colour inactive text). If the semantic option doesn't suit, use the plain alternative (in this case, `@color-base-smoke-dark`).

| Deprecated custom property| Replacement custom property (from `neptune.css`) | Replacement less variable (from `neptune-tokens.less`)| Replacement less variable (from `legacy-variables.less`)|
| ------------- |-------------| -----|-----|
| `--border-radius`|`--radius-small`|`@radius-small`||
| `--spacer`| `--size-8` | `@size-8` ||
| `--space-4` | `--size-4` | `@size-4` ||
| `--space-8` | `--size-8` | `@size-8` ||
|`--space-12`| `--size-12` | `@size-12` ||
|`--space-16`| `--size-16` | `@size-16` ||
|`--space-24`| `--size-24` | `@size-24` ||
|`--space-32`| `--size-32` | `@size-32` ||
|`--space-40`| `--size-40` | `@size-40` ||
|`--space-48`| `--size-48` | `@size-48` ||
|`--space-56`| `--size-56` | `@size-56` ||
|`--space-64`| `--size-64` | `@size-64` ||
|`--brand-white`|  | `@color-base-white` |`@brand-white`|
|`--link-color`| `--color-text-link` | `@color-text-link` | `@link-color`|
|`--brand-pale-blue`|  |  |`@brand-pale-blue`|
|`--brand-navy-minus-20`|  | `@color-base-navy-dark` | `@brand-navy-minus-20`|
|`--brand-navy-minus-10`|  | `@color-base-navy-mid` |`@brand-navy-minus-10`|
|`--brand-navy`| `--color-primary` | `@color-primary` | `@brand-navy`|
|`--brand-blue-minus-20`|  |  |`@brand-blue-minus-20`|
|`--brand-blue-minus-10`| | |`@brand-blue-minus-10`|
|`--brand-blue`| | | `@brand-blue`|
|`--brand-light-blue-minus-10`|`--color-text-link-hover`, `--color-control-accent-hover`|`@color-text-link-hover`, `@color-control-accent-hover`, `@color-base-blue-mid`|`@brand-light-blue-minus-10`|
|`--brand-light-blue`|`--color-accent`, `--color-text-link`, `--color-control-accent`, `--color-border-focus`|`@color-accent`, `@color-text-link`, `@color-control-accent`, `@color-border-focus`|`@brand-light-blue`|
|`--brand-grey-plus-10`|`--color-secondary`, `--color-text-secondary`|`@color-secondary`, `@color-text-secondary`, `@color-base-grey-mid`|`@brand-grey-plus-10`|
|`--brand-smoke-minus-10`|`--color-text-inactive`|`@color-text-inactive`, `@color-base-smoke-dark`|`@brand-smoke-minus-10`|
|`--brand-smoke`||`@color-base-smoke-mid`|`@brand-smoke`|
|`--brand-smoke-plus-10`|`--color-border-neutral`|`@color-border-neutral`, `@color-base-smoke-light`|`@brand-smoke-plus-10`|
|`--brand-smoke-plus-20`|`--color-background-neutral`|`@color-background-neutral`, `@color-base-smoke-fade`|`@brand-smoke-plus-20`|
|`--brand-green-minus-10`|`--color-control-positive-hover`|`@color-control-positive-hover`, `@color-base-green-mid`|`@brand-green-minus-10`|
|`--brand-green`|`--color-positive`, `--color-text-positive`, `--color-control-positive`, `--color-border-positive`|`@color-positive`, `@color-text-positive`, `@color-control-positive`, `@color-border-positive`, `@color-base-green-light`|`@brand-green`|
|`--gray-base`|`--color-background-neutral`|`@color-background-neutral`, `@color-base-smoke-fade`|`@gray-base`|
|`--gray-darker`|||`@gray-darker`|
|`--gray-light`||`@color-base-grey-light`|`@gray-light`|
|`--brand-primary`|`--color-primary`, `--color-text-primary`, `--color-text-important`|`@color-primary`, `@color-text-primary`, `@color-text-important`, `@color-base-navy-light`|`@brand-primary`|
|`--body-bg`|`--color-background-screen`|`@color-background-screen`|`@body-bg`|
|`--text-bold-color`||`@color-base-navy-mid`|`@text-bold-color`|

There are no replacements for `--font-size` or `--line-height` variables, so you can either choose to inline them or import `props/legacy-custom-props.css`.
  
| Deprecated custom property| Value |
|--------|--------|
|(< 768px) `--font-size-xx-large`| 2.8rem; /* 42px */ |
|(< 768px) `--font-size-x-large`| 1.8666666667rem; /* 28px */ |
|(< 768px) `--font-size-large`| 1.4666666667rem; /* 22px */ |
|(< 768px) `--font-size-medium`| 1.2rem; /* 18px */ |
|(< 768px) `--font-size`| 0.9375rem; /* 15px */ |
|(< 768px) `--font-size-small`| 0.9333333333rem; /* 14px */ |
|(< 768px) `--font-size-x-small`| 0.8rem; /* 12px */ |
|(< 768px) `--line-height`| 1.6; /* 24/15 */ |
|(>= 768px) `--font-size-xx-large` | 2.625rem; /* 42px */ |
|(>= 768px) `--font-size-x-large` | 1.75rem; /* 28px */ |
|(>= 768px) `--font-size-large` | 1.375rem; /* 22px */ |
|(>= 768px) `--font-size-medium` | 1.125rem; /* 18px */ |
|(>= 768px) `--font-size` | 1rem; /* 16px */ |
|(>= 768px) `--font-size-small` | 0.875rem; /* 14px */ |
|(>= 768px) `--font-size-x-small` | 0.75rem; /* 12px */ |
|(>= 768px) `--line-height` | 1.5; /* 24/16px */ |

6. If you notice any visual issues, you may want to check for the use of these classes, **which have been removed**. These were originally present in Bootstrap, but removed from in Neptune. Most were already deprecated in Bootstrap, so the chance of you running into them is low.

- `.img-responsive`
- `.img-thumbnail`
- `.visible-print`, `.visible-print-block`, `.visible-print-inline`, and `.visible-print-inline-block`
- `.hidden-print`
- `.orderable-xs`, `.orderable-sm`, `.orderable-md`, `.orderable-lg`, and `.orderable-xl`
- `.order-1`, `.order-2`, `.order-3`, `.order-4`, `.order-5`, and `.order-6`
- `article`, and `.article`
- `.bg-focus` and its children
- `.lang_ja`, `.lang_ja h[1-6]`, `.lang_ja .h[1-6]`
- `.bg-default` `<p>` color
- `.*-*-section-5` and `.*-*-section-7` responsive spacing sections
- `.footer` spacing section from addons
