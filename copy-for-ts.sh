#!/bin/sh

SRCDIR=$(cd $(dirname $0);pwd)
DSTDIR=$(pwd)

cp -i -r "$SRCDIR/common/.vscode" "$DSTDIR/"
cp -i "$SRCDIR/common/.gitignore" "$DSTDIR/"

cp -i -r "$SRCDIR/ts/.vscode" "$DSTDIR/"
cp -i -r "$SRCDIR/ts/__tests__" "$DSTDIR/"
cp -i -r "$SRCDIR/ts/dist" "$DSTDIR/"
cp -i -r "$SRCDIR/ts/src" "$DSTDIR/"

cp -i "$SRCDIR/ts/.eslintrc.yml" "$DSTDIR/"
cp -i "$SRCDIR/ts/babel.config.js" "$DSTDIR/"
cp -i "$SRCDIR/ts/package.json" "$DSTDIR/"
cp -i "$SRCDIR/ts/prettier.config.js" "$DSTDIR/"
cp -i "$SRCDIR/ts/rollup.config.js" "$DSTDIR/"
cp -i "$SRCDIR/ts/setup.sh" "$DSTDIR/"
cp -i "$SRCDIR/ts/tsconfig.json" "$DSTDIR/"
cp -i "$SRCDIR/ts/webpack.config.js" "$DSTDIR/"
cat "$SRCDIR/ts/.gitignore" >> "$DSTDIR/.gitignore"
