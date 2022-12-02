import * as BrowserFS from "browserfs"
import pify from "pify"

// set globalThis.require
BrowserFS.install(globalThis);

BrowserFS.configure({
  fs: "IndexedDB",
  options: {},
}, async function(err) {
  if (err) { throw err; }

  var fs = require('fs');

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

});
