import "./.test.js"
import { ls, grep } from "./.bin.js"
import { pipe } from "./.lib.js"
;(async function main() {
  for await (const [stream, chunk] of grep([], { stdin: pipe(ls()()) })()) {
    console.log(`stream ${stream}: chunk: ` + JSON.stringify(chunk))
  }
})()
