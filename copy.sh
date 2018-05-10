#!/bin/sh

SRCDIR=$(cd $(dirname $0);pwd)
DSTDIR=$(pwd)

mkdir -p "$DSTDIR/.vscode"
cp -n "$SRCDIR/.vscode/settings.json" "$DSTDIR/.vscode/"
cp -n "$SRCDIR/babelrc/.babelrc" "$DSTDIR/"
cp -n "$SRCDIR/eslintrc/.eslintrc.yml" "$DSTDIR/"
cp -n "$SRCDIR/flowconfig/.flowconfig" "$DSTDIR/"
cp -n "$SRCDIR/gitignore/.gitignore" "$DSTDIR/"
