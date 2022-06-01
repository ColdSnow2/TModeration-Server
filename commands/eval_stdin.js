const { stdin, stdout } = require("process")
const util = require("util")
const colors = require("colors")

let username = "tmod"
let hostname = "developers-eval"

// Linux doesn't have $ in the username >> ? then // wait i love blue and cyan
client.on("ready", () => process.stdout.write(colors.brightCyan("\n" + `${username}@${hostname}` + "> ")))
stdin.on("data", (chunk) => {
  chunk = chunk.toString().trim()
  if (chunk === "") return;
  let out = "";
  try {
    out = eval(chunk)
    if (out == undefined || typeof out == "undefined" || out == null) out = String(out)
    if (out.constructor.name == "Object" || out.constructor.name == "Array") out = util.inspect(out, false, null, true)
    out = colors.green(out)
  } catch (e) {
    out = e
    out = colors.red(out)
  }
  process.stdout.write(`${out}\n`)
  process.stdout.write(colors.brightCyan("\n" + `${username}@${hostname}` + "> "))
})