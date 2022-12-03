/** @typedef {import("./.types.js").Bin} Bin */
import { makeBin } from "./.lib.js"

/**
* gnu regular expressions
* @type {Bin}
*/
export function grep(args = [], options = {}) {
  return makeBin(async function* grep_() {
    for await (const [_stream, chunk] of options.stdin) {
      yield [1, `grep: ${chunk}`]
    }
    return 0
  })
}
