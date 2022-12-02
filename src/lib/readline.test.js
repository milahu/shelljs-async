import { readline } from "./readline.js"

function* stdin() {
  yield "a"
  yield "b"
  yield "c"
  yield "1"
  yield "\n"
  yield "abc2\n"
  yield "abc3"
}

var stdin_ = stdin()

for (let i = 0; i < 4; i++) {
  var line = await readline(stdin_)
  console.log("line: " + JSON.stringify(line))
}
