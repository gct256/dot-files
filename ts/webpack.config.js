const path = require('path');

const isDev = process.env.WEBPACK_SERVE;
// const isDev = process.env.NODE_ENV !== 'production'

const distPath = path.resolve(__dirname, isDev ? 'dist' : 'dist');

const baseConfig = {
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

module.exports = {
  ...baseConfig,
  entry: './src/script.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js',
  },
};
