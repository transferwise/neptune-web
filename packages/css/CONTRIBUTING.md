## Contributing

### Get Started

Do you want to contribute? Great! Currently all the CSS for each component is in the `./src` folder.
Currently all files are using `.less` but we are planning to start using postCSS.

### Bootstrap deprecation process

We have a [Bootstrap deprecation process](https://docs.google.com/document/d/1MzwORlGygaF87PE9mLuiGukj5V8Xxg-_20ni_DVDRYI/edit#heading=h.htdevm2wqr0o) that describes the different levels a component's styles can be in, and how are we planning to move away from Bootstrap with this repo.

### Steps for contributing

1. Decide about the component style's level (1,2,3 or 4)
2. Start working in a new branch
3. Create a new file for it in `./src/less/my-component.less`
4. Update the package version and the changelog
5. Create a PR with your changes
6. Get reviewed and `squash & merge` you branch once it is approved
7. Head to the [Neptune Docs repo](https://github.com/transferwise/neptune-docs) and document your new component

### Naming convention

File naming should follow `kebab-case`
E.g. `link-callout.(css|less)`
