const path = require('path');

const distPath = path.resolve(__dirname, 'dist');

const baseConfig = {
  mode: 'development',
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
      {
        test: /\.s[ca]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
    path: distPath,
    filename: 'script.js',
  },
};
