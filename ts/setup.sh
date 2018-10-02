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
  typescript \
  @types/react @types/react-dom \
  @types/react-redux \
  @types/redux-logger \
  webpack \
  webpack-cli \
  webpack-serve \
  rollup rollup-plugin-typescript2 \
  ts-loader \
  css-loader style-loader \
  sass-loader node-sass \
  jest ts-jest @types/jest \
  tslint tslint-microsoft-contrib tslint-react

rm "$0"
