const { VM } = require('vm2');

const vm = new VM({
    timeout: 1000,
    allowAsync: true,
    sandbox: {}
});

function untrusted_eval (str, trusted, m) {
  let msg = m;
  let out = "```js\n"
  try {
    let res;
    if (trusted) res = eval(str)
    else res = vm.run(str)
    if (typeof res == "undefined" || res == null) res = String(res)
    if (res.constructor.name == "Object" || res.constructor.name == "Array" || res instanceof Object) res = JSON.stringify(res, null, "  ")
    res = res.toString()
    if (res.length > (2000 - 50)) {
      res = `${res.slice(0, 2000 - 50)}\n...${res.length - (2000 - 50)} left...`
    }
    out += res
  } catch (e) {
    out += e
  }
  return out + "\n```"
}

const staff = ["815988892926476318"]

command("eval", (msg, args) => {
  let str = args.join(" ")
  let res = (staff.includes(msg.author.id) ? staff_eval : untrusted_eval)(str, staff.includes(msg.author.id), msg)
  msg.channel.send(res)
})