import "./.test.js"
import { echo } from "./.bin.js"
//import { stringify } from "./.lib.js"
;(async function main() {
  for await (const [stream, chunk] of echo(["hello", "world"])()) {
    console.log(`stream ${stream}: chunk: ` + JSON.stringify(chunk))
  }
})()
