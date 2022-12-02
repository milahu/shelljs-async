import "./.fs.js"
import { debug } from "./.lib.js"

import { echo } from "./.bin.js"

;(async function main() {
  var it = echo(["hello", "world"])()
  await debug(it)
})()
