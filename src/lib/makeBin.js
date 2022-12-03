/** @typedef {import("../bin/.types.js").Bin} Bin */
/** @typedef {import("../bin/.types.js")._BinResult} _BinResult */
/** @typedef {import("../bin/.types.js").BinResult} BinResult */
/** @typedef {import("../bin/.types.js").BinChainer} BinChainer */

import { pipe } from "./.lib.js"

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

  /**
   * pipe stdout to stdin
   * @type {BinChainer}
   */
  _fn.pipe = (reader, args = [], options = {}) => {
    options.stdin = pipe(_fn())
    return reader(args, options)
  }

  return _fn
}
