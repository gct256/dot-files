#!/bin/sh

yarn add \
  react react-dom \
  redux react-redux immutable@rc \
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
  ts-loader \
  css-loader style-loader \
  sass-loader node-sass \
  jest ts-jest @types/jest \
  tslint tslint-microsoft-contrib tslint-react

rm "$0"
