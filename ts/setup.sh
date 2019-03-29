#!/bin/sh

###
### typescript
###
yarn add -D typescript
yarn add -D @types/node

###
### react
###
yarn add react react-dom
yarn add -D @types/react @types/react-dom

###
### redux
###
yarn add redux react-redux
yarn add -D @types/react-redux

###
### eslint
###
yarn add -D eslint @typescript-eslint/eslint-plugin eslint-config-prettier
yarn add -D eslint-plugin-import eslint-plugin-promise

###
### eslint config
###
yarn add -D eslint-config-airbnb-base
# OR
yarn add -D  eslint-config-airbnb eslint-plugin-react eslint-plugin-jsx-a11y

###
### test
###
yarn add -D jest @types/jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-syntax-class-properties
yarn add -D @babel/preset-react react-test-renderer @types/react-test-renderer

###
### bundler (webpack)
###
yarn add -D webpack webpack-cli webpack-dev-server ts-loader
yarn add -D css-loader style-loader
yarn add -D sass-loader node-sass

###
### bundler (rollup)
###
yarn add -D rollup rollup-plugin-auto-external rollup-plugin-typescript2
