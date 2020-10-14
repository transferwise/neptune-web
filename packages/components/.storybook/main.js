const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.html$/i,
      loader: 'html-loader',
      options: {
        // Disables attributes processing
        attributes: {
          list: [
            // All default supported tags and attributes
            '...',
            {
              tag: 'img',
              attribute: 'src',
              type: 'src',
            },
          ],
        },
      },
    });

    // Return the altered config
    return config;
  },
};
