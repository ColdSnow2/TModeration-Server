const { VM } = require("vm2");

function run(_, msg) {
	let sp = msg.content.split(' ');

	sp.shift();
	
	sp.shift();
	
	function vmStringify(obj) {
	if (obj === undefined || obj === null)
		return obj === undefined ? "undefined" : "null";
	  
	if (typeof(obj) != "object")
		  return obj.toString();
	  
	  let str = "{ ";
	
	  let keys = Object.keys(obj);
	
	  let values = Object.values(obj);
	
	  for (let i = 0; i < keys.length; i++) {
		  let v = "";
	
		  if (typeof(values[i]) == "object")
			  v = "[Object]";
		  else if (typeof(values[i]) == "function")
			  v = "[Function]";
		  else
			  v = values[i].toString();
		  
		  str += `${keys[i]}: ${v}, `;
	  }
	
	  return str == "{ " ? "{}" : str.substring(0, str.length - 2) + " }";
	}
	
	// Unlike the insecure eval below this, theres no need to put this is a separate file since it's actually secure
	
	let vm = new VM({
	  timeout: 1000,
	  allowAsync: false,
	  sandbox: {
		  console: {
			  log: (obj) => {
				  msg.channel.send("```js\n" + vmStringify(obj) + "\n```");
			  }
		  }
	  }
	});
	
	try {
		let result = vm.run(sp.join(' '));
		
		msg.reply("Result\n```js\n" + vmStringify(result) + "\n```");
	}
	catch (e) {
		msg.reply("```js\n" + `${e.name}: ${e.message}` + "\n```");
	}
}

module.exports = {
	run,
	description: "Securely eval JS, publicly usable by anyone."
};