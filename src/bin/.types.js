/**
* @typedef {AsyncGenerator<[number, string]>} ChunkGenerator
*
* @typedef {() => ChunkGenerator} _BinResult
*
* @typedef {(bin: Bin, args?: BinArgs) => BinResult} BinChainer
*
* @typedef {Object} BinChainers
* @property {BinChainer} pipe pipe stdout to stdin
* @property {() => ChunkGenerator} iter get output as chunk iterator
* @property {() => Promise<void>} debug debug output
* @property {() => Promise<void>} stdout get stdout as string
* @property {() => Promise<void>} print print stdout
*
* @typedef {_BinResult & BinChainers} BinResult
*
* @typedef {string[] | [...string[], BinOptions]} BinArgs
*
* @typedef {Object} BinOptions
* @property {ChunkGenerator} [stdin] input chunks
*
* @typedef {(...args: BinArgs) => BinResult} Bin
*/

// fix: file is not a module
export default undefined
