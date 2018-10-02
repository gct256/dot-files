#!/bin/sh

SRCDIR=$(cd $(dirname $0);pwd)
DSTDIR=$(pwd)

cp -i -r "$SRCDIR/common/.vscode" "$DSTDIR/"
cp -i "$SRCDIR/common/.gitignore" "$DSTDIR/"

cp -i "$SRCDIR/web/package.json" "$DSTDIR/"
cp -i "$SRCDIR/web/setup.sh" "$DSTDIR/"
cp -i "$SRCDIR/web/prettier.config.js" "$DSTDIR/"
cp -i "$SRCDIR/web/bs-config.js" "$DSTDIR/"
