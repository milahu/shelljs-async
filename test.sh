#! /bin/sh

find src -name '*.test.js' | while read f
do
  (
    set -x
    node $f
  )
done
