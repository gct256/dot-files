#!/bin/sh

PKG=""
DPKG=""

###
### typescript
###
DPKG="$DPKG typescript"
DPKG="$DPKG @types/node"

###
### react
###
PKG="$PKG react react-dom"
DPKG="$DPKG  @types/react @types/react-dom"

###
### redux
###
PKG="$PKG redux react-redux"
DPKG="$DPKG @types/react-redux"

###
### eslint
###
DPKG="$DPKG eslint @typescript-eslint/eslint-plugin eslint-config-prettier"
DPKG="$DPKG eslint-plugin-import eslint-plugin-promise"

###
### eslint config
###
DPKG="$DPKG eslint-config-airbnb-base"
# OR
DPKG="$DPKG  eslint-config-airbnb eslint-plugin-react eslint-plugin-jsx-a11y"

###
### test
###
DPKG="$DPKG jest @types/jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-syntax-class-properties"
DPKG="$DPKG @babel/preset-react react-test-renderer @types/react-test-renderer"

###
### bundler (webpack)
###
DPKG="$DPKG webpack webpack-cli webpack-dev-server ts-loader"
DPKG="$DPKG css-loader style-loader"
DPKG="$DPKG sass-loader node-sass"

###
### bundler (rollup)
###
DPKG="$DPKG rollup rollup-plugin-auto-external rollup-plugin-typescript2"

if [ -n "$PKG" ]; then
  yarn add $PKG
fi

if [ -n "$DPKG" ]; then
  yarn add -D $DPKG
fi
