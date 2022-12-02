import "./.test.js"

import { ls, grep, pipe } from "../../src/index.js"
;(async function main() {
  for await (const [stream, chunk] of grep([], { stdin: pipe(ls()()) })()) {
    console.log(`stream ${stream}: chunk: ` + JSON.stringify(chunk))
  }
})()
