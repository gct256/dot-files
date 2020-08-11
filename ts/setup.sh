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
PKG="$PKG react react-dom classnames"
DPKG="$DPKG  @types/react @types/react-dom @types/classnames"

###
### redux
###
PKG="$PKG redux react-redux"
DPKG="$DPKG @types/react-redux"

PKG="$PKG redux-logger"
DPKG="$DPKG @types/redux-logger"

###
### immutable
###
PKG="$PKG immutable"

###
### prettier
###
DPKG="$DPKG prettier"

###
### eslint
###
DPKG="$DPKG eslint @typescript-eslint/eslint-plugin"
DPKG="$DPKG eslint-plugin-import eslint-plugin-promise"
DPKG="$DPKG @typescript-eslint/parser"
DPKG="$DPKG eslint-plugin-prettier eslint-config-prettier"

###
### eslint config
###
DPKG="$DPKG eslint-config-airbnb-base"
# OR
DPKG="$DPKG eslint-config-airbnb eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks@2"

###
### test
###
DPKG="$DPKG jest @types/jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-syntax-class-properties eslint-plugin-jest"
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

###
### tailwind
###
DPKG="$DPKG tailwindcss"

###
### fontawesome
###
PKG="$PKG @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome"

if [ -n "$PKG" ]; then
  yarn add $PKG
fi

if [ -n "$DPKG" ]; then
  yarn add -D $DPKG
fi
