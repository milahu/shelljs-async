/** @typedef {import("../bin/.types.js").BinChainer} BinChainer */

/**
 * call binary
 * @type {BinChainer}
 */
export function call(bin, ...argsOpts) {
  return bin(...argsOpts)
}
