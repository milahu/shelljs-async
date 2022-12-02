export function grep(args = [], options = {}) {
  return async function* grep_() {
    for await (const chunk of options.stdin()) {
      yield `grep: ${chunk}`
    }
  }
}
