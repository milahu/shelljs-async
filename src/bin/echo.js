export function echo(args = [], options = {}) {
  /** @return {AsyncGenerator<[number, string]>} */
  return async function* echo_() {
    yield [1, args.join(" ") + "\n"]
    return 0
  }
}
