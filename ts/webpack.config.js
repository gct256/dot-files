const path = require('path');

// 出力ディレクトリ
const distPath = path.resolve(__dirname, 'dist');

// リリースビルド切り替え
const isProduction = process.env.NODE_ENV === 'production';

const baseConfig = {
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.s[ca]ss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  target: 'web',
};

if (!isProduction) {
  baseConfig.devtool = 'source-map';
  baseConfig.devServer = {
    port: 3000,
    contentBase: distPath,
  };
}

module.exports = {
  ...baseConfig,
  entry: './src/script.tsx',
  output: {
    path: distPath,
    filename: 'script.js',
  },
};
