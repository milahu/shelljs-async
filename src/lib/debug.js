/**
 * print stdout, stderr, code of iterator
 * @param {AsyncGenerator<[number, string]>} it
 */
export async function debug(it) {
  let result = await it.next()
  while (result.done == false) {
    const [stream, chunk] = result.value
    console.log(`stream ${stream}: chunk: ` + JSON.stringify(chunk))
    result = await it.next()
  }
  const code = result.value
  console.log(`code ${code}`)
}
