import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

const base = {
  input: './src/script.jsx',
  plugins: [babel(), commonjs(), nodeResolve()]
}

export default [
  {
    ...base,
    output: {
      file: './index.js',
      format: 'cjs'
    }
  },
  {
    ...base,
    output: {
      file: './index.mjs',
      format: 'es'
    }
  }
]
