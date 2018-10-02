#!/bin/sh

yarn add \
  react react-dom \
  redux immutable@rc \
  react-redux \
  redux-logger \
  bulma \
  @fortawesome/fontawesome @fortawesome/fontawesome-free-solid \
  @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome

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
  eslint-config-airbnb-base \
  eslint-plugin-flowtype \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  rollup \
  rollup-plugin-babel \
  rollup-plugin-commonjs \
  rollup-plugin-node-resolve \
  flow-bin \
  jest \
  style-loader \
  webpack \
  webpack-serve

rm "$0"
