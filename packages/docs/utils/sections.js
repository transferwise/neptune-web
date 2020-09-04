/**
 * This defines the layout of the docs page, which has two columns and a content panel.
 *
 * Items at the top level will appear in the first, leftmost column. They must have a title and
 * provide dir - the directory where content files live.
 *
 * If you want to group content, you can specify groups by providing a children property. This
 * should be an array of groups, each with a title and dir.
 *
 * By default, files will appear in alphabetical order. To specify an order, use the fileOrder
 * property inside a group, and pass the file names (without extension) in the order you'd like
 * them to appear.
 *
 * Note that you cannot mix groups and individual files - if you decide to use groups, all children
 * files in that section must be in a group.
 */
export default [
  {
    title: 'Getting started',
    dir: 'about',
    fileOrder: ['Home', 'Setup', 'Styles', 'BrowserSupport', 'Versioning', 'Contributing'],
  },
  {
    title: 'Styles',
    dir: 'styles',
    children: [
      {
        title: 'Core',
        dir: 'styles/core',
        fileOrder: ['Typography'],
      },
      {
        title: 'Addons',
        dir: 'styles/addons',
        fileOrder: ['BackgroundUtilities', 'DisplayUtilities', 'SpacingUtilities'],
      },
      {
        title: 'Tokens',
        dir: 'styles/tokens',
        fileOrder: ['Colors', 'Sizes', 'Breakpoints'],
      },
    ],
  },
  {
    title: 'Components',
    dir: 'components',
    children: [
      {
        title: 'Inputs',
        dir: 'components/inputs',
      },
      {
        title: 'Content',
        dir: 'components/content',
      },
      {
        title: 'Alerts / Info',
        dir: 'components/alerts',
      },
      {
        title: 'Navigation',
        dir: 'components/navigation',
      },
      {
        title: 'Progress',
        dir: 'components/progress',
      },
      {
        title: 'Overlays',
        dir: 'components/overlays',
      },
      {
        title: 'Dynamic Forms',
        dir: 'components/dynamicForms',
      },
    ],
    searchable: true,
  },
  {
    title: 'Lab',
    dir: 'lab',
  },
];
