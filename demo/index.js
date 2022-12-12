import * as BrowserFS from "browserfs"
import pify from "pify"

/*
import {EditorView, basicSetup} from "codemirror"
//import {javascript} from "@codemirror/lang-javascript"
const PS1 = "~ $ "
const editor = new EditorView({
  extensions: [
    basicSetup,
    //javascript(),
  ],
  parent: document.body,
  doc: PS1,
})
console.log("editor", editor)
*/

import * as bin from "../bin.js"
import * as lib from "../lib.js"



import Shell from "../src/cmjs-shell/shell.js"

//import * as CodeMirror from "codemirror"
//import {javascript} from "@codemirror/lang-javascript"
import {StreamLanguage} from "@codemirror/language"
//import {lua} from "@codemirror/legacy-modes/mode/lua"
//import {shell} from "@codemirror/legacy-modes/mode/shell"
import {javascript} from "@codemirror/legacy-modes/mode/javascript"

import * as esprima from "esprima"

  /**
   * this is our interpreter.  note that writing responses to the shell
   * is decoupled from commands -- the result of this function (via callback)
   * only affects display of the prompt.
   */
  function exec( cmd, callback ){
    var ps = shell.PARSE_STATUS.OK;
    if( cmd.length ){
      var composed = cmd.join( "\n" );
      console.log("composed", composed)
      const parse = esprima.parse;
      try { parse( composed ); }
      catch( err ){
        console.log("err", err)
        if( err.description.match( /Unexpected end of input/ )){
          ps = shell.PARSE_STATUS.INCOMPLETE;
        }
      }
      if( ps == shell.PARSE_STATUS.OK ){
        /*
        // TODO move the "shell.response" code into "composed"
        // wrap async code
        composed = [
          '(async () => { ', composed, '; })()',
          '.then((result) => TODO)',
          '.catch((error) => TODO);'
        ].join('');
        */
        try {
          // eval javascript
          // TODO mock/patch console.log, so we see output in gui
          console.log("eval:\n" + composed)
          var text, result = window.eval(composed);
          console.log("eval", {text, result})
          try { text = JSON.stringify( result ); }
          catch( e ){ text = result.toString(); }
          // unix convention: newline after every line
          text += "\n";
          // send result to shell
          shell.response( text );
        } catch( e ) {
          shell.response( e.name + ": " + e.message + "\n", "shell-error" );
        }
      }
    }
    callback.call( this, { parsestatus: ps });
  }

  /** one overloaded global method */
  window.print = function(a){ shell.response( JSON.stringify(a) ); }

  /**
   * this is the shell constructor
   */
  var shell = new Shell({
    //container: '#shell-container',
    container: document.body,
    //mode: 'javascript',
    mode: javascript,
    exec_function: exec,
    initial_prompt: "$ ",
  });

  /**
   * set up style and focus
   */
  //shell.setOption( "theme", "zenburn" );
  //shell.focus();

  //var banner = "Welcome to shelljs-async. Please try some bash ...\n"
  var banner = "The GUI terminal is work in progress, please see your JavaScript console\n"
  shell.response( banner, "banner" );






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

  // needed for shelljs-async
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

  console.log(`await ls(".").debug()`)
  console.log(await ls(".").debug())

  console.log(`await ls(".").print()`)
  console.log(await ls(".").print())

  console.log(`await ls(".").stdout()`)
  console.log(await ls(".").stdout())

  console.log(`await ls(".").pipe(grep).stdout()`)
  console.log(await ls(".").pipe(grep).stdout())

  console.log(`await ls(".").pipe(grep).pipe(grep).stdout()`)
  console.log(await ls(".").pipe(grep).pipe(grep).stdout())

  console.log(`await cat("test.txt").print()`)
  console.log(await cat("test.txt").print())

});
