const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve');

const pkg = require('./package.json');

module.exports = {
  input: 'lib/main.js',
  external: ['atom'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs({
      requireReturnsDefault: "auto",
    }),
    babel({ babelHelpers: 'bundled' }),
  ],
};
