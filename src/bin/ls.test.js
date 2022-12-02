import "./.test.js"
import { ls } from "./.bin.js"
;(async function main() {
  for await (const [stream, chunk] of ls()()) {
    console.log(`stream ${stream}: chunk: ` + JSON.stringify(chunk))
  }

  for await (const [stream, chunk] of ls(["."])()) {
    console.log(`stream ${stream}: chunk: ` + JSON.stringify(chunk))
  }
})()
