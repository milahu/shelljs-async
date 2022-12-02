import "./.test.js"

import { ls } from "./ls.js"
;(async function main() {
  for await (const chunk of ls()()) {
    console.log("chunk: " + JSON.stringify(chunk))
  }

  for await (const chunk of ls(["."])()) {
    console.log("chunk: " + JSON.stringify(chunk))
  }
})()
