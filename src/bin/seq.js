import { makeBin, splitArgs } from "./.lib.js"
import minimist from "minimist"
/*
// imported by caller
import fs from "fs"
globalThis.fs = fs
*/

/** @typedef {import("./.types.js").Bin} Bin */

/**
* print a sequence of numbers
* @type {Bin}
*/
export function seq(...argsOpts) {
  // @ts-ignore
  const [args, options] = splitArgs(argsOpts)
  const arg = minimist(args)
  const operands = arg._
  let start = 1;
  let step = 1;
  let end;
  if (operands.length == 0) {
    throw new Error("seq: missing operand");
    /*
    // TODO send error to stderr
    const error = [2, ("seq: missing operand\n")]
    yield error
    */
  }
  // TODO handle errors:
  // $ seq asdf
  // seq: invalid floating point argument: ‘asdf’
  else if (operands.length == 1) {
    end = parseFloat(operands[0]);
  }
  else if (operands.length == 2) {
    start = parseFloat(operands[0]);
    end = parseFloat(operands[1]);
  }
  else if (operands.length == 3) {
    start = parseFloat(operands[0]);
    step = parseFloat(operands[1]);
    end = parseFloat(operands[2]);
  }
  else if (operands.length > 3) {
    throw new Error(`seq: extra operand ${JSON.stringify(String(operands[3]))}`);
  }

  //console.dir({args, start, step, end})

  return makeBin(async function* seq_() {
    for (let counter = start; counter <= end; counter += step) {
      const value = [1, (counter + "\n")]
      yield value
    }
    return 0
  })
}
