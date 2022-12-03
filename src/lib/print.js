import { stdout } from "./stdout.js"

/**
 * print stdout of iterator
 * @param {AsyncGenerator<[number, string]>} it
 */
export async function print(it) {
  console.log(await stdout(it))
}
