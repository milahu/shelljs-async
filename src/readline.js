/**
* read one line
* @param {Generator<string>} stdin
* returns maximum one line per chunk,
* or less than one line, or nothing.
*/
export async function readline(stdin) {
  let buf = "";
  while (true) {
    const chunk = stdin.next();
    buf += chunk.value;
    if (chunk.done || chunk.value.endsWith("\n")) break;
  }
  return buf;
}
