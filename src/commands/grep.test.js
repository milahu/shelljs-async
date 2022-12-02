import { ls, grep } from "../../src/index.js"

(async function main() {

for await (const chunk of grep([], {stdin: ls()})()) {
  process.stdout.write(chunk);
}

})();
