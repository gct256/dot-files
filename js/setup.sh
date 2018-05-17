#!/bin/sh

yarn add \
  immutable \
  react \
  react-dom \
  redux \
  redux-logger \
  redux-react

yarn add -D \
  babel-core \
  babel-loader \
  babel-preset-env \
  babel-preset-flow \
  babel-preset-react \
  babel-preset-stage-2 \
  css-loader \
  eslint \
  eslint-config-airbnb \
  eslint-plugin-flowtype \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  flow-bin \
  jest \
  style-loader \
  webpack \
  webpack-serve

rm -i "$0"
