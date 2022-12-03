import "./.fs.js"
import { debug } from "./.lib.js"

import { ls, grep } from "./.bin.js"
import { pipe, call } from "./.lib.js"

;(async function main() {
  console.log("ls test 1: pipe function")
  var it = ls()()
  var it = grep({ stdin: pipe(it) })()
  await debug(it)
  console.log("ls test 2: pipe chainer")
  var it = ls().pipe(grep)()
  //console.dir({it})
  await debug(it)

  console.log("ls test 3: call + pipe chainer")
  var it = call(ls).pipe(grep)()
  //console.dir({it})
  await debug(it)

  console.log("ls test 4: call + pipe chainer + pipe chainer")
  var it = (
    call(ls).
    pipe(grep).
    pipe(grep).
    iter()
  )
  //console.dir({it})
  await debug(it)

  console.log("ls test 5: call + pipe chainer + pipe chainer + debug")
  await (
    call(ls).
    pipe(grep).
    pipe(grep).
    debug()
  )

})()
