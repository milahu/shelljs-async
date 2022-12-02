import { readline } from "./readline.js"

function* stdin() {
  yield "a"
  yield "b"
  yield "c"
  yield "1"
  yield "\n"
  yield "abc2\n"
}

var stdin_ = stdin()

for (let i = 0; i < 3; i++) {
  var line = await readline(stdin_)
  console.log("line: " + JSON.stringify(line))
}

/*
for await (const line of readline(stdin())) {
console.log("line: " + JSON.stringify(line))
}
*/
