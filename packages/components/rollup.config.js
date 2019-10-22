import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

// Rollup
const input = 'src/index.js';
const external = ['react', 'react-dom', 'prop-types'];

// Rollup can resolve only explicit exports.
// https://github.com/rollup/rollup/issues/2671
// https://github.com/rollup/rollup-plugin-commonjs
const namedExports = {
  'node_modules/@transferwise/formatting/dist/formatting.js': [
    'formatAmount',
    'formatMoney',
    'formatDate',
    'formatNumber',
  ],
};

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
};

// Babel
const babelrc = false;
const babelPlugins = [
  '@babel/plugin-proposal-class-properties'
];
const exclude = 'node_modules/**';
const presets = [
  "@babel/env",
  "@babel/preset-react"
];


const DEFAULT_BABEL_CONFIG = { babelrc, presets, plugins: babelPlugins, exclude };

// Plugins
const plugins = [
  resolve({ browser: true }),
  babel({
    runtimeHelpers: true,
    ...DEFAULT_BABEL_CONFIG,
  }),
  commonjs({ sourcemap: false, namedExports }),
  postcss({
    config: true,
    extract: true,
    extensions: ['.css'],
  }),
  minify(),
];

export default [
  {
    input,
    output: [
      { file: './build/main.js', name: pkg.name, format: 'umd', globals },
    ],
    external,
    plugins,
  },
];
