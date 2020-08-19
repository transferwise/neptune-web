- Start Date: 2019-10-30
- Status: Agreed

# Summary

In this RFC, we propose _passing `className`_ to the outermost child node for all React components in Neptune.

We also propose making _passing `className`_ mandatory for all existing and new components.
Enforcing that would be a responsibility of a test suite that will fail when any component does not comply.

`className` is the prop used in React to specify a DOM element class.

Two legitimate use cases we have for classes are:

- utility (`m-t-2` and the like)
- analytics (e.g., for GTM tracking)

When the component does _not_ pass `className`, developers resort to otherwise redundant wrapping DOM elements,
shown in the example below.

In addition, passing `className` is expected behaviour and an existing feature in other component libraries,
such as [Ant Design](https://ant.design) (used for TransferWise back-office apps) and [Material-UI](https://material-ui.com),
thus reducing learning cost.

# Basic example

As of now, some components pass `className` (e.g., [`Chip`](https://github.com/transferwise/components/blob/028a4df58c407493943b84f45d90e026429de126/src/chip/Chip.js#L8)), whereas most don't (e.g., [`Alert`](https://github.com/transferwise/components/blob/028a4df58c407493943b84f45d90e026429de126/src/alert/Alert.js#L33)).

As a current example, to add a top margin using an utility class to a component _not_ passing `className`,
developers have to wrap the component in a redundant DOM element:

```jsx
<div className="m-t-2">
  <Alert content="Something went wrong." />
</div>
```

After adding `className` passing, developers could omit this element,
as `className` would be passed to the outermost element inside the component:

```jsx
<Alert content="Something went wrong." className="m-t-2" />
```

# Motivation

Not need redundant wrapping DOM elements, which reduce readability and performance.

# Detailed design

## Components

We propose passing the `className` prop to the outermost element in the component code,
for _all_ components.

For a simplified version of [`Alert`](https://github.com/transferwise/components/blob/028a4df58c407493943b84f45d90e026429de126/src/alert/Alert.js#L27):

```jsx
const Alert = ({ children }) => <div className="alert">{children}</div>;
```

We would accept a `className` prop and pass it to the `div`,
optionally using the [`classnames`](http://npmjs.com/package/classnames) package:

```jsx
const Alert = ({ className, children }) => (
  <div className={classNames('alert', className)}>{children}</div>
);
```

In some edge cases, the outermost element does not translate to a DOM element, for example `Fragment` or `CSSTransition`.
In those cases, we propose passing the `className` to the most suitable child.

## Test

To ensure all existing and new components pass `className`, we propose creating a _global_ test.
The test would ensure `className` is passed for all exported components,
similarly to [the SSR test](https://github.com/transferwise/components/blob/028a4df58c407493943b84f45d90e026429de126/src/ssr.spec.js#L1),
and fail if a component does not comply.

# Drawbacks

- adding support requires development effort
- overriding styles will be easier
- some components using `Fragment` will need to use `span` or `div` internally,
  potentially changing behaviour and affecting performance

# Alternatives

The alternatives are:

- _not_ passing `className`, which we're currently doing for most of the components
- using another prop name/type

# Adoption strategy

As this is not a breaking change and it's considered expected behaviour for React developers,
adoption should be painless.

# How we teach this

All components should have the `className` prop shown in their documentation.

In addition, we could mention it in general documentation,
similarly to [Material-UI](https://material-ui.com/customization/components/#overriding-styles-with-class-names).

As we're using a standard prop name and providing expected behaviour,
we believe no further training is necessary.

The documentation should cover:

## When to use it

- for utility classes (`m-t-2` and the like)
- for analytics classes (although `data` attributes would be preferred)

## When not to use it

- for overriding internal styles (the component should be updated to support your requirements instead)

# Unresolved questions

TBD
