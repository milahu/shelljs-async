import "./.fs.js"
import { echo } from "./.bin.js"
//import { stringify } from "./.lib.js"
;(async function main() {
  var it = echo(["hello", "world"])()
  let result = await it.next()
  while (result.done == false) {
    const [stream, chunk] = result.value
    console.log(`stream ${stream}: chunk: ` + JSON.stringify(chunk))
    result = await it.next()
  }
  const code = result.value
  console.log(`code ${code}`)
})()
