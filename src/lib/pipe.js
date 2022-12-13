/**
 * redirect stdout to stdin, print stderr
 * called from makeBin
 * @param {AsyncGenerator<[number, string]>} it
 */
export async function* pipe(it) {
  for await (const [stream, chunk] of it) {
    if (stream == 1) {
      yield [0, chunk]
    } else if (stream == 2) {
      console.error(chunk.trim())
    }
  }
}
