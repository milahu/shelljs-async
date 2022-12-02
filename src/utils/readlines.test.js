import { readlines } from "./readlines.js"

function* stdin() {
  yield "a"
  yield "b"
  yield "c"
  yield "1"
  yield "\n"
  yield "abc2\n"
  yield "abc3"
}

for await (const line of readlines(stdin())) {
  console.log("line: " + JSON.stringify(line))
}
