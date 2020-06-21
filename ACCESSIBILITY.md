# Accessibility

All Neptune Web components should meet at least WCAG AA standards. Read [the full list of WCAG AA standards](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa&technologies=flash%2Csl) on the W3 site.

This repository provides a set of tools to help us meet these standards. We try to automate as many checks as possible but some of them have to be performed manually.

## Automated tests

The Neptune Web repository is configured to run Eslint checks using the `eslint-plugin-jsx-a11y` plugin and rules configured in `@transferwise/eslint-config`. Eslint checks will run automatically on all staged files, when tests are run, and on CircleCI jobs.

All our React environments spin up with `react-axe` integrated so it's possible to check for violations in the browser console. If you're running Storybook it's also possible to access axe violations in the accessibility tab on the right-hand side. Although these console messages are helpful they won't fail the build, so please ensure there are no violations before committing.

## Manual tests

A short series of manual checks are also necessary. For all changes, perform the following (where relevant):

### Keyboard tests

- Component is fully functional using only the keyboard
- Interactive elements have visible focus styles
- Keyboard focus order matches the visual layout
- There are no invisible, focusable elements

### Appearance

- Use the component at up to 200% zoom
- Use the component at large font sizes (browser settings)
- Use the component with colour adjusted using an app like Sim Daltonism (macOS)

### Semantic checks

- Markup elements are appropriate for their content - use `ul` or `ol` for list content, `table` for tabular data etc.
- Components do not use any elements that may prevent the consuming app from being accessible. For example do not use heading or landmark elements.

### Voice access

- Component works with VoiceOver (macOS) and NVDA / Jaws (Windows)

# Component styles

CSS files should live inside the component source folder, next to your JavaScript, and be imported in your component file.
