import minimist from "minimist"
/*
// imported by caller
import fs from "fs"
globalThis.fs = fs
*/

export function ls(args = [], options = {}) {
  const arg = minimist(args)
  const files = arg._
  if (files.length == 0) files.push(".")
  //console.dir({arg, files})

  return async function* ls_() {
    for (const file of files) {
      const stats = await fs.promises.stat(file)
      if (stats.isDirectory()) {
        for (const file2 of await fs.promises.readdir(file)) yield file2 + "\n"
      } else if (stats.isFile()) {
        yield file + "\n"
      }
    }
  }
}
