#!/bin/sh

SRCDIR=$(cd $(dirname $0);pwd)
DSTDIR=$(pwd)

cp -i -r "$SRCDIR/common/.vscode" "$DSTDIR/"
cp -i "$SRCDIR/common/.gitignore" "$DSTDIR/"

cp -i -r "$SRCDIR/js/.vscode" "$DSTDIR/"
cp -i -r "$SRCDIR/js/__tests__" "$DSTDIR/"
cp -i -r "$SRCDIR/js/dist" "$DSTDIR/"
cp -i "$SRCDIR/js/.babelrc" "$DSTDIR/"
cp -i "$SRCDIR/js/.eslintrc.yml" "$DSTDIR/"
cp -i "$SRCDIR/js/.flowconfig" "$DSTDIR/"
cp -i "$SRCDIR/js/setup.sh" "$DSTDIR/"
