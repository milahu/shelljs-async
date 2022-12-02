/** @param {AsyncGenerator<[number, string]>} it */
export async function stringify(it) {
  let buf = ""
  for await (const [stream, chunk] of it) {
    // only stdout
    if (stream == 1) {
      buf += chunk
    }
  }
  return buf
}
