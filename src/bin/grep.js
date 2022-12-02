export function grep(args = [], options = {}) {
  /** @return {AsyncGenerator<[number, string]>} */
  return async function* grep_() {
    for await (const [_stream, chunk] of options.stdin) {
      yield [1, `grep: ${chunk}`]
    }
  }
}
