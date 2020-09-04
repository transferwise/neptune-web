module.exports = {
  "stories": [
    `${process.env.PWD}/src/**/*.story.mdx`,
    `${process.env.PWD}/src/**/*.story.@(js|jsx|ts|tsx)`
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ]
};
