/** @typedef {import("./.types.js").Bin} Bin */
import { makeBin, splitArgs } from "./.lib.js"
import minimist from "minimist"

/**
* Print the first 10 lines of each FILE to standard output.
* With more than one FILE, precede each with a header giving the file name.
* With no FILE, or when FILE is -, read standard input.
* @type {Bin}
*/
export function head(...argsOpts) {
  // @ts-ignore
  const [args, options] = splitArgs(argsOpts)
  const arg = minimist(args)
  /*
  // TODO implement reading files
  const files = arg._
  if (files.length == 0) {
    files.push("-")
  }
  */
  let lines = 10
  if (arg.n || arg.lines) {
    lines = parseInt(arg.n || arg.lines)
  }
  return makeBin(async function* head_() {
    if (lines == 0) {
      return 0
    }
    let doneLines = 0
    for await (const [_stream, chunk] of options.stdin) {
      yield [1, chunk]
      doneLines++
      if (doneLines >= lines) {
        return 0;
      }
    }
    return 0
  })
}
