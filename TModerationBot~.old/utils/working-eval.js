const vm = require("node:vm")
const admins = ["916912179284967434"]



module.exports = (msg) => {
  const js = msg.content.split(/ |\n/g).slice(2).join("\n")
  if (js.length <= 0) return;
  // if (condition) {true} else {false}
  // is the same as
  // condition ? true : false
  const context = admins.includes(msg.user.id) ?
    // If theyre an admin:
    {
      msg: msg
    }
      :
    // If theyre not an admin:
    {
      msg: {
        client: {
          token: "nerd"
        }
      }
    };

  vm.createContext(context);
  let out = ["```js\n"]
  try {
    out.push(String(vm.runInContext(js, context)))
  } catch (e) {
    out.push(e)
  }
  out.push("\n```")
  msg.channel.send(out.join(""))
}