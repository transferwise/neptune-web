import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

// Rollup
const input = 'src/index.js';
const file = pkg.main;

// Plugins
const plugins = [
  // Resolves modules from node_modules
  resolve(),
  babel({
    runtimeHelpers: true,
    exclude: [/node_modules/],
  }),
  // Convert CJ into ES6
  commonjs({ sourcemap: false }),
  uglify(),
];

export default [
  {
    input,
    output: [{ file, name: pkg.name, format: 'umd' }],
    external: [
      ...Object.keys(pkg.devDependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins,
  },
];
