/** @typedef {import("../bin/.types.js").BinChainer} BinChainer */

/**
 * call a binary
 * @type {BinChainer}
 */
export function call(bin, args = [], options = {}) {
  return bin(args, options)
}
