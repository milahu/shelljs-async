/**
* read one line
* @param {Generator<string>} stdin
* returns maximum one line per chunk,
* or less than one line, or nothing.
*/
export async function readline(stdin) {
  /** @type {string | undefined} */
  let buf;
  while (true) {
    const chunk = stdin.next();
    if (chunk.done || chunk.value == undefined) break;
    if (buf == undefined) buf = ""
    buf += chunk.value;
    //console.dir({chunk});
    //throw new Error("todo")
    if (chunk.value.endsWith("\n")) break;
  }
  return buf;
}
