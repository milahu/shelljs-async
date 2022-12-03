import { makeBin, splitArgs } from "./.lib.js"
import minimist from "minimist"
/*
// imported by caller
import fs from "fs"
globalThis.fs = fs
*/

/** @typedef {import("./.types.js").Bin} Bin */

/**
* list files
* @type {Bin}
*/
export function ls(...argsOpts) {
  // @ts-ignore
  const [args, options] = splitArgs(argsOpts)
  const arg = minimist(args)
  const files = arg._
  if (files.length == 0) files.push(".")
  //console.dir({arg, files})

  return makeBin(async function* ls_() {
    for (const file of files) {
      const stats = await fs.promises.stat(file)
      if (stats.isDirectory()) {
        for (const file2 of await fs.promises.readdir(file)) {
          /** @type {[number, string]} */
          const value = [1, (file2 + "\n")]
          yield value
        }
      } else if (stats.isFile()) {
        /** @type {[number, string]} */
        const value = [1, (file + "\n")]
        yield value
      }
    }
    return 0
  })
}
