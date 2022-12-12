# shelljs-async

bash syntax and gnu coreutils in javascript

async version of [shelljs](https://github.com/shelljs/shelljs)

- works in a web browser
  - browserfs
  - xterm.js
- async by default
  - https://github.com/shelljs/shelljs/issues/2
- emulate an interactive shell
  - parse input strings from a bash prompt

## status

proof of concept

## examples

```js
await ls(".").print()
/*
test.txt
hello.txt
readme.md
src
demo
*/

await ls(".").debug()
/*
stream 1: chunk: "test.txt\n"
stream 1: chunk: "hello.txt\n"
stream 1: chunk: "readme.md\n"
stream 1: chunk: "src\n"
stream 1: chunk: "demo\n"
*/

await ls(".").pipe(grep).stdout()
/*
grep: test.txt
grep: hello.txt
grep: readme.md
grep: src
grep: demo
*/

await cat("test.txt").print()
/*
Cool, I can do this in the browser!
*/
```

## similar projects

- https://github.com/dthree/cash - 8K stars - Cross-platform Linux commands in ES6. only for node.js
  - https://news.ycombinator.com/item?id=11334597
- https://github.com/shelljs/shelljs - 14K stars
  - https://github.com/nfischer/shelljs-transpiler - transpile Bash to ShellJS
- https://github.com/yankeeinlondon/async-shelljs - adds an async implementation of "exec"
- https://github.com/miketalbot/js-coroutines - async generators: JSON.parse, JSON.stringify, compress, decompress
- https://github.com/bashojs/basho - 120 stars - Lazy shell pipelines in plain JavaScript
- https://github.com/plasma-umass/browsix - https://browsix.org/ - 3K stars - Browsix is a Unix-like operating system for the browser.
- https://github.com/UltiRequiem/coreutils - 30 stars - deno - Cross-platform Deno rewrite of the GNU Coreutils
- https://github.com/rethab/deno-bash - A silly little bash interpreter written in TypeScript for Deno.
- https://github.com/taokann/WeBash
- https://github.com/lpan/rebash - react
- https://github.com/mullaney/bash - minimal, some commands, fs async api
- https://github.com/austinoboyle/bash - react
- https://github.com/hamaxx/jsbash - Basic bash interpreter in javascript. pipes
- https://github.com/stencila/basha - Bash interpreter for executable documents. deprecated for https://github.com/takluyver/bash_kernel in python and https://github.com/stencila/stencila
- https://github.com/krithravi/bash-prompt-interpreter - Interprets the values of Bash prompts. Submitted to Sunhacks 2020!
- https://github.com/codemirror/legacy-modes/blob/main/mode/shell.js
- https://github.com/milahu/nix-eval-js - nix interpreter in javascript, based on lezer-parser
