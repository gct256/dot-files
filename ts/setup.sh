#!/bin/sh

yarn add \
  immutable@rc \
  react \
  react-dom \
  redux \
  redux-logger \
  react-redux

yarn add -D \
  @types/jest \
  @types/react \
  @types/react-dom \
  @types/react-redux \
  @types/redux-logger \
  css-loader \
  jest \
  style-loader \
  ts-jest \
  ts-loader \
  tslint \
  tslint-microsoft-contrib \
  tslint-react \
  typescript \
  webpack \
  webpack-cli \
  webpack-serve

rm "$0"
