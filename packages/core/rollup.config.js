import builtins from 'builtin-modules'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default {
  external: builtins,
  input: 'index.js',
  output: { file: 'dist.js', format: 'cjs' },
  plugins: [
    nodeResolve({ preferBuiltins: true }),
    commonjs(),
    terser()
  ]
}
