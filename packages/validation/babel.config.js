const umdConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.0.0',
        modules: false,
      },
    ],
  ],
};

const testConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

const esConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.0.0',
        modules: false,
      },
    ],
    ['minify', { builtIns: false, mangle: { exclude: { separators: true } } }],
  ],
};

module.exports = {
  sourceType: 'unambiguous',
  plugins: ['@babel/plugin-transform-runtime'],
  env: {
    umd: umdConfig,
    es: esConfig,
    test: testConfig,
  },
};
