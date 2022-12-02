import { readline } from "./readline.js"

/**
* read lines
* @param {Generator<string>} stdin
* returns maximum one line per chunk,
* or less than one line, or nothing.
*/
export async function* readlines(stdin) {
  while (true) {
    var line = await readline(stdin);
    //console.dir({line});
    //throw new Error("todo");
    if (line == undefined) {
      // end of input
      return
    }
    yield line
  }
}
