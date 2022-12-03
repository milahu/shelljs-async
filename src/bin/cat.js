import { makeBin, splitArgs } from "./.lib.js"
import minimist from "minimist"
/*
// imported by caller
import fs from "fs"
globalThis.fs = fs
*/

/** @typedef {import("./.types.js").Bin} Bin */

/**
* concat files to standard output
* @type {Bin}
*/
export function cat(...argsOpts) {
  // @ts-ignore
  const [args, options] = splitArgs(argsOpts)
  const arg = minimist(args)
  const files = arg._

  return makeBin(async function* cat_() {
    // TODO also read stdin
    for (const file of files) {
      var contents = await (await fs.promises.readFile(file)).toString();
      yield [1, contents]
    }
    return 0
  })
}
