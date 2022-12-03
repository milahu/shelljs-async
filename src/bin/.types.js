/**
* @typedef {AsyncGenerator<[number, string]>} BinResultResult
*
* @typedef {() => BinResultResult} _BinResult
*
* @typedef {(bin: Bin, args?: BinArgs, options?: BinOptions) => BinResult} BinChainer
*
* @typedef {Object} BinChainers
* @property {BinChainer} pipe pipe stdout to stdin
*
* @typedef {_BinResult & BinChainers} BinResult
*
* @typedef {string[]} BinArgs
*
* @typedef {Object} BinOptions
*
* @typedef {(args: BinArgs, options: BinOptions) => BinResult} Bin
*/

// fix: file is not a module
export default undefined
