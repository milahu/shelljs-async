//import ls from "../../src/commands/ls.js"
import { ls } from "../../src/index.js"

(async function main() {

for await (const chunk of ls()) {
  process.stdout.write(chunk);
}

})();
