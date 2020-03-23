#!/bin/sh

SRCDIR=$(cd $(dirname $0);pwd)
DSTDIR=$(pwd)

cp -i -r "$SRCDIR/common/.vscode" "$DSTDIR/"
cp -i "$SRCDIR/common/.gitignore" "$DSTDIR/"

cp -i -r "$SRCDIR/web/.vscode" "$DSTDIR/"
cp -i -r "$SRCDIR/web/src" "$DSTDIR/"
cp -i "$SRCDIR/web/.eslintrc.yml" "$DSTDIR/"
cp -i "$SRCDIR/web/package.json" "$DSTDIR/"
cp -i "$SRCDIR/web/prettier.config.js" "$DSTDIR/"
cp -i "$SRCDIR/web/setup.sh" "$DSTDIR/"

cat "$SRCDIR/web/.gitignore" >> "$DSTDIR/.gitignore"
