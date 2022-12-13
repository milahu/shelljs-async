/** @typedef {import("./.types.js").Bin} Bin */
import { makeBin, splitArgs } from "./.lib.js"

/**
* print arguments
* @type {Bin}
*/
export function echo(...argsOpts) {
  // @ts-ignore
  const [args, options] = splitArgs(argsOpts)
  /** @return {AsyncGenerator<[number, string]>} */
  return makeBin(async function* echo_() {
    yield [1, args.join(" ") + "\n"]
    return 0
  })
}
