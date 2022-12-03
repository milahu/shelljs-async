/** @typedef {import("../bin/.types.js").BinArgs} BinArgs */
/** @typedef {import("../bin/.types.js").BinOptions} BinOptions */

/**
* @param {BinArgs} argsOpts
* @return {[string[], BinOptions]}
*/
export function splitArgs(argsOpts) {
  const lastArg = argsOpts[argsOpts.length - 1]
  /** @type {BinOptions} */
  let options = {}
  if (typeof lastArg == "object") {
    // @ts-ignore
    options = argsOpts.pop()
  }
  return [
    // @ts-ignore
    argsOpts,
    options
  ]
}
