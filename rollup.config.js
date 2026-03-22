import path from 'node:path'
import resolve from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    peerDepsExternal(),
    alias({ entries: [{ find: '@', replacement: path.resolve(import.meta.dirname, 'src') }] }),
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
