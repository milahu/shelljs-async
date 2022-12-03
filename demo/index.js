import * as BrowserFS from "browserfs"
import pify from "pify"

import * as bin from "../bin.js"
import * as lib from "../lib.js"

globalThis._bin = bin
globalThis._lib = lib

// put all binaries in global scope
for (const name in bin) {
  globalThis[name] = bin[name]
}

// set globalThis.require
BrowserFS.install(globalThis);

BrowserFS.configure({
  fs: "IndexedDB",
  options: {},
}, async function(err) {
  if (err) { throw err; }

  globalThis.fs = require('fs');

  // browserfs has only callback API
  fs.writeFile('/test.txt', 'Cool, I can do this in the browser!', function(err) {
    if (err) { throw err; }
    fs.readFile('/test.txt', function(err, contents) {
      if (err) { throw err; }
      console.log(contents.toString());
    });
  });

  // ... but we can promisify to async/await
  // @ts-ignore
  fs.promises = pify(fs);
  try {
    await fs.promises.writeFile('/test.txt', 'Cool, I can do this in the browser!');
  }
  catch (err) { console.error(err); }
  var contents = await fs.promises.readFile('/test.txt');
  console.log(contents.toString());

  console.log(`ls(".").debug()`)
  console.log(ls(".").debug())

});
