import "./.fs.js"
import { debug } from "./.lib.js"

import { ls } from "./.bin.js"

;(async function main() {
  var it = ls(["."])()
  await debug(it)
})()
