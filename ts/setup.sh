#!/bin/sh

yarn add \
  immutable \
  react \
  react-dom \
  redux \
  redux-logger \
  redux-react \
  typed-immutable-record

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
  tslint-microsoft-contrif \
  tslint-react \
  typescript \
  webpack \
  webpack-serve

rm -i "$0"
