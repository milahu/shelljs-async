/** @typedef {import("../bin/.types.js").BinChainer} BinChainer */

/**
 * call binary
 * @type {BinChainer}
 */
export function call(bin, ...argsOpts) {
  // @ts-ignore
  return bin(...argsOpts)
}
