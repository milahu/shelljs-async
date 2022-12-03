import "./.fs.js"
import { debug } from "./.lib.js"

import { ls, grep } from "./.bin.js"
import { pipe } from "./.lib.js"

;(async function main() {
  console.log("ls test 1: pipe function")
  var it = ls()()
  var it = grep([], { stdin: pipe(it) })()
  await debug(it)
  console.log("ls test 2: pipe chainer")
  var it = ls().pipe(grep, [], {})()
  //console.dir({it})
  await debug(it)
})()
