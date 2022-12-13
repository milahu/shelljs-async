/** @typedef {import("../bin/.types.js").Bin} Bin */
/** @typedef {import("../bin/.types.js")._BinResult} _BinResult */
/** @typedef {import("../bin/.types.js").BinResult} BinResult */
/** @typedef {import("../bin/.types.js").BinChainer} BinChainer */

import { pipe, debug, print, stdout, splitArgs } from "./.lib.js"

/**
 * add methods to a BinResult
 * @param {_BinResult} fn
 * @return {BinResult}
 */
export function makeBin(fn) {
//   * @param {(args: string[], options: Object) => AsyncGeneratorFunction} reader 

  // FIXME type cast with jsdoc types
  /** @type {BinResult} */
  const _fn = fn

  _fn.pipe = (reader, ...argsOpts) => {
    const [args, options] = splitArgs(argsOpts)
    if (options.stdin) {
      throw new Error("options.stdin must be empty in pipe")
    }
    options.stdin = pipe(_fn())
    return reader(...args, options)
  }

  _fn.iter = () => _fn()
  _fn.debug = () => debug(_fn())
  _fn.print = () => print(_fn())
  _fn.stdout = () => stdout(_fn())

  return _fn
}
