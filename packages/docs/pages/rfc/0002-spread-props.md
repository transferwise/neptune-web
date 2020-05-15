- Start Date: 2019-10-28
- Status: Agreed

# Summary

In this RFC, we propose introducing the spread syntax for React component props.

[Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) allows to conveniently and flexibly pass props to a chosen element or method in a React component. This comes with pros and cons and should be used responsibly.

Something to keep in mind when talking about flexibility is that the TransferWise component library is a public one, so in most cases hindering built-in functionality of HTML elements should be avoided.

# Basic example

```javascript
const Button = ({ children, variant = 'default', isLoading, ...rest }) => (
  <button {...rest} className={classnames('btn', `btn-${variant}`, isLoading && 'is-loading')}>
    {children}
  </button>
);
```

# Motivation

When using HTML elements that have a lot of native attributes and benefit from custom attributes such as `data-*` (e.g. `data-test`) or `aria-*`, it might make more sense to spread props to allow them to be used without much hassle.

We should definitely not hinder the use of elements' native attributes unless we improve upon them or have a good explanation or alternative path.

# Detailed design

Let’s use the [button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) as an example. It has additional attributes for form control, type and disabled state. While some of these we definitely want to define and document explicitly for various reasons (they might affect the behaviour, state and/or visuals in a non-standard way), defining each possible attribute can create overhead.

An example in the wild might be the [alert component from Reach UI](https://reacttraining.com/reach-ui/alert), where it says “any props not listed above will be spread onto the underlying div element”. The same approach is used for the [tabs](https://reacttraining.com/reach-ui/tabs/).

There are also schema.org attributes, which are used and not relevant to a components props.

## When to use it

- The component or an underlying element might benefit from any of the aforementioned props

## When not to use it

- It has a good chance to break the UI or cause tangible inconsistencies
- It doesn’t provide any obvious benefits or value
- You could just add a few extra props

## Blacklisting

If certain attributes are known to break the component or cause unexpected behaviour and inconsistencies, they can be omitted via blacklisting. This can technically be done in various ways.

## Whitelisting

Another way to have control over the props would be to whitelist certain props from the spread via a regex pattern, filtering out invalid HTML attributes or what ever other methods.

# Drawbacks

- if not implemented properly, the spread can override existing props and cause unwanted results
- unexpected behaviours and inconsistencies may arise when allowed in places not suitable

# Alternatives

- The status quo: having rigid props and forcing PR-s to add props when somebody needs them

# Adoption strategy

This would not break any existing components and will allow to add additional props to components.

# How we teach this

Developers familiar with React and modern JavaScript will know the syntax and concept. All we have to do is let them know in our docs where and how the spreading will be applied.
