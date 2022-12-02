import * as BrowserFS from "browserfs"
import pify from "pify"

import * as bin from "../bin.js"
import * as lib from "../lib.js"

globalThis.bin = bin
globalThis.lib = lib

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
  await fs.promises.writeFile('/test.txt', 'Cool, I can do this in the browser!');
  var contents = await fs.promises.readFile('/test.txt');
  console.log(contents.toString());

  console.log(`await lib.stringify(bin.ls(["."])())`)
  console.log(await lib.stringify(bin.ls(["."])()))

});
