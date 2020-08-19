- Start Date: 2019-11-15
- Status: Agreed

# Summary

Given Neptune is still early in development, we have given little consideration to how we may make breaking changes to a component's API.

In this RFC, we propose a way to deprecate a React component's API, and consider how the deprecation strategy can be managed across the team.

# Basic example

N/A

# Motivation

We recently had an incident which involved deploying an application which had had its `@transferwise/components` version bumped from one major version to the next. In doing so, the breaking change was not addressed, hence a broken bundle was deployed. In effect, button components were rendered to the page with no labels.

While there are many facets to this, we have agreed that breaking changes should be made in a more thoughtful manner. Most open-source packages deprecate APIs before removing them entirely in a later version (react being a perfect example of this). This is a controlled exercise and one we propose we adopt at TransferWise for Neptune.

# Detailed design

As TransferWise is adopting React as it's primary frontend framework, we could introduce a higher-order component, with two responsibilities:

1. Deciding which version of a component to serve
2. Warning the consumer of API changes, when using the old API.

This could be controlled by a `deprecationConfiguration` capable of generating useful warnings for the consumer.

## Code example

Take a cut down version of the Button component:

```js
function Button({ label }) {
  return <button>{label}</button>;
}
```

We want to update the API so `label` becomes `children` so it more closely mirrors the HTML standard:

```js
function Button({ children }) {
  return <button>{children}</button>;
}
```

​In this case we should:

1. Allow the user to continue using the old API for a period of time
2. Throw a warning to the user that they should be using `children` instead of `label`.
3. Inform the user of the breaking change, in the form of a link to the changelog

To achieve #1, we could provide a higher-order component, with some method of deciding which component to use:

```js
// HoC
const EitherOr = (Component1, Component2, decider) => {
  return class Wrapper extends React.Component {
    render() {
      const useNew = decider(this.props);
      const ComponentToRender = useNew ? Component1 : Component2;

      return <ComponentToRender {...this.props} />;
    }
  };
};

// Button/index.js
import OldButton from './button';
import NewButton from './newButton';
import EitherOr from '../EitherOr';

function decider(props) {
  return !props.label;
}

export default EitherOr(NewButton, OldButton, decider);
```

The decider function in this case, returns `true` if the new api should be used. This satisfies #1, allowing us to release the change a minor version until the deprecation is removed in favour of the new API. More on this later.

To satisfy #2, the decider function could also throw warnings:

```js
function decider(props) {
  if (props.label) {
    console.warn("Button's `label` prop is deprecated, please use `children` instead");
  }

  return true;
}

export default EitherOr(NewButton, OldButton, decider);
```

Satisfying #3 is as straight-forward as including a link in the `console.warn`:

```js
console.warn(
  "Button's `label` prop is deprecated, please use `children` instead. See https://github.com/transferwise/neptune/blob/master/packages/components/CHANGELOG.md#v1500 for more information",
);
```

One possible issue with this, is the emphasis placed on the engineer introducing the deprecation to manually write a good deprecation message for the consumer. For more complex deprecations than the example, it requires the engineer to write a lot of boilerplate code.

It's possible to solve this by creating the concept of a deprecation configuration and using that as the "decider":

```js
const EitherOr = (Component1, Component2, config) => {
  return class Wrapper extends React.Component {
    render() {
      const useNew = decider(config, { props: this.props });
      const ComponentToRender = useNew ? Component1 : Component2;

      return <ComponentToRender {...this.props} />;
    }
  };
};

function decider(config, { props }) {
  let useNew = true;

  Object.keys(props).forEach(prop => {
    const propConfig = config.props[prop];
​
    if (propConfig) {
      const { newProp, changelog, customLog } = propConfig;
      const defaultLogMessage = `${prop} has been deprecated.`
        useNew = false;
​
      console.warn(customLog ? customLog(newProp, prop, changelog) : defaultLogMessage);
    }
  });

  return useNew;
}

const deprecationConfiguration = {
  props: {
    label: {
      newProp: 'children', // or `null` to warn that a prop has been removed entirely
      changelog: 'http://...',
      customLog: (newProp, oldProp, changelog) =>
        `${oldProp} has been replaced with ${newProp}. Chech out the [changelog](${changelog}) for more details.`,
    },
  },
};

export default EitherOr(NewButton, OldButton, deprecationConfiguration);
```

This enables the deprecation to be expressed as a POJO, and for us to auto-generate warnings where applicable.

More so, we can add additional features to the configuration, addressing the needs of `context`, and in theory, we could build in a way to automatically break the old API under certain circumstances, e.g., the package has been released as a major version:

```js
const deprecationConfiguration = {
  metadata: {
    breakingVersion: '2.x.x',
  },
  ...
};
```

To offer maximum flexibility and control to the deprecating engineer, we propose that we support a decider as a function and a decider as a configuration object. The function intended to be used where an API has changed beyond recognition and a props map or similar would make little sense. @sergonius [put together an example](https://codesandbox.io/s/deprecating-react-components-pf0yp) of how it could work.

## Other considerations

In adopting this strategy for deprecating Neptune components, we add uncertainty around versioning. As we can now deprecate components, maintaining the legacy API for a period of time, engineers can release what would have been a breaking change as a minor release. To account for this, we propose that contributors to Neptune should no longer be able to release breaking changes. Instead, the #design-systems should control and maintain when a deprecation notice should be removed, and thus the release of breaking changes.

Deprecated component APIs can exist for a pre-agreed amount of time and removed by the design-systems team when necessary, releasing a new major, breaking version of Neptune components.

# Drawbacks

- For the deprecation period, in case of critical changes, you'd need to apply them to both components
- Newly introduced `required` props are not able to be expressed in a useful way. In theory, we can rely on prop-types and the introduction prop-type warnings as errors within tests to account for this.
  ​

# Alternatives

​
There are two clear alternatives:

1. Run with the `function`-only decider, for simpler implementation on our end
2. Deprecate props within a component directly, e.g.:

```js
function Button({ label, children }) {
  const renderedChildren = label || children;

  if (label) {
    console.warn("Button's `label` prop is deprecated, please use `children` instead");
  }

  return <Button>{renderedChildren}</Button>;
}
```

The concern here being the increased complexity in understand how the component works, and removing the depecration
​

# Adoption strategy

​
Since this solution is purely an addition, it requires no changes to any existing components. Implementing the HOC would be a one-liner as shown in the examples above.
​

# How we teach this

​
The addition of documentation covering:

1. When a deprecation should be added
2. How to use the HoC
3. Communication of a deprecation, and what a good change log item looks like
   ​

# Conclusion

Since this RFC was first raised, we have established a full time team who maintain Neptune. We (the Neptune team) have, as was suggested in this RFC, taken ownership of breaking changes, and have a more structured release strategy than we did 6 months ago.

You can now find information on [versioning and deprecation](https://transferwise.github.io/neptune-web/about/Versioning) in the Neptune documentation.

The first approach outlined in this RFC provides a robust strategy for situations where we plan an extensive signature change of a widely used component. We can revisit this RFC when such a situation arrives.

In the case that we plan on deprecating an entire component or a single method or prop, we can use a simple warning.
