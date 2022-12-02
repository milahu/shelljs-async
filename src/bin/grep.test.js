import "./.fs.js"
import { debug } from "./.lib.js"

import { ls, grep } from "./.bin.js"
import { pipe } from "./.lib.js"

;(async function main() {
  var it = ls()()
  var it = grep([], { stdin: pipe(it) })()
  await debug(it)
})()
