/** @param {Generator<string>} it */
export async function stringify(it) {
  let buf = ""
  for await (const chunk of it) {
    buf += chunk
  }
  return buf
}
