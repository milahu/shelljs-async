/**
 * get stdout of iterator
 * @param {AsyncGenerator<[number, string]>} it
 * @return {Promise<string>}
 */
export async function stdout(it) {
  let buf = ""
  let result = await it.next()
  while (result.done == false) {
    const [stream, chunk] = result.value
    if (stream == 1) {
      buf += chunk
    }
    result = await it.next()
  }
  return buf
}
