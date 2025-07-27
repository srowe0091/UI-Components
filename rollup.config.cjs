const path = require('path')
const resolve = require('@rollup/plugin-node-resolve')
const alias = require('@rollup/plugin-alias')
const babel = require('@rollup/plugin-babel').default
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const copy = require('rollup-plugin-copy')

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    peerDepsExternal(),
    alias({ entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }] }),
    resolve({ extensions: ['.js', '.jsx'] }),
    copy({
      targets: [
        { src: 'src/**/*.css', dest: 'dist' } // Copies all files from public/ to dist/
      ],
      flatten: true // keep folder structure
    }),
    babel({
      presets: [['@babel/preset-react', { runtime: 'automatic' }]],
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'],
      exclude: 'node_modules/**'
    })
  ],
  onwarn(warning, warn) {
    if (warning.message.includes('"use client"')) return
    warn(warning)
  }
}
