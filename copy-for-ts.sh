#!/bin/sh

SRCDIR=$(cd $(dirname $0);pwd)
DSTDIR=$(pwd)

cp -i -r "$SRCDIR/common/.vscode" "$DSTDIR/"
cp -i "$SRCDIR/common/.gitignore" "$DSTDIR/"

cp -i -r "$SRCDIR/ts/.vscode" "$DSTDIR/"
cp -i -r "$SRCDIR/ts/__tests__" "$DSTDIR/"
cp -i "$SRCDIR/ts/tsconfig.json" "$DSTDIR/"
cp -i "$SRCDIR/ts/tslint.json" "$DSTDIR/"
cp -i "$SRCDIR/ts/webpack.config.js" "$DSTDIR/"
cp -i "$SRCDIR/ts/package.json" "$DSTDIR/"
cp -i "$SRCDIR/ts/setup.sh" "$DSTDIR/"
