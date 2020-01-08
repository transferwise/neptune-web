const path = require('path');

module.exports = config => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        include: path.resolve(__dirname, '../../'),
      },
      {
        test: /\.js/,
        exclude: /lib/,
      },
    ],
  },
  plugins: [...config.plugins],
  externals: {
    bootstrap: true,
  },
});
