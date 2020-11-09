- Start Date: 2019-11-15
- Status: Progress

# Summary

Given Neptune is still early in development, we have given little consideration to how we may make breaking changes to a component's API.

In this RFC, we propose a way to deprecate a React component's API, and consider how the deprecation strategy can be managed across the team.

# Motivation

We recently had an incident which involved deploying an application which had had its `@transferwise/components` version bumped from one major version to the next. In doing so, the breaking change was not addressed, hence a broken bundle was deployed. In effect, button components were rendered to the page with no labels.

While there are many facets to this, we have agreed that breaking changes should be made in a more thoughtful manner. Most open-source packages deprecate APIs before removing them entirely in a later version (react being a perfect example of this). This is a controlled exercise and one we propose we adopt at TransferWise for Neptune.

# Detailed design

As part of the deprecation process we are proposing a light approach that introduces breaking changes progressively. The deprecation's steps will be:
 
- Default the new prop value to old prop (valid only for prop renaming)
- Introduction of a deprecation message with final deprecation date.
- Remove the deprecated prop/s.
 

## Code example

Take a cut down version of the Button component:

```js
const Button = ({ label }) => <button>{label}</button>
```

We want to update the API so `label` becomes `children` so it more closely mirrors the HTML standard:

```js
const Button = ({ children }) => <button>{children}</button>
```

​In this case we will:

1. Allow the user to continue using the old API for a period of time.
2. Throw a warning to the user that they should be using `children` instead of `label`.

To achieve #1, we will:

- leave available the old prop for usage.

```js
const Button = ({ label }) => <button>{label}</button>

```
- add the new prop `children` and default its value to old one `label`.

```js
const Button = ({ children = label, label  }) => <button>{children}</button>

```
This solution is back-compatible and if `children` is not provided it will default to `label`.

To achieve #2, we will:
 - add a customProp deprecate function that will throw a warn message for the deprecated prop, including the `expire date`

```js
const Button = ({ children = label, label  }) => <button>{children}</button>

Button.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: Type.node,
  /** @DEPRECATED please use children instead */
  label: deprecated(Types.node, 'Please use children instead', deprecationDate),
}

Button.defaultProp ={
  label: 'labelDefault'
}

```
The code above will result in `children` value to be:
 - `children` if provided 
 - `label` if provided
 - `labelDefault` which is the default value of label

The `deprecated` API will be the following:
```
 const deprecated = (validator, message = null, deprecationDate = null)
```
where:
 - validator is one of the default Type validators
 - message is the console.warn message text
 - deprecationDate is the expire date of the prop and it will also appear in the console.warn

 ## Caveaut

Although `children` is not required it doesn't have a default value (this is the reason of the eslint disable). This is because the propDefault has precednece ove the arguments re-assignment. If we define:

```
Button.defaultProp ={
  children: 'childrenDefault',
  label: 'labelDefault'
}
```
 `children = label` will be overriden and the `children` will default to `childrenDefault` rather than `label` or `labelDefault`.


# Conclusion

Since this RFC was first raised, we have established a full time team who maintain Neptune. We (the Neptune team) have, as was suggested in this RFC, taken ownership of breaking changes, and have a more structured release strategy than we did 6 months ago.

You can now find information on [versioning and deprecation](https://transferwise.github.io/neptune-web/about/Versioning) in the Neptune documentation.

The first approach outlined in this RFC provides a robust strategy for situations where we plan an extensive signature change of a widely used component. We can revisit this RFC when such a situation arrives.

In the case that we plan on deprecating an entire component or a single method or prop, we can use a simple warning.
